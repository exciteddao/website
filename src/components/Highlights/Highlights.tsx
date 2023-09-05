import { t } from 'i18next';
import { Highlight } from './Highlight';
import type { THighlight } from './types';

import './Highlights.css';

const highlights: Array<THighlight> = t('highlights', { returnObjects: true });

export function Highlights() {
  return (
    <section className="flex flex-col gap-20 highlights sm:px-0 md:px-[20px] xl:px-[120px]">
      {highlights.map((highlight, index) => (
        <Highlight key={index} {...highlight} />
      ))}
    </section>
  );
}
