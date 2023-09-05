import './Header.css';

export function Header(): React.ReactElement {
  return (
    <div className="flex justify-between items-center">
      <img className="logo" src="/images/xctd-logo.svg" alt="Excited" />
      <ul className="flex items-center gap-8">
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
          <a className="link" href="#">
            Telegram
          </a>
        </li>
        <li>
          <button className="link button">Register</button>
        </li>
      </ul>
    </div>
  );
}
