import { Trans } from 'react-i18next';
import { t } from 'i18next';
import './Hero.css';

export function Hero() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh] md:min-h-[70vh] hero">
      <div className="foreground">
        <div className="flex flex-col gap-8 justify-center items-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl title">
            <Trans i18nKey="hero.title">
              Building the <span>biggest Investment Platform</span> in the market
            </Trans>
          </h1>
          <a href={t('hero.ctaUrl')} className="cta">
            {t('hero.ctaLabel')}
          </a>
        </div>
      </div>
      <div className="background">
        <div className="w-[150%] pt-[150%] lg:w-[110%] lg:pt-[110%] moon" />
        <div className="moon-b" />
        <div className="moon-c" />
        <div className="bottom-0 lg:bottom-[-20%] city">
          <img className="object-cover w-[100%]" src="/images/city.png" alt="city" />
        </div>
        <div className="w-[40%] md:w-[20%] clouds">
          <img src="/images/clouds.png" alt="clouds" />
        </div>
      </div>
    </div>
  );
}
