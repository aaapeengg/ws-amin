import SearchGame from "@/components/SearchGame";
import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="
        relative
        overflow-hidden
        rounded-3xl
        bg-[#111827]
        border
        border-[#233047]
        min-h-[340px] 
        lg:min-h-[430px]
      ">

        {/* Background Glow */}
        <div className="
          absolute
          -top-32
          -right-24
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/20
          blur-3xl
        " />

        <div className="
          absolute
          -bottom-40
          -left-20
          w-[350px]
          h-[350px]
          rounded-full
          bg-sky-500/10
          blur-3xl
        " />

        <div className="
  relative
  z-10
  grid
  lg:grid-cols-2
  items-center
  gap-8
  lg:gap-12
  h-full
  p-6
  lg:p-10
">

          {/* Kiri */}
          <div>

            <span className="
              inline-flex
              bg-cyan-500/20
              text-cyan-300
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
              mb-6
            ">
              ⚡ Promo Top Up Terpercaya
            </span>

            <h1
  className="
    font-space
    text-5xl
    lg:text-6xl
    font-extrabold
    tracking-tight
    leading-tight
  "
>
              Top Up Game
              <br />
              Lebih Cepat,
              <span className="text-cyan-400">
                {" "}Lebih Murah
              </span>
            </h1>

            <p className="
              mt-6
              text-slate-400
              text-lg
              leading-8
            ">
              Diamond ML, Free Fire, PUBG Mobile,
              Valorant dan berbagai game lainnya
              dengan proses instan 24 jam.
            </p>

            <div className="flex gap-4 mt-8">

              <Link
  href="/#games"
  className="
    inline-flex
    items-center
    justify-center
    bg-cyan-500
    hover:bg-cyan-400
    text-slate-950
    font-bold
    px-8
    py-4
    rounded-2xl
    transition-all
    duration-300
    hover:scale-105
    shadow-lg
    shadow-cyan-500/30
  "
>
  Top Up Sekarang
</Link>

              <Link
  href="/#promo"
  className="
    border
    border-[#233047]
    px-7
    py-3
    rounded-xl
    hover:border-cyan-400
    transition-all
  "
>
  Lihat Promo
</Link>

            </div>

          </div>

          {/* Kanan */}
          <div className="
            flex
            items-center
            justify-center
          ">

            <div className="w-full h-[320px]">
  <HeroSlider />
</div>

          </div>

        </div>

      </div>

<div className="mt-8">
  <SearchGame />
</div>

    </section>
  );
}