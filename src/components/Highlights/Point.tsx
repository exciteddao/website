type PointProps = {
  point: string;
  index: number;
};

export function Point({ point, index }: PointProps) {
  return (
    <li className="flex flex-col items-start basis-1/4">
      <label>{index}</label>
      {point}
    </li>
  );
}
