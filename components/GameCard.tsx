import Image from "next/image";
import Link from "next/link";
import { Star, ChevronRight, Flame } from "lucide-react";

type GameCardProps = {
  title: string;
  image: string;
  slug: string;
  status: "ACTIVE" | "MAINTENANCE" | "COMING_SOON";
};

export default function GameCard({
  title,
  image,
  slug,
  status,
}: GameCardProps) {
  const isActive = status === "ACTIVE";

  return (
    <Link
      href={isActive ? `/games/${slug}` : "#"}
      className={`
        group
        relative
        block
        rounded-3xl
        overflow-hidden
        bg-[var(--card)]
        border
        border-[var(--border)]
        transition-all
        duration-300
        ${
          isActive
            ? "hover:border-cyan-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/20"
            : "pointer-events-none opacity-80"
        }
      `}
    >
      <div
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          group-hover:translate-x-full
          transition-transform
          duration-1000
          pointer-events-none
          z-20
        "
      />

      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div
          className="
            absolute
            top-4
            left-4
            flex
            items-center
            gap-1.5
            bg-[var(--primary)]
            text-slate-950
            px-3
            py-1
            rounded-full
            text-xs
            font-bold
          "
        >
          <Flame size={13} />
          Populer
        </div>
      </div>

      <div className="p-5">
        <h2 className="font-space text-2xl font-bold tracking-tight">
          {title}
        </h2>

        <p className="text-[var(--muted)] mt-2">
          Top Up Instan • Proses Cepat
        </p>

        <div className="mt-3">
          {status === "ACTIVE" && (
            <span className="rounded-full bg-emerald-500/15 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
              🟢 Active
            </span>
          )}

          {status === "MAINTENANCE" && (
            <span className="rounded-full bg-red-500/15 border border-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
              🔴 Maintenance
            </span>
          )}

          {status === "COMING_SOON" && (
            <span className="rounded-full bg-yellow-500/15 border border-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-400">
              🟡 Coming Soon
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 mt-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <Star
              key={item}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}

          <span className="ml-2 text-sm text-slate-400">
            5.0
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between text-[var(--primary)] font-semibold">
          <span>
            {status === "ACTIVE"
              ? "Top Up Sekarang"
              : status === "MAINTENANCE"
              ? "Maintenance"
              : "Segera Hadir"}
          </span>

          <ChevronRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </div>
      </div>
    </Link>
  );
}