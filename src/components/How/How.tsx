import './How.css';
import { t } from 'i18next';
import { Steps } from './Steps';

export function How() {
  return (
    <section id="how-copy-invest-works" className="how">
      <h2>{t('how.title')}</h2>
      <p className="featured-description">{t('how.description')}</p>
      <Steps />
    </section>
  );
}
