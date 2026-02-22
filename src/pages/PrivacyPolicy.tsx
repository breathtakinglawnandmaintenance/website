// src/pages/PrivacyPolicy.tsx

import React from "react";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  const effectiveDate = "February 21, 2026";

  return (
    <main className="bg-stone-50 min-h-screen pt-48 pb-24">
      <SEO
        title="Privacy Policy | Breathtaking Lawn & Maintenance"
        description="Privacy Policy for Breathtaking Lawn & Maintenance. Learn how we collect and use information submitted through our contact form."
        canonicalPath="/privacy-policy"
      />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-sm shadow-[0_50px_100px_-30px_rgba(0,0,0,0.12)] p-8 md:p-12">
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-primary-950">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-stone-500">
              Effective date: {effectiveDate}
            </p>
            <div className="w-24 h-px bg-secondary-400 mx-auto mt-6" />
          </header>

          <div className="prose prose-stone max-w-none">
            <p>
              This Privacy Policy explains how Breathtaking Lawn &amp; Maintenance
              (“we,” “us,” or “our”) collects and uses information when you use our
              website.
            </p>

            <h2>Information we collect</h2>
            <p>
              When you submit our contact form, we collect the information you
              provide, which may include:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Service selection</li>
              <li>Message/details you submit</li>
            </ul>

            <h2>How we use your information</h2>
            <p>We use the information you submit to:</p>
            <ul>
              <li>Respond to your inquiry</li>
              <li>Provide estimates/quotes</li>
              <li>Schedule or coordinate services</li>
              <li>Communicate with you about your request</li>
            </ul>

            <h2>Sharing of information</h2>
            <p>
              We do not sell your personal information. We do not share your
              information with third parties for their marketing purposes.
            </p>
            <p>
              We may share information with service providers only as needed to
              operate our website and deliver messages (for example, website hosting
              and email delivery). These providers are used only to provide services
              to us.
            </p>

            <h2>Data retention</h2>
            <p>
              We keep contact form submissions only as long as necessary to respond
              to you and for normal business recordkeeping.
            </p>

            <h2>Security</h2>
            <p>
              We take reasonable measures to protect your information. However, no
              method of transmission or storage is completely secure.
            </p>

            <h2>Your choices</h2>
            <p>
              You may request access, correction, or deletion of your contact form
              information by contacting us using the information provided on our
              website.
            </p>
            <p>
              Contact us at{" "}
              <a href="mailto:Breathtakinglawnandmaintenance@yahoo.com">
                Breathtakinglawnandmaintenance@yahoo.com
              </a>{" "}
              or call 518-682-0033.
            </p>

            <h2>Children’s privacy</h2>
            <p>
              Our website is not intended for children under 13, and we do not
              knowingly collect personal information from children.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will be
              posted on this page with a revised effective date.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}