"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSales } from "../salesStore";

type Props = { params: Promise<{ month: string }> };

export default function SalesMonthPage({ params }: Props) {
  const { month } = React.use(params);
  const { sales, deleteDay } = useSales();
  const router = useRouter();

  const filtered = sales.filter((s) => s.date.startsWith(month));

  const daily: Record<string, { total: number; qty: number; tx: number; small: number; large: number }> = {};
  filtered.forEach((s) => {
    if (!daily[s.date]) daily[s.date] = { total: 0, qty: 0, tx: 0, small: 0, large: 0 };
    daily[s.date].total += s.total;
    daily[s.date].qty += s.quantity;
    daily[s.date].tx += 1;
    if (s.product.includes("Kecil")) daily[s.date].small += s.quantity;
    if (s.product.includes("Besar")) daily[s.date].large += s.quantity;
  });

  const days = Object.keys(daily).sort((a, b) => a.localeCompare(b));

  const handleAddDay = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    router.push(`/dashboard/sales/${month}/${day}`);
  };

  const formatMonthHeader = (key: string) => {
    const [y, m] = key.split("-");
    const date = new Date(Number(y), Number(m) - 1);
    return date.toLocaleDateString("id-ID", { month: "long", year: "numeric" });
  };

  const formatDay = (key: string) => {
    const date = new Date(key);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="p-4 sm:p-8 space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          📅 Rekap Harian — {formatMonthHeader(month)}
        </h1>
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={handleAddDay}
            className="flex-1 sm:flex-none bg-green-600 text-white px-5 py-2.5 rounded-xl shadow hover:bg-green-700"
          >
            + Hari Ini
          </button>
          <Link
            href="/dashboard/sales"
            className="flex-1 sm:flex-none text-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            ⬅ Bulan
          </Link>
        </div>
      </div>

      {days.length === 0 ? (
        <p className="text-gray-500 italic text-center">Belum ada transaksi bulan ini.</p>
      ) : (
        <>
          {/* Mobile → card */}
          <div className="block sm:hidden space-y-3">
            {days.map((d) => (
              <div key={d} className="bg-white rounded-xl shadow p-4 space-y-2">
                <h2 className="font-bold">{formatDay(d)}</h2>
                <p>Botol Kecil: {daily[d].small}</p>
                <p>Botol Besar: {daily[d].large}</p>
                <p>Total Botol: {daily[d].qty}</p>
                <p>Transaksi: {daily[d].tx}</p>
                <p className="font-semibold text-green-700">
                  Rp{daily[d].total.toLocaleString("id-ID")}
                </p>
                <div className="flex gap-2">
                  <Link
                    href={`/dashboard/sales/${month}/${d.split("-")[2]}`}
                    className="flex-1 text-center bg-blue-50 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-100"
                  >
                    Lihat
                  </Link>
                  <button
                    onClick={() =>
                      confirm(`Hapus semua transaksi ${formatDay(d)}?`) && deleteDay(d)
                    }
                    className="flex-1 text-center bg-red-50 text-red-700 px-3 py-2 rounded-lg hover:bg-red-100"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop → table */}
          <div className="hidden sm:block overflow-x-auto bg-white rounded-2xl shadow">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3">Tanggal</th>
                  <th className="px-4 py-3 text-center">Botol Kecil</th>
                  <th className="px-4 py-3 text-center">Botol Besar</th>
                  <th className="px-4 py-3 text-center">Total Botol</th>
                  <th className="px-4 py-3 text-center">Transaksi</th>
                  <th className="px-4 py-3 text-right">Pendapatan</th>
                  <th className="px-4 py-3 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {days.map((d) => (
                  <tr key={d} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{formatDay(d)}</td>
                    <td className="px-4 py-3 text-center">{daily[d].small}</td>
                    <td className="px-4 py-3 text-center">{daily[d].large}</td>
                    <td className="px-4 py-3 text-center">{daily[d].qty}</td>
                    <td className="px-4 py-3 text-center">{daily[d].tx}</td>
                    <td className="px-4 py-3 text-right font-semibold text-green-700">
                      Rp{daily[d].total.toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-3 text-center space-x-2">
                      <Link
                        href={`/dashboard/sales/${month}/${d.split("-")[2]}`}
                        className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100"
                      >
                        Lihat
                      </Link>
                      <button
                        onClick={() =>
                          confirm(`Hapus semua transaksi ${formatDay(d)}?`) && deleteDay(d)
                        }
                        className="px-3 py-1.5 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
