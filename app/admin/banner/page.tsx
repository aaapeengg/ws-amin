export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";

import ToggleBannerButton from "@/components/admin/ToggleBannerButton";
import DeleteBannerButton from "@/components/admin/DeleteBannerButton";
import BannerForm from "@/components/admin/BannerForm";
import { prisma } from "@/lib/prisma";

export default async function BannerAdmin() {

  const banners = await prisma.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (

    <div className="max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Kelola Banner
      </h1>

      <BannerForm />

      <div className="space-y-6">

        {banners.length === 0 ? (

          <p>Belum ada banner.</p>

        ) : (

          banners.map((banner) => (

            <div
              key={banner.id}
              className="bg-slate-800 rounded-3xl p-5"
            >

              <div className="relative w-full h-56 rounded-2xl overflow-hidden">

                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="mt-5">

                <h2 className="text-2xl font-bold">
                  {banner.title}
                </h2>

                <p className="text-sm text-gray-400 mt-2">
                  {banner.isActive ? "🟢 Banner Aktif" : "⚪ Banner Tidak Aktif"}
                </p>

                <div className="flex gap-3 mt-5">

                  <Link
                    href={`/admin/banner/${banner.id}`}
                    className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-xl"
                  >
                    Edit
                  </Link>

            <ToggleBannerButton
  id={banner.id}
  active={banner.isActive}
/>

                  <DeleteBannerButton
                    id={banner.id}
                  />

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}