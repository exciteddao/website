import type { THighlight } from './types';

export function Highlight({ title, description, ctaLabel, ctaUrl, label, points }: THighlight) {
  return (
    <section className="highlight">
      <label className="label">{label}</label>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <ul className="points">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <a className="cta" href={ctaUrl}>
        {ctaLabel}
      </a>
    </section>
  );
}
