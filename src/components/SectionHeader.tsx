interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ eyebrow, title, description, align = 'center' }: SectionHeaderProps) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'text-center' : 'text-left'}>
      <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-ocean-400 mb-3">
        {eyebrow}
      </span>
      <span
        className={`block h-1 w-12 rounded-full bg-gradient-to-r from-ocean-400 to-primary-500 mb-5 ${
          centered ? 'mx-auto' : ''
        }`}
      />
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {description && (
        <p className={`text-gray-400 max-w-2xl ${centered ? 'mx-auto' : ''}`}>{description}</p>
      )}
    </div>
  );
}
