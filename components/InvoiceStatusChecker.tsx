"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InvoiceStatusChecker({
  orderId,
}: {
  orderId: string;
}) {

  const router = useRouter();

  useEffect(() => {

    let interval: NodeJS.Timeout;

    async function checkStatus() {

      try {

        const res = await fetch("/api/check-vip-status", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderId,
          }),
        });

        const data = await res.json();

        // Refresh Server Component tanpa reload halaman
        router.refresh();

        // Kalau sudah selesai, hentikan polling
        if (
          data.data?.status === "success" ||
          data.data?.status === "error"
        ) {
          clearInterval(interval);
        }

      } catch (err) {
        console.error(err);
      }

    }

    checkStatus();

    interval = setInterval(checkStatus, 10000);

    return () => clearInterval(interval);

  }, [orderId, router]);

  return null;

}