"use client";

import Link from "next/link";
import {
  Menu,
  Search,
  Gamepad2,
  House,
  Flame,
  History,
  CircleHelp,
  User,
} from "lucide-react";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

export default function MobileTopBar() {
  return (
    <div className="lg:hidden flex items-center gap-2">
      {/* SEARCH */}
      <button
        className="
          h-11
          w-11
          rounded-xl
          border
          border-[#233047]
          bg-[#111827]
          flex
          items-center
          justify-center
          hover:border-cyan-400
          transition
        "
      >
        <Search size={18} />
      </button>

      <Sheet>
        <SheetTrigger asChild>
          <button
            className="
              h-11
              w-11
              rounded-xl
              border
              border-[#233047]
              bg-[#111827]
              flex
              items-center
              justify-center
              hover:border-cyan-400
              transition
            "
          >
            <Menu size={18} />
          </button>
        </SheetTrigger>

        <SheetContent side="right" className="p-0 w-[320px]">
          <SheetHeader className="border-b border-[#233047]">
            <div className="flex items-center gap-3">
              <div
                className="
                  h-11
                  w-11
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-500
                  to-sky-400
                  flex
                  items-center
                  justify-center
                "
              >
                <Gamepad2 size={20} className="text-white" />
              </div>

              <div>
                <SheetTitle className="text-white">
                  SV STORE
                </SheetTitle>

                <p className="text-xs text-slate-400">
                  Fast • Secure • Trusted
                </p>
              </div>
            </div>
          </SheetHeader>

          {/* MENU */}
          <div className="flex-1 px-4 py-4 space-y-2">
            <SheetClose asChild>
              <Link
                href="/"
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-cyan-500/10 transition"
              >
                <House size={18} />
                Home
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/#games"
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-cyan-500/10 transition"
              >
                <Gamepad2 size={18} />
                Semua Game
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/#promo"
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-cyan-500/10 transition"
              >
                <Flame size={18} />
                Promo
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/history"
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-cyan-500/10 transition"
              >
                <History size={18} />
                Riwayat
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/help"
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-cyan-500/10 transition"
              >
                <CircleHelp size={18} />
                Bantuan
              </Link>
            </SheetClose>
          </div>

          {/* FOOTER */}
          <SheetFooter className="border-t border-[#233047]">
            <button
              className="
                w-full
                rounded-xl
                border
                border-cyan-500
                py-3
                font-semibold
                text-cyan-400
                hover:bg-cyan-500/10
                transition
              "
            >
              <div className="flex items-center justify-center gap-2">
                <User size={18} />
                Masuk
              </div>
            </button>

            <button
              className="
                w-full
                rounded-xl
                bg-cyan-500
                py-3
                font-semibold
                text-slate-950
                hover:bg-cyan-400
                transition
              "
            >
              Daftar
            </button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}