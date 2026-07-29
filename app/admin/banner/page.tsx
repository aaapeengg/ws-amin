import BannerForm from "@/components/admin/BannerForm";
import { prisma } from "@/lib/prisma";

export default async function BannerAdmin() {

  const banners = await prisma.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Kelola Banner
        </h1>

<BannerForm />

        <div className="space-y-4">

          {banners.length === 0 ? (

            <p>Belum ada banner.</p>

          ) : (

            banners.map((banner) => (

              <div
                key={banner.id}
                className="bg-slate-800 rounded-2xl p-5"
              >

                <h2 className="text-xl font-bold">
                  {banner.title}
                </h2>

                <p className="text-gray-400 mt-2">
                  {banner.image}
                </p>

              </div>

            ))

          )}

        </div>

      </div>

    </main>

  );

}