"use client";

import Link from "next/link";
import { Gamepad2 } from "lucide-react";
import { useState } from "react";
import SearchModal from "./navbar/SearchModal";
import NavbarDesktop from "./navbar/NavbarDesktop";
import MobileTopBar from "./navbar/MobileTopBar";

export default function Navbar() {

const [openSearch, setOpenSearch] = useState(false);  

  return (
    <nav
  className="
    sticky
    top-0
    z-50

    bg-[#0A0F1E]/90
    backdrop-blur-xl

    border-b
    border-[#233047]

    shadow-lg
    shadow-cyan-500/5
  "
>
      <div
        className="
        max-w-7xl
        mx-auto
        h-20
        px-5
        flex
        items-center
        justify-between
      "
      >
        <Link
  href="/"
  className="group flex items-center gap-3"
>
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
            transition-all
            duration-300
            group-hover:rotate-6
            group-hover:scale-110
          "
          >
            <Gamepad2 className="text-white" />
          </div>

          <div>
            <h1 className="font-bold text-lg">
              SV STORE
            </h1>

            <p className="text-xs text-slate-400">
              Fast • Secure • Trusted
            </p>
          </div>
        </Link>

        <NavbarDesktop
  onOpenSearch={() => setOpenSearch(true)}
/>

<MobileTopBar
  onOpenSearch={() => setOpenSearch(true)}
/>

<SearchModal
  open={openSearch}
  onClose={() => setOpenSearch(false)}
/>
      </div>
    </nav>
  );
}