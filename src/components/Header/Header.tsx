import { Logo } from '../Logo';
import { TelegramButton } from '../TelegramButton';
import './Header.css';

export function Header(): React.ReactElement {
  return (
    <header className="flex justify-between items-center header">
      <Logo className="text-white" />
      <ul className="hidden sm:flex items-center gap-8">
        <li>
          <a className="link" href="#">
            Traders
          </a>
        </li>
        <li>
          <a className="link" href="#">
            Projects
          </a>
        </li>
        <li>
          <a className="link" href="#">
            Members
          </a>
        </li>
        <li>
          <TelegramButton className="text-white" />
        </li>
        <li>
          <button className="link button">Register</button>
        </li>
      </ul>
    </header>
  );
}
