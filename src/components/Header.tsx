"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const { totalItems, toggleCart } =
    useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b border-[#7C3AED]/30 bg-[#0B0B14]/85 backdrop-blur-xl">
      {/* EVA accent line */}
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-[#7C3AED]/40 rounded-full" />

              <svg
                className="relative w-8 h-8 transition-transform duration-300 group-hover:rotate-90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF5A36"
                strokeWidth="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                />

                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>

            <span className="font-syne font-semibold text-lg bg-gradient-to-r from-[#C084FC] via-white to-[#FF5A36] bg-clip-text text-transparent">
              CREATIVAWORKS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              {
                href: "/",
                label: "Home",
              },
              {
                href: "/#about",
                label: "Us",
              },
              {
                href: "/#services",
                label: "Services",
              },
              {
                href: "/#contact",
                label: "Contact",
              },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-white/75 transition-all duration-300 hover:text-[#C084FC]"
              >
                <span className="relative">
                  {item.label}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#7FFF00] to-[#FF5A36] transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/quote"
              className="group relative overflow-hidden rounded-full border border-[#C084FC]/30 bg-gradient-to-r from-[#7C3AED] to-[#FF5A36] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.45)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Quote

                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>

              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-[#FF5A36] via-[#FF3B30] to-[#7FFF00]" />
            </Link>

            {/* Cart */}
            <button
              onClick={toggleCart}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#7C3AED]/30 bg-white/5 text-white/80 transition-all duration-300 hover:border-[#7FFF00]/50 hover:bg-[#7C3AED]/10 hover:text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.35)]"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 17a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#7FFF00] px-1 text-[10px] font-black text-black shadow-lg">
                  {totalItems > 9
                    ? "9+"
                    : totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            {/* Cart */}
            <button
              onClick={toggleCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#7C3AED]/30 bg-white/5 text-white"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 17a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#7FFF00] px-1 text-[10px] font-black text-black">
                  {totalItems > 9
                    ? "9+"
                    : totalItems}
                </span>
              )}
            </button>

            {/* Menu */}
            <button
              onClick={() =>
                setMobileMenuOpen(
                  !mobileMenuOpen
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7C3AED]/30 bg-white/5 text-white"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="rounded-3xl border border-[#7C3AED]/20 bg-[#111827]/95 p-6 backdrop-blur-xl">
              <nav className="flex flex-col gap-5">
                {[
                  {
                    href: "/",
                    label: "Home",
                  },
                  {
                    href: "/#about",
                    label: "Us",
                  },
                  {
                    href: "/#services",
                    label: "Services",
                  },
                  {
                    href: "/#contact",
                    label: "Contact",
                  },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium text-white/80 transition-colors hover:text-[#C084FC]"
                    onClick={() =>
                      setMobileMenuOpen(
                        false
                      )
                    }
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/quote"
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#FF5A36] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)]"
                >
                  Quote

                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}