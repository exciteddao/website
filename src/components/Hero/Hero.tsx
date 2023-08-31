import './Hero.css';

export function Hero() {
  return (
    <div className="hero-container">
      <img className="logo" src="/images/xctd-logo.svg" alt="Excited" />
      <h1 className="text-2xl md:text-4xl lg:text-5xl title">
        Building the biggest Investment
        <br />
        Platform in the market
      </h1>
    </div>
  );
}
