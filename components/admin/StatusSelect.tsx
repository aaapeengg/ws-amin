"use client";

import { useTransition } from "react";
import { updateGameStatus } from "@/app/admin/games/actions";

type Props = {
  id: string;
  status: "ACTIVE" | "MAINTENANCE" | "COMING_SOON";
};

export default function StatusSelect({
  id,
  status,
}: Props) {
  const [pending, startTransition] = useTransition();

  return (
    <select
      defaultValue={status}
      disabled={pending}
      onChange={(e) =>
        startTransition(async () => {
          await updateGameStatus(
            id,
            e.target.value as
              | "ACTIVE"
              | "MAINTENANCE"
              | "COMING_SOON"
          );
        })
      }
      className="
        rounded-xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        px-3
        py-2
        text-sm
        outline-none
        focus:border-[var(--primary)]
      "
    >
      <option value="ACTIVE">🟢 Active</option>

      <option value="MAINTENANCE">
        🔴 Maintenance
      </option>

      <option value="COMING_SOON">
        🟡 Coming Soon
      </option>
    </select>
  );
}