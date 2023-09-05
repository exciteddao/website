import { Point } from './Point';
import type { THighlight } from './types';

export function Highlight({ title, description, ctaLabel, ctaUrl, label, points }: THighlight) {
  return (
    <div className="w-full flex flex-col items-center gap-8 highlight">
      <label className="label">{label}</label>
      <h2 className="title">{title}</h2>
      <p className="mb-[2rem] description">{description}</p>
      <ul className="flex gap-12 mb-[2rem] points">
        {points.map((point, index) => (
          <Point point={point} index={index + 1} />
        ))}
      </ul>
      <a className="cta" href={ctaUrl}>
        {ctaLabel}
      </a>
    </div>
  );
}
