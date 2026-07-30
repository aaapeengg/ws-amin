import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AdminCard({ children }: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-6
        transition-all
        duration-300
        hover:border-[var(--primary)]
        hover:shadow-xl
        hover:shadow-cyan-500/10
      "
    >
      {children}
    </div>
  );
}