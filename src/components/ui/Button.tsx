"use client"

import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

export default function Button({ children, loading, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={loading}
      className="w-full flex justify-center items-center px-4 py-2 
                 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 
                 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "Loading..." : children}
    </button>
  )
}
