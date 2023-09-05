type PointProps = {
  point: string;
  index: number;
};

export function Point({ point, index }: PointProps) {
  return (
    <li key={index} className="flex flex-col items-start">
      <label>{index}</label>
      {point}
    </li>
  );
}
