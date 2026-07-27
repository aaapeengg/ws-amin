import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="
      sticky
      top-0
      z-50
      bg-slate-950/80
      backdrop-blur
      border-b
      border-slate-800
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
          "
        >

          <div className="
            w-10
            h-10
            rounded-xl
            bg-blue-600
            flex
            items-center
            justify-center
            text-xl
          ">
            🎮
          </div>


          <div>

            <h1 className="
              text-xl
              font-bold
              text-white
            ">
              WS AMIN STORE
            </h1>


            <p className="
              text-xs
              text-gray-400
            ">
              Top Up Game
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
            className="hover:text-blue-400"
          >
            Home
          </Link>


          <Link
            href="/#games"
            className="hover:text-blue-400"
          >
            Game
          </Link>


          <Link
            href="/history"
            className="hover:text-blue-400"
          >
            Riwayat
          </Link>


        </div>




        {/* LOGIN */}

        <button
          className="
            bg-blue-600
            hover:bg-blue-700
            px-5
            py-2
            rounded-xl
            font-bold
          "
        >
          Login
        </button>



      </div>

    </nav>
  );
}