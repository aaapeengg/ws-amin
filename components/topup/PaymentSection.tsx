type Props = {
  children: React.ReactNode;
};

export default function PaymentSection({ children }: Props) {
  return (
    <div
      className="
        bg-slate-800
        rounded-3xl
        p-6
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Pilih Metode Pembayaran
      </h2>

      {children}

    </div>
  );
}