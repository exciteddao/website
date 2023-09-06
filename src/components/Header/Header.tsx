import { t } from 'i18next';
import { Logo } from '../Logo';
import { TelegramButton } from '../TelegramButton';
import './Header.css';

const menuItems: Array<{ text: string; url: string }> = t('header.menu', { returnObjects: true });
const Menu = menuItems.map(({ text, url }) => (
  <li key={url}>
    <a href={url} className="link">
      {text}
    </a>
  </li>
));

export function Header(): React.ReactElement {
  return (
    <header className="flex justify-between items-center md:items-end header">
      <div className="max-w-[30%] md:max-w-full mr-8">
        <Logo className="text-white w-full" />
      </div>
      <ul className="hidden sm:flex items-center gap-8">
        {Menu}
        <li>
          <TelegramButton className="text-white" />
        </li>
        <li>
          <a href={t('header.registerButton.url')} className="link button">
            {t('header.registerButton.text')}
          </a>
        </li>
      </ul>
    </header>
  );
}
