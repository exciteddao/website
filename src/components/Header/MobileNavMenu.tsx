import { t } from 'i18next';
import { TelegramButton } from '../TelegramButton';
import { Logo } from '../Logo';
import type { TMenuItem } from './types';

type MobileNavMenuProps = {
  menuItems: TMenuItem[];
};

export function MobileNavMenu({ menuItems }: MobileNavMenuProps) {
  const Menu = menuItems.map(({ text, url }) => (
    <li key={url}>
      <a href={url} className="link mobile-nav-link">
        {text}
      </a>
    </li>
  ));

  return (
    <nav className="block sm:hidden mobile-nav">
      <ul className="flex flex-col items-center gap-16">
        <Logo className="text-[#4a4a4a]" />
        {Menu}
        <li>
          <TelegramButton className="text-[#AD73FC]" width={60} height={60} />
        </li>
        <li>
          <a href={t('header.registerButton.url')} className="button">
            {t('header.registerButton.text')}
          </a>
        </li>
      </ul>
    </nav>
  );
}
