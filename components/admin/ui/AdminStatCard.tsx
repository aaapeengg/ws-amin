type Props = {
  label: string;
  value: string | number;
};

export default function AdminStatCard({
  label,
  value,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-6
      "
    >
      <p className="text-[var(--muted)]">
        {label}
      </p>

      <h2 className="font-space text-4xl font-bold text-[var(--primary)] mt-2">
        {value}
      </h2>
    </div>
  );
}