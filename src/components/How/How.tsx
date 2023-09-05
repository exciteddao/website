import './How.css';
import { t } from 'i18next';
import { Steps } from './Steps';

export function How() {
  return (
    <section className="how">
      <h2>{t('how.title')}</h2>
      <p className="featured-description">{t('how.description')}</p>
      <Steps />
    </section>
  );
}
