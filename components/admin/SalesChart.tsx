"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function SalesChart({
  data,
}: {
  data: {
    date: string;
    total: number;
  }[];
}) {
  return (
    <div className="bg-slate-800 rounded-3xl p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Grafik Penjualan
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="total"
              stroke="#3b82f6"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}