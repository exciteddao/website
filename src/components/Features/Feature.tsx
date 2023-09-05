import './feature.css';

type FeatureProps = {
  title: string;
  description: string;
  link: string;
  linkText: string;
};

export function Feature({ title, description, link, linkText }: FeatureProps): React.ReactElement {
  return (
    <div className="flex flex-col justify-between gap-4 feature">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>{linkText}</a>
    </div>
  );
}
