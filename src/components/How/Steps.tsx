import { t } from 'i18next';
import { Connection } from './Connection';

export function Steps() {
  return (
    <>
      <div className="hidden xl:flex justify-end pr-[120px] 2xl:pr-[200px]">
        <div className="flex flex-col items-center connection">
          <label>{t('how.step3ReturnLabel')}</label>
          <img src="/images/top-back-arrow.svg" alt="top back arrow" />
        </div>
      </div>

      <div className="hidden xl:flex justify-center items-center gap-8">
        <div className="step">
          <div className="diamond first">
            <div className="inner" />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 mt-[-100px] z-10">
            <img src="/images/friend-bots.png" alt="friend bots" />
            <label>{t('how.step1Label')}</label>
          </div>
        </div>
        <Connection label={t('how.step1ToStep2Label')} />
        <div className="step">
          <div className="diamond second">
            <div className="inner" />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 mt-[-100px] z-10">
            <img src="/images/bulb-robot.png" alt="friend bots" />
            <label>{t('how.step2Label')}</label>
          </div>
        </div>
        <Connection label={t('how.step2ToStep3Label')} />
        <div className="step">
          <div className="diamond third">
            <div className="inner" />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 mt-[-100px] z-10">
            <img src="/images/ship.png" alt="friend bots" />
            <label>{t('how.step3Label')}</label>
          </div>
        </div>
      </div>

      <div className="hidden xl:flex justify-start pl-[120px] 2xl:pl-[180px]">
        <div className="flex flex-col items-center connection">
          <label>{t('how.step2ReturnLabel')}</label>
          <img className="mt-[-30px]" src="/images/bottom-back-arrow.svg" alt="bottom back arrow" />
        </div>
      </div>
    </>
  );
}
