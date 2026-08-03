type Props = {
  children: React.ReactNode;
};

export default function SummarySection({
  children,
}: Props) {

  return (

    <div
      className="
        bg-slate-800
        rounded-3xl
        border
        border-slate-700
        p-8
      "
    >

      {children}

    </div>

  );

}