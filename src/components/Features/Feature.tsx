import './feature.css';

type FeatureProps = {
  title: string;
  description: string;
  link: string;
  linkText: string;
};

export function Feature({ title, description, link, linkText }: FeatureProps): React.ReactElement {
  return (
    <div className="flex flex-col justify-between items-center gap-8 feature">
      <div>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
      <a className="shrink-1 cta" href={link}>
        {linkText}
      </a>
    </div>
  );
}
