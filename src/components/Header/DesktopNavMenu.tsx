import { t } from 'i18next';
import { TelegramButton } from '../TelegramButton';
import type { TMenuItem } from './types';

type DesktopNavMenuProps = {
  menuItems: TMenuItem[];
};

export function DesktopNavMenu({ menuItems }: DesktopNavMenuProps) {
  const Menu = menuItems.map(({ text, url }) => (
    <li key={url}>
      <a href={url} className="link">
        {text}
      </a>
    </li>
  ));

  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-8">
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
  );
}
