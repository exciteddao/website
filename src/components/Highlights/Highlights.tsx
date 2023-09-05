import { t } from 'i18next';
import { Highlight } from './Highlight';
import type { THighlight } from './types';

const highlights: Array<THighlight> = t('highlights', { returnObjects: true });

export function Highlights() {
  return (
    <div className="highlights">
      {highlights.map((highlight, index) => (
        <Highlight key={index} {...highlight} />
      ))}
    </div>
  );
}
