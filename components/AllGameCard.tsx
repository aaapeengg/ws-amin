import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  slug: string;
  developer: string;
  status: "ACTIVE" | "MAINTENANCE" | "COMING_SOON";
};

export default function AllGameCard({
  title,
  image,
  slug,
  developer,
  status,
}: Props) {
  const active = status === "ACTIVE";

  return (
    <Link
      href={active ? `/games/${slug}` : "#"}
      className={`
  group
  rounded-xl
  overflow-hidden
  bg-[#101827]
  border
  border-slate-800
  transition-all
  duration-300

  ${
    active
      ? "hover:border-cyan-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20"
      : "pointer-events-none opacity-70"
  }
`}
    >
      <div
  className="
    relative
    aspect-[2/3]
    overflow-hidden
  "
>

        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition
            duration-500
            group-hover:scale-105
          "
        />

      </div>

      <div
  className="
    hidden
    lg:flex

    absolute
    inset-0
    z-10
    
    bg-gradient-to-t
    from-black/90
    via-black/40
    to-transparent

    opacity-0
    group-hover:opacity-100

    transition-all
    duration-300

    flex
    flex-col
    justify-end

    p-4
  "
>

  <h3
    className="
      text-white
      font-bold
      text-lg
      translate-y-4
      group-hover:translate-y-0
      transition-all
      duration-300
    "
  >
    {title}
  </h3>

  <p
  className="
    text-slate-300
    text-sm
    translate-y-4
    group-hover:translate-y-0
    transition-all
    duration-500
  "
>
  {developer}
</p>

</div>
    </Link>
  );
}