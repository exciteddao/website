import { t } from 'i18next';
import { Logo } from '../Logo';
import './Header.css';
import { DesktopNavMenu } from './DesktopNavMenu';
import { MobileNavMenu } from './MobileNavMenu';
import { useState } from 'react';

const menuItems: Array<{ text: string; url: string }> = t('header.menu', { returnObjects: true });

export function Header(): React.ReactElement {
  const [open, setOpen] = useState(false);

  const hamburgerStyles = `block sm:hidden self-end hamburger ${open ? 'open' : ''}`;

  return (
    <header className="flex justify-between items-center md:items-end header">
      <div className="max-w-[30%] md:max-w-full mr-8">
        <Logo className="text-white w-full" />
      </div>
      <DesktopNavMenu menuItems={menuItems} />
      <MobileNavMenu menuItems={menuItems} open={open} onClose={() => setOpen(false)} />
      <button onClick={() => setOpen(!open)} className={hamburgerStyles}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
