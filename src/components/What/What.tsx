import './What.css';
import { t } from 'i18next';

export function What() {
  return (
    <section className="what">
      <h2 className="title">{t('what.title')}</h2>
    </section>
  );
}
