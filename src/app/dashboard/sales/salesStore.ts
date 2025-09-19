"use client";

import { useState } from "react";

export type Sale = {
  id: number;
  product: "Botol Kecil" | "Botol Besar" | string;
  price: number;
  quantity: number;
  total: number;
  timestamp: string; // human readable
  date: string; // YYYY-MM-DD
};

// singleton memory store (simple)
let _sales: Sale[] = [
  // contoh data awal (opsional) - bisa dihapus
  {
    id: 1,
    product: "Botol Kecil",
    price: 10000,
    quantity: 2,
    total: 20000,
    timestamp: "2025-09-01 10:00:00",
    date: "2025-09-01",
  },
  {
    id: 2,
    product: "Botol Besar",
    price: 15000,
    quantity: 1,
    total: 15000,
    timestamp: "2025-09-02 11:30:00",
    date: "2025-09-02",
  },
];
let _counter = _sales.length + 1;

/**
 * useSales hook
 * - Mengembalikan sales saat ini dan fungsi untuk ubah data.
 * - Karena menggunakan singleton _sales, data persist selama session SPA.
 * - Untuk produksi: ganti implementasi add/delete/update dengan fetch ke API.
 */
export function useSales() {
  const [sales, setSales] = useState<Sale[]>(_sales);

  const refresh = () => setSales([..._sales]);

  const addSale = (product: string, price: number, quantity = 1, date?: string) => {
    const day = date || new Date().toISOString().slice(0, 10);
    const now = new Date();

    const newSale: Sale = {
      id: _counter++,
      product,
      price,
      quantity,
      total: price * quantity,
      timestamp: now.toISOString(), // ✅ simpan ISO string
      date: day,
    };

    _sales = [..._sales, newSale];
    refresh();
  };

    const deleteSale = (id: number) => {
      _sales = _sales.filter((s) => s.id !== id);
      refresh();
    };

    const updateQuantity = (id: number, newQuantity: number) => {
      _sales = _sales.map((s) =>
        s.id === id
          ? {
              ...s,
              quantity: Math.max(1, newQuantity),
              total: s.price * Math.max(1, newQuantity),
            }
          : s
      );
      refresh();
    };

    const changeQuantityBy = (id: number, delta: number) => {
      const found = _sales.find((s) => s.id === id);
      if (!found) return;
      updateQuantity(id, Math.max(1, found.quantity + delta));
    };

    const deleteMonth = (month: string) => {
    _sales = _sales.filter((s) => !s.date.startsWith(month));
    refresh();
  };

const deleteDay = (date: string) => {
  _sales = _sales.filter((s) => s.date !== date);
  refresh();
};



  // helper: get sales copy
  const getAll = () => [..._sales];
  return {
    sales,
    addSale,
    deleteSale,
    updateQuantity,
    changeQuantityBy,
    getAll,
    deleteMonth,   // ✅ tambahan
    deleteDay,     // ✅ tambahan
  };
}
