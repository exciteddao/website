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
    <section className="xl:px-[120px] footer">
      <footer className="flex flex-wrap justify-between ">
        <div className='basis-1/2 flex flex-col gap-6'>
          <Logo className="text-[#fff]" />
          <h3>
            <Trans i18nKey="footerText">
              Building the <span>biggest Investment Platform</span> in the market
            </Trans>
          </h3>
          </div>
        <nav className="hidden sm:block">
          <ul className="flex flex-col items-end gap-6">
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
