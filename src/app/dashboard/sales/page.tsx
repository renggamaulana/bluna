"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSales } from "./salesStore";

export default function SalesPage() {
  const { sales, deleteMonth } = useSales();
  const router = useRouter();

  // Group by month
  const monthly: Record<
    string,
    { total: number; qty: number; days: Set<string>; small: number; large: number; tx: number }
  > = {};

  sales.forEach((s) => {
    const m = s.date.slice(0, 7); // YYYY-MM
    if (!monthly[m])
      monthly[m] = { total: 0, qty: 0, days: new Set(), small: 0, large: 0, tx: 0 };
    monthly[m].total += s.total;
    monthly[m].qty += s.quantity;
    monthly[m].days.add(s.date);
    if (s.product.includes("Kecil")) monthly[m].small += s.quantity;
    if (s.product.includes("Besar")) monthly[m].large += s.quantity;
    monthly[m].tx += 1;
  });

  const months = Object.keys(monthly).sort((a, b) => b.localeCompare(a));

  const handleAddMonth = () => {
    const now = new Date();
    const monthKey = now.toISOString().slice(0, 7);
    router.push(`/dashboard/sales/${monthKey}`);
  };

  const formatMonth = (key: string) => {
    const [y, m] = key.split("-");
    const date = new Date(Number(y), Number(m) - 1);
    return date.toLocaleDateString("id-ID", { month: "long", year: "numeric" });
  };

  return (
    <div className="p-4 sm:p-8 space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">📊 Rekap Penjualan Bulanan</h1>
        <button
          onClick={handleAddMonth}
          className="w-full sm:w-auto bg-blue-600 text-white px-5 py-2.5 rounded-xl shadow hover:bg-blue-700 transition"
        >
          + Bulan Ini
        </button>
      </div>

      {months.length === 0 ? (
        <p className="text-gray-500 italic text-center">Belum ada data penjualan.</p>
      ) : (
        <>
          {/* Mobile → card */}
          <div className="block sm:hidden space-y-3">
            {months.map((m) => (
              <div key={m} className="bg-white rounded-xl shadow p-4 space-y-2">
                <h2 className="font-bold text-lg">{formatMonth(m)}</h2>
                <p>Hari Aktif: {monthly[m].days.size}</p>
                <p>Botol Kecil: {monthly[m].small} | Botol Besar: {monthly[m].large}</p>
                <p>Total Botol: {monthly[m].qty}</p>
                <p>Transaksi: {monthly[m].tx}</p>
                <p className="font-semibold text-green-700">
                  Rp{monthly[m].total.toLocaleString("id-ID")}
                </p>
                <div className="flex gap-2">
                  <Link
                    href={`/dashboard/sales/${m}`}
                    className="flex-1 text-center bg-blue-50 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-100"
                  >
                    Lihat
                  </Link>
                  <button
                    onClick={() => confirm(`Hapus data bulan ${formatMonth(m)}?`) && deleteMonth(m)}
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
                  <th className="px-4 py-3">Bulan</th>
                  <th className="px-4 py-3 text-center">Jumlah Hari</th>
                  <th className="px-4 py-3 text-center">Botol Kecil</th>
                  <th className="px-4 py-3 text-center">Botol Besar</th>
                  <th className="px-4 py-3 text-center">Total Botol</th>
                  <th className="px-4 py-3 text-center">Jumlah Transaksi</th>
                  <th className="px-4 py-3 text-right">Total Pendapatan</th>
                  <th className="px-4 py-3 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {months.map((m) => (
                  <tr key={m} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{formatMonth(m)}</td>
                    <td className="px-4 py-3 text-center">{monthly[m].days.size}</td>
                    <td className="px-4 py-3 text-center">{monthly[m].small}</td>
                    <td className="px-4 py-3 text-center">{monthly[m].large}</td>
                    <td className="px-4 py-3 text-center">{monthly[m].qty}</td>
                    <td className="px-4 py-3 text-center">{monthly[m].tx}</td>
                    <td className="px-4 py-3 text-right font-semibold text-green-700">
                      Rp{monthly[m].total.toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-3 text-center space-x-2">
                      <Link
                        href={`/dashboard/sales/${m}`}
                        className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100"
                      >
                        Lihat
                      </Link>
                      <button
                        onClick={() => confirm(`Hapus data bulan ${formatMonth(m)}?`) && deleteMonth(m)}
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
