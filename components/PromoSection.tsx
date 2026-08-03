import {
  Flame,
  Clock3,
  Gift,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function PromoSection() {
  return (
    <section
  id="promo">

      <div className="mb-10">

        <p className="text-[var(--primary)] font-semibold tracking-widest uppercase">
          PROMO TERBATAS
        </p>

        <h2 className="font-space text-4xl md:text-5xl font-bold mt-2">
          Flash Sale Hari Ini
        </h2>

        <p className="text-[var(--muted)] mt-4 max-w-2xl">
          Dapatkan harga terbaik untuk top up game favoritmu.
          Promo diperbarui setiap hari dengan penawaran spesial.
        </p>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >

        {/* CARD 1 */}

        {[
  {
    icon: Flame,
    title: "Mobile Legends",
    discount: "20%",
    color: "cyan",
  },
  {
    icon: Gift,
    title: "Free Fire",
    discount: "15%",
    color: "emerald",
  },
  {
    icon: Zap,
    title: "Valorant",
    discount: "10%",
    color: "amber",
  },
].map((promo) => {

  const Icon = promo.icon;

  return (

    <div
      key={promo.title}
      className="
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-[var(--border)]

        bg-[var(--card)]

        p-8

        transition-all
        duration-300

        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-cyan-500/20
      "
    >

      <div
        className="
          absolute
          -right-10
          -top-10

          h-36
          w-36

          rounded-full

          bg-cyan-500/10

          blur-3xl
        "
      />

      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        <div
          className="
            flex
            h-14
            w-14

            items-center
            justify-center

            rounded-2xl

            bg-cyan-500/10
          "
        >

          <Icon className="h-7 w-7 text-cyan-400"/>

        </div>

        <span
          className="
            rounded-full

            bg-cyan-500/10

            px-3
            py-1

            text-xs
            font-semibold

            text-cyan-400
          "
        >
          FLASH SALE
        </span>

      </div>

      <h3 className="mt-8 text-3xl font-bold">
        {promo.title}
      </h3>

      <p className="mt-2 text-[var(--muted)]">
        Diskon hingga
      </p>

      <p
        className="
          mt-4

          text-6xl
          font-black

          text-cyan-400
        "
      >
        {promo.discount}
      </p>

      <div
        className="
          mt-6

          flex
          items-center
          gap-2

          text-slate-400
        "
      >

        <Clock3 className="h-4 w-4"/>

        Berakhir dalam

      </div>

      <p className="mt-2 text-2xl font-bold">
        02 : 15 : 48
      </p>

      <button
        className="
          mt-8

          flex
          w-full

          items-center
          justify-center
          gap-2

          rounded-2xl

          bg-gradient-to-r
          from-cyan-500
          to-blue-600

          py-3

          font-bold

          transition-all
          duration-300

          hover:scale-[1.02]
        "
      >

        Klaim Promo

        <ArrowRight className="h-5 w-5"/>

      </button>

    </div>

  );

})}

      </div>

    </section>
  );
}