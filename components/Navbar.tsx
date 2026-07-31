import Link from "next/link";
import SearchGame from "./SearchGame";

import {
  User,
  History,
  House,
  Gamepad2,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="
      sticky
      top-0
      z-50
      bg-[#0A0F1E]/80
      backdrop-blur-xl
      border-b
      border-[#233047]
      shadow-lg
      shadow-cyan-500/5
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
      ">


        {/* LOGO */}

        <Link
          href="/"
          className="
flex
items-center
gap-3
transition-transform
duration-300
hover:scale-105
"
        >

          <div
  className="
    w-11
    h-11
    rounded-2xl
    bg-gradient-to-br
    from-cyan-500
    to-sky-400
    flex
    items-center
    justify-center
    shadow-lg
    shadow-blue-500/30
  "
>
  <Gamepad2
    size={22}
    className="text-white"
  />
</div>


          <div>

            <h1
  className="
    text-xl
    font-extrabold
    tracking-wide
    text-white
  "
>
  SV STORE
</h1>


            <p
  className="
    text-xs
    text-slate-400
    tracking-wide
  "
>
  Fast • Secure • Trusted
</p>


          </div>


        </Link>




        {/* MENU */}

        <div className="
          hidden
          md:flex
          items-center
          gap-8
        ">


          <Link
  href="/"
  className="
  flex
  items-center
  gap-2
  text-slate-300
  hover:text-cyan-400
  transition-all
  duration-300
"
>
  <House size={18} />
  Home
</Link>


          <Link
  href="/#games"
  className="
  flex
  items-center
  gap-2
  text-slate-300
  hover:text-cyan-400
  transition-all
  duration-300
"
>
  <Gamepad2 size={18} />
  Game
</Link>


          <Link
  href="/history"
  className="
  flex
  items-center
  gap-2
  text-slate-300
  hover:text-cyan-400
  transition-all
  duration-300
"
>
  <History size={18} />
  Cek Transaksi
</Link>


        </div>




{/* SEARCH */}

<div className="hidden lg:block w-80">
  <SearchGame />
</div>

        {/* LOGIN */}

        <button
  className="
flex
items-center
gap-2
bg-cyan-500
hover:bg-cyan-400
text-slate-950
font-bold
px-5
py-2.5
rounded-xl
transition-all
duration-300
hover:scale-105
shadow-lg
shadow-cyan-500/30
"
>
  <User size={18} />
  Login
</button>



      </div>

    </nav>
  );
}