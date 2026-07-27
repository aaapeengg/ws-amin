"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBox() {

  const router = useRouter();

  const params = useSearchParams();

  return (

    <input
      defaultValue={params.get("q") ?? ""}
      placeholder="Cari Order ID..."
      className="
        w-full
        md:w-96
        bg-slate-800
        rounded-xl
        px-4
        py-3
        mb-6
        outline-none
      "
      onChange={(e)=>{

        const value = e.target.value;

        if(value){

          router.push(`/admin/orders?q=${value}`);

        }else{

          router.push("/admin/orders");

        }

      }}
    />

  );

}