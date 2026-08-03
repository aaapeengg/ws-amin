"use client";

import {
  Menu,
  Search,
  House,
  Gamepad2,
  History,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";

type Props = {
  onOpenSearch: () => void;
};

export default function MobileTopBar({
  onOpenSearch,
}: Props) {

const router = useRouter();

const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">

      <Sheet
  open={open}
  onOpenChange={setOpen}
>

        <div className="flex items-center gap-2">

          <button
  onClick={onOpenSearch}
  className="
  h-11
  w-11
  rounded-xl
  border
  border-slate-700
  flex
  items-center
  justify-center
"
>
  <Search size={20} />
</button>

          <SheetTrigger asChild>

            <button
              className="
              h-11
              w-11
              rounded-xl
              border
              border-slate-700
              flex
              items-center
              justify-center
            "
            >
              <Menu size={20} />
            </button>

          </SheetTrigger>

        </div>

        <SheetContent
  side="right"
  className="
    !w-[320px]
    sm:!w-[320px]
    p-0
    bg-[#081221]
    border-l
    border-slate-800
  "
>
          <div className="h-full flex flex-col">

            <div
  className="
    relative
    overflow-hidden

    border-b
    border-slate-800

    p-6
  "
>

  <div
    className="
      absolute
      -right-10
      -top-10

      h-28
      w-28

      rounded-full

      bg-cyan-500/10

      blur-3xl
    "
  />

  <div className="relative">

    <div
      className="
        mb-3

        flex
        h-12
        w-12

        items-center
        justify-center

        rounded-2xl

        bg-gradient-to-br
        from-cyan-500
        to-sky-400
      "
    >
      <Gamepad2 className="text-white" />
    </div>

    <h2 className="text-xl font-bold">
      SV STORE
    </h2>

    <p className="mt-1 text-sm text-slate-400">
      Fast • Secure • Trusted
    </p>

  </div>

</div>

            <div className="flex-1 overflow-y-auto p-5 space-y-2">

              <button
  onClick={() => {
    router.push("/");
    setOpen(false);
  }}
  className="
flex
items-center
gap-3

rounded-xl

border
border-transparent

p-4

transition-all
duration-300

hover:border-cyan-500/30
hover:bg-slate-800
hover:translate-x-1
"
>
  <House
    size={20}
    className="text-cyan-400"
  />

  Home
</button>

              <button
  onClick={() => {
  router.push("/#games");
  setOpen(false);
}}
  className="
flex
items-center
gap-3

rounded-xl

border
border-transparent

p-4

transition-all
duration-300

hover:border-cyan-500/30
hover:bg-slate-800
hover:translate-x-1
"
>
  <Gamepad2
    size={20}
    className="text-cyan-400"
  />

  Game
</button>

              <button
  onClick={() => {
    router.push("/history");
    setOpen(false);
  }}
  className="
flex
items-center
gap-3

rounded-xl

border
border-transparent

p-4

transition-all
duration-300

hover:border-cyan-500/30
hover:bg-slate-800
hover:translate-x-1
"
>
  <History
    size={20}
    className="text-cyan-400"
  />

  Riwayat
</button>

            </div>

            <div className="border-t border-slate-800 p-5 space-y-3">

              <button
  onClick={() => {
  router.push("/login");
  setOpen(false);
}}
  className="
    w-full
    rounded-xl
    border
    border-cyan-500
    py-3
    text-cyan-400
    font-semibold

    flex
    items-center
    justify-center
    gap-2
  "
>
  <LogIn size={18} />
  Masuk
</button>

              <button
  onClick={() => {
  router.push("/login");
  setOpen(false);
}}
  className="
    w-full
    rounded-xl
    bg-cyan-500
    py-3
    font-semibold
    text-slate-950

    flex
    items-center
    justify-center
    gap-2
  "
>
  <UserPlus size={18} />
  Daftar
</button>

            </div>

          </div>

        </SheetContent>

      </Sheet>

    </div>
  );
}