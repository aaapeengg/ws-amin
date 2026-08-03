import Link from "next/link";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaEnvelopeOpen,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#081221] border-t border-slate-800 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid
grid-cols-1
lg:grid-cols-5
gap-8">

          {/* BRAND */}

          <div
  className="
    lg:col-span-2
    text-center
    lg:text-left
  "
>

            <h2 className="text-2xl font-bold">
              SV STORE
            </h2>

            <p
  className="
    mt-5
    max-w-md
    mx-auto
    lg:mx-0

    text-slate-400
    leading-7
  "
>
              SV STORE adalah platform top up game terpercaya yang menyediakan layanan pembelian diamond, UC, voucher, dan kebutuhan gaming lainnya secara cepat, aman, dan dengan harga terbaik. Kami berkomitmen memberikan pengalaman transaksi yang mudah serta pelayanan terbaik untuk seluruh gamer Indonesia selama 24 jam.
            </p>

          </div>

          {/* Sitemap */}

          <div>

            <h3 className="font-semibold mb-4">
              Peta Situs
            </h3>

            <div className="flex flex-col gap-3">

  <Link
    href="/"
    className="hover:text-cyan-400 transition"
  >
    Beranda
  </Link>

  <Link
    href="/login"
    className="hover:text-cyan-400 transition"
  >
    Masuk
  </Link>

  <Link
    href="/register"
    className="hover:text-cyan-400 transition"
  >
    Daftar
  </Link>

  <Link
    href="/history"
    className="hover:text-cyan-400 transition"
  >
    Cek Transaksi
  </Link>

</div>

          </div>

          {/* Support */}

          <div>

            <h3 className="font-semibold mb-4">
              Dukungan
            </h3>

            <div className="space-y-3 text-slate-400">

              <div className="flex gap-2 items-center">

                <FaWhatsapp size={18} />

                WhatsApp

              </div>

              <div className="flex gap-2 items-center">

                <FaEnvelopeOpen size={18} />

                Email

              </div>

            </div>

          </div>

          {/* Legal */}

          <div>

            <h3 className="font-semibold mb-4">
              Legalitas
            </h3>

            <div className="space-y-3 text-slate-400">

              <Link href="/">
                Kebijakan Privasi
              </Link>

              <br />

              <Link href="/">
                Syarat & Ketentuan
              </Link>

              <br />

              <Link href="/">
                Discord
              </Link>

              <br />

              <Link href="/">
                Youtube
              </Link>

            </div>

          </div>

{/* Social */}

<div>

  <h3 className="font-semibold mb-4">
    Social Media
  </h3>

  <div className="space-y-3 text-slate-400">

    <Link
      href="/"
      className="flex items-center gap-2 hover:text-cyan-400 transition"
    >
      <FaTiktok size={16} />
      TikTok
    </Link>

    <Link
      href="/"
      className="flex items-center gap-2 hover:text-cyan-400 transition"
    >
      <FaInstagram size={16} />
      Instagram
    </Link>

    <Link
      href="/"
      className="flex items-center gap-2 hover:text-cyan-400 transition"
    >
      <FaYoutube size={16} />
      YouTube
    </Link>

  </div>

</div>

        </div>

      </div>

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between flex-col lg:flex-row gap-4">

          <p className="text-slate-500">

            © 2026 SV STORE. All rights reserved.

          </p>

          <div className="flex gap-5 text-slate-500">

  <a href="#">
    <FaInstagram
      size={18}
      className="hover:text-cyan-400 hover:scale-110 transition-all"
    />
  </a>

  <a href="#">
    <FaYoutube
      size={18}
      className="hover:text-cyan-400 hover:scale-110 transition-all"
    />
  </a>

  <a href="#">
    <FaWhatsapp
      size={18}
      className="hover:text-cyan-400 hover:scale-110 transition-all"
    />
  </a>

</div>

        </div>

      </div>

    </footer>
  );
}