"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateGameStatus(
  id: string,
  status: "ACTIVE" | "MAINTENANCE" | "COMING_SOON"
) {
  await prisma.game.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
  revalidatePath("/admin/games");
revalidatePath("/");
}