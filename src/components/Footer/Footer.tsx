import { t } from 'i18next';

export function Footer() {
  return (
    <section className="footer">
      <footer>
        <h3>{t('footerText')}</h3>
      </footer>
    </section>
  );
}
