import Image from "next/image";
import Link from "next/link";
import { Star, ChevronRight, Flame } from "lucide-react";

type GameCardProps = {
  title: string;
  image: string;
};

export default function GameCard({ title, image }: GameCardProps) {
  return (
    <Link
      href={`/games/${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="
        group
        relative
        block
        rounded-3xl
        overflow-hidden
        bg-[var(--card)]
        border
        border-[var(--border)]
        hover:border-cyan-400
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:shadow-xl
        hover:shadow-cyan-500/20
      "
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

      {/* IMAGE */}
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

        <div className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-transparent
          to-transparent
        " />

        <div
          className="
            absolute
            top-4
            left-4
            bg-[var(--primary)]
            text-slate-950
            px-3
            py-1
            rounded-full
            text-xs
            font-bold
          "
        >
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

      </div>

      {/* CONTENT */}
      <div className="p-5">

        <h2 className="font-space text-2xl font-bold tracking-tight">
          {title}
        </h2>

        <p className="text-[var(--muted)] mt-2">
          Top Up Instan • Proses Cepat
        </p>

        {/* RATING */}
        <div className="flex items-center gap-1 mt-4">

          {[1,2,3,4,5].map((item)=>(
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

        {/* BUTTON */}
        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            text-[var(--primary)]
            font-semibold
          "
        >
          <span>Top Up Sekarang</span>

          <ChevronRight
            className="
              transition-transform
              duration-300
              group-hover:translate-x-2
            "
            size={20}
          />

        </div>

      </div>

    </Link>
  );
}