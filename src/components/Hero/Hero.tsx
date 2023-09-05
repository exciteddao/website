import { Trans } from 'react-i18next';
import { t } from 'i18next';
import './Hero.css';
import { Header } from '../Header';

export function Hero() {
  return (
    <section className="min-h-[35vh] lg:max-h-[1000px] hero">
      <div className="foreground">
        <Header />
        <div className="flex flex-col gap-8 justify-center items-center mt-28">
          <h1 className="text-2xl md:text-4xl lg:text-5xl title">
            <Trans i18nKey="hero.title">
              Building the <span>biggest Investment Platform</span> in the market
            </Trans>
          </h1>
          <button className="cta">{t('hero.ctaLabel')}</button>
        </div>
      </div>
      <div className="background">
        <div className="w-[150%] pt-[150%] lg:w-[110%] lg:pt-[110%] moon" />
        <div className="moon-b" />
        <div className="moon-c" />
        <div className="bottom-0 lg:bottom-[-30%] city">
          <img className="object-cover" src="/images/city.png" alt="city" />
        </div>
        <div className="clouds">
          <img src="/images/clouds.png" alt="clouds" />
        </div>
      </div>
    </section>
  );
}
