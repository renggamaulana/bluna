"use client";

import { useState, useEffect } from "react";

export type Sale = {
  _id?: string;
  product: string;
  price: number;
  quantity: number;
  total: number;
  timestamp: string;
  date: string;
};

export function useSales() {
  const [sales, setSales] = useState<Sale[]>([]);

  // load dari DB saat awal
  useEffect(() => {
    fetch("/api/sales")
      .then((res) => res.json())
      .then((data) => setSales(data));
  }, []);

  const addSale = async (product: string, price: number, quantity = 1, date?: string) => {
    const day = date || new Date().toISOString().slice(0, 10);
    const now = new Date();

    const newSale: Sale = {
      product,
      price,
      quantity,
      total: price * quantity,
      timestamp: now.toISOString(),
      date: day,
    };

    const res = await fetch("/api/sales", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSale),
    });

    const saved = await res.json();
    setSales((prev) => [...prev, saved]);
  };

  const deleteSale = async (id: string) => {
    await fetch(`/api/sales/${id}`, { method: "DELETE" });
    setSales((prev) => prev.filter((s) => s._id !== id));
  };

  return { sales, addSale, deleteSale };
}
