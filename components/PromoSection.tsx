export default function PromoSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

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

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--card)]
            p-8
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
              top-0
              right-0
              h-24
              w-24
              rounded-full
              bg-cyan-500/20
              blur-3xl
            "
          />

          <span
            className="
              inline-block
              rounded-full
              bg-[var(--primary)]
              px-3
              py-1
              text-xs
              font-bold
              text-slate-950
            "
          >
            FLASH SALE
          </span>

          <h3 className="font-space text-3xl font-bold mt-6">
            Mobile Legends
          </h3>

          <p className="text-[var(--muted)] mt-2">
            Diskon hingga
          </p>

          <div className="mt-4 text-6xl font-black text-[var(--primary)]">
            20%
          </div>

          <p className="text-[var(--muted)] mt-4">
            Berakhir dalam
          </p>

          <div className="mt-2 text-2xl font-bold">
            02 : 15 : 48
          </div>

          <button
            className="
              mt-8
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              py-3
              font-bold
              transition
              hover:scale-[1.02]
            "
          >
            Klaim Promo
          </button>

        </div>

      </div>

    </section>
  );
}