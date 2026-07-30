export default function AdminTopbar() {

  return (

    <header
      className="
        h-20
        border-b
        border-slate-800
        bg-slate-900/80
        backdrop-blur
        flex
        items-center
        justify-between
        px-8
      "
    >

      <div>

        <h1 className="text-2xl font-bold">

          Dashboard Admin

        </h1>

        <p className="text-gray-400 text-sm">

          Selamat datang kembali 👋

        </p>

      </div>

      <div className="flex items-center gap-5">

        <button
          className="
            w-11
            h-11
            rounded-full
            bg-slate-800
            hover:bg-slate-700
            transition
          "
        >
          🔔
        </button>

        <div
          className="
            flex
            items-center
            gap-3
            bg-slate-800
            rounded-full
            px-4
            py-2
          "
        >

          <div
            className="
              w-10
              h-10
              rounded-full
              bg-blue-600
              flex
              items-center
              justify-center
              font-bold
            "
          >

            S

          </div>

          <div>

            <p className="font-semibold">

              Syafril

            </p>

            <p className="text-xs text-gray-400">

              Administrator

            </p>

          </div>

        </div>

      </div>

    </header>

  );

}