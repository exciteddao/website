import { Connection } from './Connection';
import './How.css';
import { t } from 'i18next';

export function How() {
  return (
    <section className="how">
      <h2>{t('how.title')}</h2>
      <p className="featured-description">{t('how.description')}</p>
      <div className="hidden xl:flex justify-end pr-[15%]">
        <div className="flex flex-col items-center">
          <label>{t('how.step3ReturnLabel')}</label>
          <img src="/images/top-back-arrow.svg" alt="top back arrow" />
        </div>
      </div>
      <div className="hidden xl:flex justify-center items-center gap-8">
        <div className="step">
          <div className="diamond first">
            <div className="inner" />
          </div>
          <label>{t('how.step1Label')}</label>
        </div>
        <Connection label={t('how.step1ToStep2Label')} />
        <div className="step">
          <div className="diamond second">
            <div className="inner" />
          </div>
          <label>{t('how.step2Label')}</label>
        </div>
        <Connection label={t('how.step2ToStep3Label')} />
        <div className="step">
          <div className="diamond third">
            <div className="inner" />
          </div>
          <label>{t('how.step3Label')}</label>
        </div>
      </div>
      <div className="hidden xl:flex justify-start pl-[15%]">
        <div className="flex flex-col items-center">
          <label>{t('how.step2ReturnLabel')}</label>
          <img src="/images/bottom-back-arrow.svg" alt="bottom back arrow" />
        </div>
      </div>
    </section>
  );
}
