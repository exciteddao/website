import { Logo } from '../Logo';
import { Trans } from 'react-i18next';

import './Footer.css';
import { TelegramButton } from '../TelegramButton';
import { t } from 'i18next';

const menuItems: Array<{ text: string; url: string }> = t('header.menu', { returnObjects: true });
const Menu = menuItems.map(({ text, url }) => (
  <li key={url}>
    <a href={url} className="link">
      {text}
    </a>
  </li>
));

export function Footer() {
  return (
    <section className="lg:px-[120px] footer">
      <footer className="flex flex-wrap justify-between items-center gap-8">
        <div className='basis-full md:basis-1/2 flex flex-col gap-6'>
          <Logo className="text-[#fff]" />
          <h3 className='hidden md:block'>
            <Trans i18nKey="footerText">
              Building the <span>biggest Investment Platform</span> in the market
            </Trans>
          </h3>
          </div>
        <nav>
          <ul className="flex md:flex-col flex-wrap items-end gap-6 md:mt-4">
            {Menu}
            <li>
              <TelegramButton className="text-white" />
            </li>
            <li>
              <a href={t('header.registerButton.url')} className="button">
                {t('header.registerButton.text')}
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
  );
}
