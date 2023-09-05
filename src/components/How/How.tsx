import './How.css';
import { t } from 'i18next';

export function How() {
  return (
    <section className="how">
      <h2>{t('how.title')}</h2>
      <p className="featured-description">{t('how.description')}</p>
    </section>
  );
}
