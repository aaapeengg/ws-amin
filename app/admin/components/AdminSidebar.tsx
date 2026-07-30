import Link from "next/link";

const menus = [
  {
    name: "Dashboard",
    href: "/admin",
  },
  {
    name: "Order",
    href: "/admin/orders",
  },
  {
    name: "Game",
    href: "/admin/games",
  },
  {
    name: "Nominal",
    href: "/admin/items",
  },
  {
    name: "Banner",
    href: "/admin/banner",
  },
];

export default function AdminSidebar() {

  return (

    <aside
      className="
        w-64
        bg-slate-900
        border-r
        border-slate-800
        p-6
      "
    >

      <h1 className="text-2xl font-bold mb-10">

        SV STORE

      </h1>

      <div className="space-y-2">

        {menus.map((menu)=>(

          <Link
            key={menu.href}
            href={menu.href}
            className="
              block
              px-4
              py-3
              rounded-xl
              hover:bg-slate-800
              transition
            "
          >

            {menu.name}

          </Link>

        ))}

      </div>

    </aside>

  );

}