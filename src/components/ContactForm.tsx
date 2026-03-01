import { FormEvent, useState, ChangeEvent } from 'react';

const MAKE_WEBHOOK_URL =
  'https://hook.us2.make.com/1ymfxkmwi6x2ida5c1ykfo766omuxpnp';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Professional Lawn Care Services',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.service.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus('error');
      return;
    }

    if (isSubmitting || submitStatus === 'success') return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const payload = {
        ...formData,
        source: 'Website Contact Form',
        submittedAt: new Date().toISOString(),
      };

      const res = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`Webhook failed (${res.status}) ${text}`);
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Professional Lawn Care Services',
        message: '',
      });
    } catch (err) {
      console.error('Make webhook error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

        {/* Name */}
        <div className="relative group">
          <label
            htmlFor="contact-name"
            className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-2 block"
          >
            Full Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-secondary-500 focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 transition-colors font-light"
          />
        </div>

        {/* Email */}
        <div className="relative group">
          <label
            htmlFor="contact-email"
            className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-2 block"
          >
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder="jane@example.com"
            className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-secondary-500 focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 transition-colors font-light"
          />
        </div>

        {/* Phone */}
        <div className="relative group">
          <label
            htmlFor="contact-phone"
            className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-2 block"
          >
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
            placeholder="(555) 000-0000"
            className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-secondary-500 focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 transition-colors font-light"
          />
        </div>

        {/* Service */}
        <div className="relative group">
          <label
            htmlFor="contact-service"
            className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-2 block"
          >
            Service Selection
          </label>
          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-secondary-500 focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 transition-colors appearance-none cursor-pointer font-light text-stone-700"
          >
            <option value="Professional Lawn Care Services">
              Professional Lawn Care Services
            </option>
            <option value="Hardscaping">Hardscaping</option>
            <option value="Planting & Mulch">Planting & Mulch</option>
            <option value="Snow Management">Snow Management</option>
            <option value="Property Repair">Property Repair</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="relative group">
        <label
          htmlFor="contact-message"
          className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-2 block"
        >
          Project Details
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Describe your property needs..."
          className="w-full bg-stone-50/50 border border-stone-100 p-4 outline-none focus:border-secondary-500 focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 transition-colors resize-none font-light"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="rounded-sm border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Your request has been submitted. We’ll reach out shortly.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || submitStatus === 'success'}
        className="w-full bg-primary-950 text-white py-5 text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-secondary-500 hover:text-primary-950 focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 transition-all duration-300 shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitStatus === 'success'
          ? 'Request Submitted'
          : isSubmitting
          ? 'Sending…'
          : 'Request Consultation'}
      </button>
    </form>
  );
}