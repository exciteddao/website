type ConnectionProps = {
  label: string;
};

export function Connection({ label }: ConnectionProps) {
  return (
    <div className="flex flex-col items-center gap-4 connection">
      <label>{label}</label>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="52"
        viewBox="0 0 48 52"
        fill="none"
      >
        <path
          d="M0 52.0007L25.9743 26.0015L0 0.000732422H22.0418L48 26.0015L22.0418 52.0007H0Z"
          fill="#917FF9"
        />
      </svg>
    </div>
  );
}
