import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  CircleCheck,
  CircleAlert,
  Clock3,
} from "lucide-react";

type PopularGameCardProps = {
  title: string;
  image: string;
  slug: string;
  developer: string;
  status: "ACTIVE" | "MAINTENANCE" | "COMING_SOON";
};

export default function PopularGameCard({
  title,
  image,
  slug,
  status,
  developer,
}: PopularGameCardProps) {
  const isActive = status === "ACTIVE";

  return (
    <Link
      href={isActive ? `/games/${slug}` : "#"}
      className={`
        group
        relative
        flex
        flex-col
        h-full
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-[#101827]
        transition-all
        duration-300

        ${
          isActive
            ? "hover:border-cyan-400 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20"
            : "pointer-events-none opacity-80"
        }
      `}
    >
      {/* IMAGE */}

      <div className="relative aspect-[16/6] overflow-hidden">

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

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div
  className="
    absolute
    top-2
    left-2

    inline-flex
    items-center
    gap-1

    rounded-full

    bg-cyan-500
    px-2.5
    py-1

    text-[10px]
    font-bold
    uppercase
    tracking-wide

    text-slate-950
  "
>
  <Flame size={10} />

  Populer
</div>

      </div>

      {/* CONTENT */}

      <div className="p-2 flex-1">

        <h2
          className="
            text-sm
            lg:text-base
            font-semibold
            text-white
            transition
            group-hover:text-cyan-400
          "
        >
          {title}
        </h2>

        <div className="mt-2">

          {status === "ACTIVE" && (
            <span
  className="
    inline-flex
    items-center
    rounded-full
    border
    border-cyan-500/20
    bg-cyan-500/15
    px-2
    py-0.5
    text-[10px]
    font-medium
    text-cyan-400
  "
>
  {developer}
</span>
          )}

          {status === "MAINTENANCE" && (
            <span
              className="
                inline-flex
                items-center
                gap-1

                rounded-full

                bg-red-500/15
                border
                border-red-500/20

                px-2
                py-0.5

                text-[10px]
                font-semibold
                text-red-400
              "
            >
              <CircleAlert size={11} />
              Maintenance
            </span>
          )}

          {status === "COMING_SOON" && (
            <span
              className="
                inline-flex
                items-center
                gap-1

                rounded-full

                bg-yellow-500/15
                border
                border-yellow-500/20

                px-2
                py-0.5

                text-[10px]
                font-semibold
                text-yellow-400
              "
            >
              <Clock3 size={11} />
              Coming Soon
            </span>
          )}

        </div>

      </div>
    </Link>
  );
}