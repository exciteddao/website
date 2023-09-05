import { Trans } from 'react-i18next';
import { t } from 'i18next';
import './Hero.css';
import { Header } from '../Header';

export function Hero() {
  return (
    <section className="hero">
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
        <div className="moon" />
        <div className="city">
          <img className="object-cover" src="/images/city.png" alt="city" />
        </div>
        <div className="clouds">
          <img src="/images/clouds.png" alt="clouds" />
        </div>
      </div>
    </section>
  );
}
