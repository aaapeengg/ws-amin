import { ReactNode } from "react";

type Props = {
  badge: string;
  title: string;
  description: string;
  action?: ReactNode;
};

export default function AdminHeader({
  badge,
  title,
  description,
  action,
}: Props) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

      <div>

        <p className="text-[var(--primary)] uppercase tracking-[0.2em] text-sm font-semibold">
          {badge}
        </p>

        <h1 className="font-space text-4xl font-bold mt-2">
          {title}
        </h1>

        <p className="text-[var(--muted)] mt-3 max-w-xl">
          {description}
        </p>

      </div>

      {action}

    </div>
  );
}