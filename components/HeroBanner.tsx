import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function HeroBanner() {

  const banner = await prisma.banner.findFirst({
    where: {
      isActive: true,
    },
  });

  if (!banner) return null;

  return (

    <section className="max-w-7xl mx-auto px-6 py-8">

      <div className="relative w-full h-[250px] md:h-[420px] rounded-3xl overflow-hidden">

        <Image
          src={banner.image}
          alt={banner.title}
          fill
          priority
          className="object-cover"
        />

      </div>

    </section>

  );

}