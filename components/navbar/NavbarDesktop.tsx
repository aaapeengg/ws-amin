import { useState } from "react";
import SearchModal from "./SearchModal";
import Link from "next/link";
import {
  House,
  Gamepad2,
  History,
  Search,
  User,
  LogIn,
  UserPlus,
  ReceiptText,
  ChevronRight,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

type NavbarDesktopProps = {
  onOpenSearch: () => void;
};

export default function NavbarDesktop({
  onOpenSearch,
}: NavbarDesktopProps) {

  return (
    <div className="hidden lg:flex items-center justify-between flex-1 ml-12">

      {/* MENU */}

      <div className="flex items-center gap-8">

        <Link
          href="/"
          className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition"
        >
          <House size={18} />
          Home
        </Link>

        <Link
          href="/#games"
          className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition"
        >
          <Gamepad2 size={18} />
          Game
        </Link>

        <Link
          href="/history"
          className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition"
        >
          <History size={18} />
          Riwayat
        </Link>

      </div>

      {/* ACTION */}

      <div className="flex items-center gap-3">

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

  transition-all
  duration-300

  hover:border-cyan-500
  hover:bg-cyan-500/10
  hover:shadow-lg
  hover:shadow-cyan-500/10
"
>
  <Search size={20} />
</button>

        <DropdownMenu>

  <DropdownMenuTrigger asChild>

    <button
      className="
h-11
w-11

rounded-xl

bg-cyan-500

text-slate-950

flex
items-center
justify-center

transition-all
duration-300

hover:bg-cyan-400
hover:scale-105

active:scale-95
"
    >
      <User size={20} />
    </button>

  </DropdownMenuTrigger>

  <DropdownMenuContent
  align="end"
  sideOffset={12}
  className="
    w-64

    rounded-2xl

    border
    border-slate-700

    bg-[#081221]

    p-2

    shadow-2xl
    shadow-cyan-500/10

    text-white
  "
>

    <DropdownMenuLabel className="p-3">

  <div className="flex items-center gap-3">

    <div
      className="
        flex
        h-11
        w-11
        items-center
        justify-center

        rounded-full

        bg-cyan-500/10
      "
    >
      <User
        size={20}
        className="text-cyan-400"
      />
    </div>

    <div>

      <h3 className="font-semibold">
        Guest
      </h3>

      <p className="text-xs text-slate-400 font-normal">
        Silakan login
      </p>

    </div>

  </div>

</DropdownMenuLabel>

    <DropdownMenuSeparator />

    <DropdownMenuItem
  asChild
  className="rounded-xl cursor-pointer"
>

  <Link
    href="/login"
    className="flex items-center justify-between"
  >

    <div className="flex items-center gap-3">

      <LogIn
        size={18}
        className="text-cyan-400"
      />

      <span>Masuk</span>

    </div>

    <ChevronRight
      size={16}
      className="text-slate-500"
    />

  </Link>

</DropdownMenuItem>

    <DropdownMenuItem
  asChild
  className="rounded-xl cursor-pointer"
>

  <Link
    href="/register"
    className="flex items-center justify-between"
  >

    <div className="flex items-center gap-3">

      <UserPlus
        size={18}
        className="text-cyan-400"
      />

      <span>Daftar</span>

    </div>

    <ChevronRight
      size={16}
      className="text-slate-500"
    />

  </Link>

</DropdownMenuItem>

    <DropdownMenuSeparator />

    <DropdownMenuItem
  asChild
  className="rounded-xl cursor-pointer"
>

  <Link
    href="/history"
    className="flex items-center justify-between"
  >

    <div className="flex items-center gap-3">

      <ReceiptText
        size={18}
        className="text-cyan-400"
      />

      <span>Riwayat Transaksi</span>

    </div>

    <ChevronRight
      size={16}
      className="text-slate-500"
    />

  </Link>

</DropdownMenuItem>

  </DropdownMenuContent>

</DropdownMenu>

    </div>
    
    </div>
  );
}