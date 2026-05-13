"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CartDrawer() {
  const t = useTranslations("cartDrawer");

  const {
    items,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-hidden border-l border-white/10 bg-[#0A0A0F] shadow-[0_0_80px_rgba(0,0,0,0.65)]">
        {/* Ambient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,107,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_30%)]" />

        <div className="relative flex h-full flex-col">
          {/* Header */}
          <div className="border-b border-white/10 bg-white/[0.03] backdrop-blur-xl">
            {/* macOS top */}
            <div className="flex items-center gap-2 px-6 pt-5">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            </div>

            <div className="flex items-center justify-between px-6 py-5">
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {t("activeServices")}
                </p>

                <h2 className="font-syne text-2xl font-semibold text-white">
                  {t("cart")} ({totalItems})
                </h2>
              </div>

              <button
                onClick={closeCart}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/10 bg-white/5">
                  <svg
                    className="h-12 w-12 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.3}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 17a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>

                <h3 className="font-syne text-2xl font-semibold text-white mb-2">
                  {t("emptyTitle")}
                </h3>

                <p className="max-w-xs text-gray-500 leading-relaxed">
                  {t("emptyDescription")}
                </p>

                <button
                  onClick={closeCart}
                  className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10"
                >
                  {t("continueBrowsing")}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                        <svg
                          className="h-7 w-7 text-[#FF6B6B]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.4}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-syne text-base font-semibold text-white leading-snug">
                              {item.name}
                            </h3>

                            <p className="mt-2 text-lg font-semibold text-[#FF6B6B]">
                              MXN$ {item.price}
                            </p>
                          </div>

                          <button
                            onClick={() =>
                              removeItem(item.id)
                            }
                            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-500 transition-all hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7"
                              />
                            </svg>
                          </button>
                        </div>

                        {/* Quantity */}
                        <div className="mt-5 flex items-center justify-between">
                          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-3 py-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity - 1
                                )
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-gray-400 transition-all hover:bg-white/10 hover:text-white"
                            >
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M20 12H4"
                                />
                              </svg>
                            </button>

                            <span className="min-w-[24px] text-center font-semibold text-white">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity + 1
                                )
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-gray-400 transition-all hover:bg-white/10 hover:text-white"
                            >
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="text-xs text-gray-500">
                              {t("total")}
                            </p>

                            <p className="font-semibold text-white">
                              MXN${" "}
                              {(
                                item.priceNumber *
                                item.quantity
                              ).toLocaleString("en-US")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Clear */}
                <button
                  onClick={clearCart}
                  className="mt-2 text-sm text-gray-500 transition-colors hover:text-[#FF6B6B]"
                >
                  {t("clearAll")}
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <div className="mb-5 rounded-[24px] border border-white/10 bg-black/20 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-gray-400">
                    {t("subtotal")}
                  </span>

                  <span className="font-syne text-2xl font-semibold text-white">
                    MXN${" "}
                    {totalPrice.toLocaleString(
                      "en-US",
                      {
                        minimumFractionDigits: 2,
                      }
                    )}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-gray-500">
                  {t("vatMessage")}
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FF6B6B] px-6 py-4 font-semibold text-white transition-all hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(255,107,107,0.35)]"
                >
                  {t("checkout")}

                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
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

                <button
                  onClick={closeCart}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-gray-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  {t("continueShopping")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}