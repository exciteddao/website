import { Trans } from 'react-i18next';
import './Hero.css';
import { Header } from '../Header';

export function Hero() {
  return (
    <div className="hero-container">
      <div className="foreground">
        <Header />
        <h1 className="text-2xl md:text-4xl lg:text-5xl title">
          <Trans i18nKey="hero.title">
            Building the <span>biggest Investment Platform</span> in the market
          </Trans>
        </h1>
      </div>
      <div className="background">
        <div className="moon" />
        <div className="city">
          <img src="/images/city.png" alt="city" />
        </div>
        <div className="clouds">
          <img src="/images/clouds.png" alt="clouds" />
        </div>
      </div>
    </div>
  );
}
