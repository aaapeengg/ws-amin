import ToggleBannerButton from "@/components/admin/ToggleBannerButton";
import { prisma } from "@/lib/prisma";
import BannerForm from "@/components/admin/BannerForm";

export default async function EditBannerPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } = await params;

  const banner = await prisma.banner.findUnique({
    where: {
      id,
    },
  });

  if (!banner) {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-8">
        <h1 className="text-3xl font-bold">
          Banner tidak ditemukan
        </h1>
      </main>
    );
  }

  return (

    <div className="max-w-5xl mx-auto">

      <BannerForm banner={banner} />

    </div>

  );

}