import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  value: ReactNode;
};

export default function InfoRow({
  icon,
  label,
  value,
}: Props) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        {icon}

        <span className="text-slate-400">
          {label}
        </span>

      </div>

      <div className="text-right font-semibold text-white">
        {value}
      </div>

    </div>
  );
}