import './Feature.css';

type FeatureProps = {
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
  imageUrl: string;
};

export function Feature({
  title,
  description,
  linkUrl,
  linkText,
  imageUrl,
}: FeatureProps): React.ReactElement {
  return (
    <div className="flex flex-col justify-between items-center gap-8 feature">
      <div className="max-w-[100px] lg:max-w-[30%] xl:max-w-[130px] image">
        <img src={imageUrl} alt={title} />
      </div>
      <div>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
      <a className="shrink-1 cta" href={linkUrl}>
        {linkText}
      </a>
    </div>
  );
}
