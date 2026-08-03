import { Search, PackageSearch } from "lucide-react";
import Link from "next/link";

export default function HistoryPage() {
  return (
    <main className="max-w-5xl mx-auto px-5 py-10">

      <h1 className="text-4xl font-bold">
        Riwayat Transaksi
      </h1>

      <p className="mt-2 text-slate-400">
        Cek status transaksi top up kamu.
      </p>

      <div className="relative mt-8">

        <Search
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-500
          "
          size={20}
        />

        <input
          placeholder="Cari Invoice..."
          className="
            w-full

            rounded-2xl

            border
            border-slate-700

            bg-slate-900

            py-4
            pl-12
            pr-4

            outline-none

            focus:border-cyan-500
            focus:ring-4
            focus:ring-cyan-500/20
          "
        />

      </div>

<div
  className="
    mt-12

    rounded-3xl

    border
    border-slate-700

    bg-slate-900

    p-8
    md:p-12

    text-center
  "
>

  <div className="relative mx-auto h-20
w-20
md:h-24
md:w-24">

  <div
    className="
      absolute
      inset-0

      rounded-full

      bg-cyan-500/20

      blur-2xl
    "
  />

  <div
    className="
      relative

      flex
      h-24
      w-24

      items-center
      justify-center

      rounded-full

      border
      border-cyan-500/20

      bg-cyan-500/10
    "
  >

    <PackageSearch
      size={36}
      className="text-cyan-400"
    />

  </div>

</div>

  <h2
    className="
      mt-8

      text-xl
md:text-2xl
      font-bold
    "
  >
    Belum ada transaksi
  </h2>

  <p
    className="
      mt-3

      text-slate-400

      max-w-md
      mx-auto
    "
  >
    Semua transaksi top up yang kamu lakukan
    akan muncul di halaman ini.
  </p>

  <Link
  href="/"
  className="
    inline-flex
    items-center
    justify-center

    mt-6

    rounded-xl

    bg-cyan-500

    px-5
    py-2.5

    font-semibold

    text-slate-950

    transition-all
    duration-300

    hover:bg-cyan-400
    hover:scale-105
    hover:shadow-lg
    hover:shadow-cyan-500/20

    active:scale-95
  "
>
  Top Up Sekarang
</Link>

</div>

    </main>
  );
}