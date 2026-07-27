import Image from "next/image";

export default function Hero() {
  return (
    <section className="
      max-w-7xl
      mx-auto
      px-6
      py-16
    ">

      <div className="
        relative
        overflow-hidden
        rounded-3xl
        bg-gradient-to-r
        from-blue-700
        to-purple-700
        p-10
        md:p-16
      ">


        <div className="
          max-w-2xl
          relative
          z-10
        ">

          <h1 className="
            text-4xl
            md:text-6xl
            font-bold
            leading-tight
          ">
            Top Up Game
            <br />
            Cepat & Aman
          </h1>


          <p className="
            mt-5
            text-lg
            text-gray-200
          ">
            Isi Diamond, UC, dan VP favoritmu
            dengan proses cepat dan harga terbaik.
          </p>


          <button className="
            mt-8
            bg-white
            text-blue-700
            px-8
            py-3
            rounded-xl
            font-bold
            hover:bg-gray-200
          ">
            Mulai Top Up
          </button>


        </div>


      </div>


    </section>
  );
}