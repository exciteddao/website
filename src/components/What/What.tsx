import { Trans } from 'react-i18next';
import './What.css';
import { t } from 'i18next';

export function What() {
  return (
    <section className="what">
      <h2 className="title">{t('what.title')}</h2>
      <p className="description">
        <Trans key="what.description">
          At the core of our platform is the Excited investment DAO.{' '}
          <strong>A community of hundreds of accredited investors</strong>, all market veterans and
          leaders, working together to pool our influence and buying power to negotiate the{' '}
          <strong>best investment deals in the market</strong> with lower risk. We then share to our
          deal flow and allocations at the same exact terms with our copy-investor community
        </Trans>
      </p>
      <img src={t('what.imageUrl')} alt="members list" />
    </section>
  );
}
