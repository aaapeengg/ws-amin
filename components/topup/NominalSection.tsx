type Props = {
  children: React.ReactNode;
};

export default function NominalSection({ children }: Props) {
  return (
    <div
      className="
        bg-slate-800
        rounded-3xl
        p-6
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Pilih Diamond
      </h2>

      {children}
    </div>
  );
}