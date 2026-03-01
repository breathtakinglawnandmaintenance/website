import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

type ImageMode = 'cover' | 'contain';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  image: string;
  link: string;

  /**
   * Mode 1 (default): cover = crops, but you can set a smarter focal point via imagePosition.
   * Mode 2: contain = no crop, shows full image with a neutral background.
   */
  imageMode?: ImageMode;

  /**
   * Tailwind object-position classes for Mode 1 (cover).
   */
  imagePosition?: string;

  /**
   * Optional background for contain mode (and as a safe fallback).
   */
  imageBgClassName?: string;

  /**
   * Controls the image frame aspect ratio.
   * Default matches your exported service card images (1200x900 => 4/3).
   */
  imageAspect?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
  link,
  imageMode = 'cover',
  imagePosition = 'object-center',
  imageBgClassName = 'bg-stone-100',
  imageAspect = 'aspect-[4/3]',
}: ServiceCardProps) {
  const isContain = imageMode === 'contain';

  return (
    <Link
      to={link}
      className="group relative flex flex-col bg-white overflow-hidden rounded-sm transition-all duration-500
                 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.16)]
                 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.24)]
                 hover:-translate-y-2"
    >
      {/* Image Header */}
      <div
        className={[
          'relative w-full overflow-hidden',
          imageAspect,
          isContain ? imageBgClassName : '',
        ].join(' ')}
      >
        <img
          src={image}
          alt={title}
          width="1200"
          height="900"
          loading="lazy"
          decoding="async"
          className={[
            'h-full w-full transition-transform duration-1000 group-hover:scale-110',
            isContain ? 'object-contain object-center' : `object-cover ${imagePosition}`,
          ].join(' ')}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-primary-950/20 group-hover:bg-primary-950/10 transition-colors duration-500" />

        {/* Icon */}
        {Icon && (
          <div className="absolute bottom-6 left-6 bg-white p-3 shadow-xl transform transition-transform duration-500 group-hover:scale-110">
            <Icon size={20} className="text-primary-800" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif text-primary-950 mb-4 tracking-tight">
          {title}
        </h3>

        <p className="text-stone-500 leading-relaxed mb-8 text-sm font-light flex-grow">
          {description}
        </p>

        <div className="flex items-center text-secondary-600 font-bold text-[10px] uppercase tracking-[0.3em] transition-colors group-hover:text-primary-600">
          View Service
          <span className="ml-3 h-px w-8 bg-secondary-300 transition-all duration-500 group-hover:w-12 group-hover:bg-primary-400"></span>
        </div>
      </div>
    </Link>
  );
}