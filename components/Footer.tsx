export default function Footer() {
  return (

    <footer className="
      border-t
      border-slate-800
      mt-20
      bg-slate-950
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-10
        grid
        md:grid-cols-3
        gap-8
      ">


        <div>

          <h2 className="
            text-xl
            font-bold
          ">
            🎮 WS AMIN STORE
          </h2>


          <p className="
            text-gray-400
            mt-3
          ">
            Tempat top up game cepat,
            aman, dan terpercaya.
          </p>

        </div>




        <div>

          <h3 className="font-bold mb-3">
            Menu
          </h3>


          <p className="text-gray-400">
            Home
          </p>

          <p className="text-gray-400">
            Game
          </p>

          <p className="text-gray-400">
            Riwayat
          </p>

        </div>




        <div>

          <h3 className="font-bold mb-3">
            Kontak
          </h3>


          <p className="text-gray-400">
            WhatsApp
          </p>


          <p className="text-gray-400">
            Instagram
          </p>


        </div>


      </div>



      <div className="
        text-center
        text-gray-500
        text-sm
        pb-6
      ">

        © 2026 WS AMIN STORE

      </div>


    </footer>

  );
}