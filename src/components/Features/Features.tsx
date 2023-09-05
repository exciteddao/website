import { t } from 'i18next';
import { Feature } from './Feature';

export function Features(): React.ReactElement {
  return (
    <div className="flex flex-row items-stretch gap-8 mt-32">
      <div className="basis-1/3">
        <Feature
          title={t('features.feature1.title')}
          description={t('features.feature1.description')}
          link={t('features.feature1.linkUrl')}
          linkText={t('features.feature1.linkText')}
        />
      </div>
      <div className="basis-1/3">
        <Feature
          title={t('features.feature2.title')}
          description={t('features.feature2.description')}
          link={t('features.feature2.linkUrl')}
          linkText={t('features.feature2.linkText')}
        />
      </div>
      <div className="basis-1/3">
        <Feature
          title={t('features.feature3.title')}
          description={t('features.feature3.description')}
          link={t('features.feature3.linkUrl')}
          linkText={t('features.feature3.linkText')}
        />
      </div>
    </div>
  );
}
