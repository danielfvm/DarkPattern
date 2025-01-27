"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="text-center mb-2 text-3xl font-bold animate-pulse">MEGA SALE! 70% OFF EVERYTHING!*</div>
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          DarkPatterns'R'Us
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/product" className="hover:underline">
            Hot Deals!
          </Link>
          <Link href="/cart" className="hover:underline">
            Cart
          </Link>
        </div>
      </nav>
      <div className="text-xs text-right">*Up to 70% off select items. Terms and conditions apply.</div>
    </header>
  )
}

