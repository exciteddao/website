import { t } from 'i18next';
import { Logo } from '../Logo';
import './Header.css';
import { DesktopNavMenu } from './DesktopNavMenu';
import { MobileNavMenu } from './MobileNavMenu';

const menuItems: Array<{ text: string; url: string }> = t('header.menu', { returnObjects: true });

export function Header(): React.ReactElement {

  return (
    <header className="flex justify-between items-center md:items-end p-4 sm:px-12 header">
      <div className="max-w-[30%] md:max-w-full mr-8">
        <Logo className="text-white w-full" />
      </div>
      <DesktopNavMenu menuItems={menuItems} />
      <MobileNavMenu menuItems={menuItems} />
      <button id="xctd-menu" className="block sm:hidden self-end hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
