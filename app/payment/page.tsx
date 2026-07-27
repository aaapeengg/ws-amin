import { Suspense } from "react";
import PaymentClient from "./PaymentClient";

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
          Loading...
        </main>
      }
    >
      <PaymentClient />
    </Suspense>
  );
}