"use client";

import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function AdminSearch({
  value,
  onChange,
  placeholder = "Cari...",
}: Props) {
  return (
    <div className="relative mb-8">

      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-[var(--muted)]
        "
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--card)]
          py-3
          pl-12
          pr-4
          outline-none
          transition-all
          duration-300
          focus:border-[var(--primary)]
          focus:ring-4
          focus:ring-cyan-500/10
        "
      />

    </div>
  );
}