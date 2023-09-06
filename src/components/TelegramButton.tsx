import { t } from 'i18next';

type TelegramButtonProps = {
  className?: string;
  width?: number;
  height?: number;
};
export function TelegramButton(props: TelegramButtonProps) {
  return (
    <a href={t('socials.telegram')} target="_blank">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g id="telegram (5) 1" clipPath="url(#clip0_59_1032)">
          <path
            id="Vector"
            d="M11 22C17.0766 22 22 17.0766 22 11C22 4.92342 17.0766 0 11 0C4.92342 0 0 4.92342 0 11C0 17.0766 4.92342 22 11 22ZM5.03342 10.7617L15.6393 6.67242C16.1315 6.49458 16.5614 6.7925 16.4019 7.53683L16.4028 7.53592L14.597 16.0435C14.4632 16.6467 14.1048 16.7933 13.6033 16.5092L10.8533 14.4824L9.52692 15.7603C9.38025 15.9069 9.2565 16.0307 8.97233 16.0307L9.16758 13.2321L14.2642 8.62767C14.4861 8.43242 14.2148 8.32242 13.9223 8.51675L7.62392 12.4823L4.90875 11.6353C4.31933 11.4482 4.3065 11.0458 5.03342 10.7617Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_59_1032">
            <rect width="22" height="22" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}
