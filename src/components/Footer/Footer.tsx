import { Logo } from '../Logo';
import { Trans } from 'react-i18next';

import './Footer.css';
import { TelegramButton } from '../TelegramButton';

export function Footer() {
  return (
    <section className="footer">
      <div className="flex flex-wrap justify-center items-center">
        <div className="md:basis-1/4 hidden md:block">
          <img src="/website/images/plant-bot.png" alt="plant bot" />
        </div>
        <footer className="md:basis-1/2 flex flex-col items-center gap-8">
          <Logo className="text-[#AD73FC]" />
          <h3 className="text-center">
            <Trans i18nKey="footerText">
              Building the biggest <span>Investment Platform</span> in the market
            </Trans>
          </h3>
          <TelegramButton className="text-[#AD73FC]" width={44} height={44} />
        </footer>
        <div className="md:basis-1/4 hidden md:block">
          <img src="/website/images/plant-bot2.png" alt="plant bot 2" />
        </div>
      </div>
    </section>
  );
}
