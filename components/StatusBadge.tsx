type Props = {
  status: string;
};

export default function StatusBadge({ status }: Props) {
  if (status === "SUCCESS") {
    return (
      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
        🟢 Success
      </span>
    );
  }

  if (status === "FAILED") {
    return (
      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
        🔴 Failed
      </span>
    );
  }

  return (
    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
      🟡 Pending
    </span>
  );
}