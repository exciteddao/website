import { t } from 'i18next';
import { Feature } from './Feature';

export function Features(): React.ReactElement {
  return (
    <div className="flex flex-row flex-wrap md:flex-nowrap items-stretch gap-8 mt-32">
      <div className="basis-full md:basis-1/3 mb-16">
        <Feature
          imageUrl={t('features.feature1.imageUrl')}
          title={t('features.feature1.title')}
          description={t('features.feature1.description')}
          linkUrl={t('features.feature1.linkUrl')}
          linkText={t('features.feature1.linkText')}
        />
      </div>
      <div className="basis-full md:basis-1/3 mb-16">
        <Feature
          imageUrl={t('features.feature2.imageUrl')}
          title={t('features.feature2.title')}
          description={t('features.feature2.description')}
          linkUrl={t('features.feature2.linkUrl')}
          linkText={t('features.feature2.linkText')}
        />
      </div>
      <div className="basis-full md:basis-1/3 mb-16">
        <Feature
          imageUrl={t('features.feature3.imageUrl')}
          title={t('features.feature3.title')}
          description={t('features.feature3.description')}
          linkUrl={t('features.feature3.linkUrl')}
          linkText={t('features.feature3.linkText')}
        />
      </div>
    </div>
  );
}