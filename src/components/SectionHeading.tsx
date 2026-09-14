import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`space-y-3 ${isCenter ? 'text-center mx-auto' : ''} ${className}`}>
      {label && (
        <span
          className={`inline-block text-[11px] tracking-widest uppercase font-medium ${
            light ? 'text-stone-300' : 'text-stone-500'
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] whitespace-pre-line tracking-tight ${
          light ? 'text-ivory' : 'text-espresso'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
            isCenter ? 'mx-auto' : ''
          } ${light ? 'text-stone-300 font-light' : 'text-stone-600'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
