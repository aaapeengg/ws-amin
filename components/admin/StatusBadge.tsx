type Props = {
  status: "ACTIVE" | "MAINTENANCE" | "COMING_SOON";
};

export default function StatusBadge({ status }: Props) {
  if (status === "ACTIVE") {
    return (
      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
        🟢 Active
      </span>
    );
  }

  if (status === "MAINTENANCE") {
    return (
      <span className="rounded-full border border-red-500/20 bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-400">
        🔴 Maintenance
      </span>
    );
  }

  return (
    <span className="rounded-full border border-yellow-500/20 bg-yellow-500/15 px-3 py-1 text-xs font-semibold text-yellow-400">
      🟡 Coming Soon
    </span>
  );
}