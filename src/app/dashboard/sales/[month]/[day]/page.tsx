"use client";

import React from "react";
import Link from "next/link";
import { useSales } from "../../salesStore";

type Props = { params: Promise<{ month: string; day: string }> };

export default function SalesDayPage({ params }: Props) {
  const { month, day } = React.use(params);
  const dateKey = `${month}-${day.padStart(2, "0")}`;
  const { sales, addSale, deleteSale, changeQuantityBy } = useSales();

  const filtered = sales.filter((s) => s.date === dateKey).sort((a, b) => a.id - b.id);

  const totalPendapatan = filtered.reduce((sum, s) => sum + s.total, 0);
  const totalBotol = filtered.reduce((sum, s) => sum + s.quantity, 0);

  const formatDayHeader = (key: string) => {
    const date = new Date(key);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="p-4 sm:p-8 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          💧 POS — {formatDayHeader(dateKey)}
        </h1>
        <div className="flex gap-2 w-full sm:w-auto">
          <Link
            href={`/dashboard/sales/${month}`}
            className="flex-1 sm:flex-none text-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            ⬅ Bulan
          </Link>
          <Link
            href="/dashboard/sales"
            className="flex-1 sm:flex-none text-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            ⬅ Semua Bulan
          </Link>
        </div>
      </div>

      {/* Produk Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={() => addSale("Botol Kecil", 10000, 1, dateKey)}
          className="w-full bg-blue-600 text-white py-3 rounded-xl shadow hover:bg-blue-700 text-lg font-semibold"
        >
          + Botol Kecil (Rp10.000)
        </button>
        <button
          onClick={() => addSale("Botol Besar", 15000, 1, dateKey)}
          className="w-full bg-green-600 text-white py-3 rounded-xl shadow hover:bg-green-700 text-lg font-semibold"
        >
          + Botol Besar (Rp15.000)
        </button>
      </div>

      {/* Transaksi */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 italic text-center">Belum ada transaksi hari ini.</p>
      ) : (
        <div className="space-y-3">
          {/* Mobile view → card style */}
          <div className="block sm:hidden space-y-3">
            {filtered.map((s) => (
              <div
                key={s.id}
                className="bg-white p-4 rounded-xl shadow flex flex-col gap-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{s.product}</span>
                  <span className="text-gray-500 text-sm">
                    {new Date(s.timestamp).toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => changeQuantityBy(s.id, -1)}
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="min-w-[24px] text-center">{s.quantity}</span>
                    <button
                      onClick={() => changeQuantityBy(s.id, 1)}
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-bold text-green-700">
                    Rp{s.total.toLocaleString("id-ID")}
                  </span>
                </div>
                <button
                  onClick={() => confirm("Hapus transaksi ini?") && deleteSale(s.id)}
                  className="bg-red-50 text-red-700 px-3 py-2 rounded-lg hover:bg-red-100"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>

          {/* Desktop view → table style */}
          <div className="hidden sm:block overflow-x-auto bg-white rounded-2xl shadow">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Produk</th>
                  <th className="px-4 py-3 text-center">Qty</th>
                  <th className="px-4 py-3 text-right">Harga</th>
                  <th className="px-4 py-3 text-right">Total</th>
                  <th className="px-4 py-3">Waktu</th>
                  <th className="px-4 py-3 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => (
                  <tr key={s.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3">{s.id}</td>
                    <td className="px-4 py-3">{s.product}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="inline-flex items-center gap-2">
                        <button
                          onClick={() => changeQuantityBy(s.id, -1)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span>{s.quantity}</span>
                        <button
                          onClick={() => changeQuantityBy(s.id, 1)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      Rp{s.price.toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-3 text-right">
                      Rp{s.total.toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-3">
                      {new Date(s.timestamp).toLocaleTimeString("id-ID", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => confirm("Hapus transaksi ini?") && deleteSale(s.id)}
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
        </div>
      )}

      {/* Ringkasan */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-2 text-center sm:text-left">
        <p className="font-semibold text-gray-800">
          Total Pendapatan: Rp{totalPendapatan.toLocaleString("id-ID")}
        </p>
        <p className="font-semibold text-gray-800">
          Total Botol Terjual: {totalBotol}
        </p>
        <p className="text-sm text-gray-600">
          Jumlah Transaksi: {filtered.length}
        </p>
      </div>
    </div>
  );
}
