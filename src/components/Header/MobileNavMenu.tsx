import { t } from 'i18next';
import { TelegramButton } from '../TelegramButton';
import { useEffect } from 'react';
import { Logo } from '../Logo';
import type { TMenuItem } from './types';

type MobileNavMenuProps = {
  menuItems: TMenuItem[];
  open: boolean;
  onClose: () => void;
};

export function MobileNavMenu({ menuItems, open, onClose }: MobileNavMenuProps) {
  const Menu = menuItems.map(({ text, url }) => (
    <li key={url}>
      <a href={url} onClick={onClose} className="link">
        {text}
      </a>
    </li>
  ));

  const navStyles = `block sm:hidden mobile-nav ${open ? 'mobile-nav-in' : ''}`;

  useEffect(() => {
    if (open) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [open]);

  return (
    <nav className={navStyles}>
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
