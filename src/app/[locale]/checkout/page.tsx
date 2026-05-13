// app/checkout/page.tsx
"use client";

import {
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from "next/image";

type CheckoutFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  cardName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
};

export default function CheckoutPage() {
  const { items, totalPrice, removeItem, updateQuantity, clearCart } =
    useCart();

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string>("");
  const locale = useLocale();

  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "Mexico",
    cardName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const vatAmount = useMemo(() => totalPrice * 0.16, [totalPrice]);
  const grandTotal = useMemo(
    () => totalPrice + vatAmount,
    [totalPrice, vatAmount]
  );

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    try {
      const generatedOrderId =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `ORD-${Date.now()}`;

      setOrderId(generatedOrderId);

      const amount = Number(grandTotal.toFixed(2));

      const payload = {
        amount,
        orderId: generatedOrderId,
        subtotal: Number(totalPrice.toFixed(2)),
        vat: Number(vatAmount.toFixed(2)),
        total: Number(grandTotal.toFixed(2)),
        items,
        cardData: {
          number: formData.cardNumber,
          name:
            formData.cardName ||
            `${formData.firstName} ${formData.lastName}`.trim(),
          month: formData.expiryMonth,
          year: formData.expiryYear,
          cvv: formData.cvv,
        },
        customer: {
          name: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          telefono: formData.phone,
          direccion: formData.address,
          cp: formData.postalCode,
          city: formData.city,
          state: formData.state,
          country: formData.country,
        },
      };

      const response = await fetch(`/${locale ?? "es"}/api/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "No se pudo completar el pago");
      }

      clearCart();
      setOrderComplete(true);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error desconocido";
      setError(message);
    } finally {
      setIsProcessing(false);
    }
  };

  if (orderComplete) {
    return (
      <main className="overflow-hidden bg-[#0B0B14]">
        <Header />

        <div className="pt-20 min-h-screen bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.25),transparent_35%),radial-gradient(circle_at_right,rgba(127,255,0,0.12),transparent_25%),linear-gradient(180deg,#0B0B14_0%,#111827_100%)]">
          <div className="max-w-3xl mx-auto px-4 py-16">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-transparent to-[#FF5A36]/10" />

              <div className="relative p-8 md:p-12 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#7FFF00] to-[#FF5A36] shadow-[0_0_40px_rgba(127,255,0,0.25)]">
                  <svg
                    className="w-10 h-10 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E9D5FF]">
                  Payment completed
                </div>

                <h1 className="mt-6 font-syne font-bold text-4xl md:text-5xl text-white">
                  Order Confirmed!
                </h1>

                <p className="mt-4 text-base md:text-lg text-white/70 max-w-xl mx-auto">
                  Thank you for your purchase. We will contact you shortly to begin
                  working on your project.
                </p>

                {orderId && (
                  <div className="mt-8 rounded-2xl border border-white/10 bg-[#111827]/80 px-5 py-4 text-sm text-white/70">
                    <span className="text-white/50">Order reference:</span>{" "}
                    <span className="font-semibold text-white">{orderId}</span>
                  </div>
                )}

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#FF5A36] px-8 py-3.5 font-medium text-white shadow-[0_0_28px_rgba(124,58,237,0.35)] transition-transform hover:scale-[1.02]"
                  >
                    Return to Home
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="overflow-hidden bg-[#0B0B14]">
        <Header />

        <div className="pt-20 min-h-screen bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.22),transparent_35%),radial-gradient(circle_at_left,rgba(255,90,54,0.12),transparent_25%),linear-gradient(180deg,#0B0B14_0%,#111827_100%)]">
          <div className="max-w-3xl mx-auto px-4 py-16">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/15 via-transparent to-[#7FFF00]/10" />

              <div className="relative p-8 md:p-12 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <svg
                    className="w-10 h-10 text-white/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 17a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  Cart empty
                </div>

                <h1 className="mt-6 font-syne font-bold text-4xl md:text-5xl text-white">
                  Your Cart is Empty
                </h1>

                <p className="mt-4 text-base md:text-lg text-white/70 max-w-xl mx-auto">
                  Add some services to your cart before checking out.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/#services"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#FF5A36] px-8 py-3.5 font-medium text-white shadow-[0_0_28px_rgba(124,58,237,0.35)] transition-transform hover:scale-[1.02]"
                  >
                    Browse Services
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-[#0B0B14]">
      <Header />

      <div className="pt-20 min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.24),transparent_30%),radial-gradient(circle_at_top_right,rgba(127,255,0,0.10),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(255,90,54,0.12),transparent_24%),linear-gradient(180deg,#0B0B14_0%,#111827_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E9D5FF]">
                Secure checkout
              </div>

              <h1 className="mt-5 font-syne font-bold text-4xl md:text-5xl text-white leading-tight">
                Checkout
              </h1>

              <p className="mt-3 max-w-2xl text-white/70">
                Review your order, complete your billing details, and finalize the
                payment securely.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 md:min-w-[360px]">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Items
                </div>
                <div className="mt-1 text-lg font-semibold text-white">
                  {itemCount}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Subtotal
                </div>
                <div className="mt-1 text-lg font-semibold text-white">
                  MXN ${" "}
                  {totalPrice.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-[#7FFF00]/20 bg-[#7FFF00]/10 px-4 py-4 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Total
                </div>
                <div className="mt-1 text-lg font-semibold text-white">
                  MXN ${" "}
                  {grandTotal.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
            <div className="space-y-8">
              <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="border-b border-white/10 px-6 md:px-8 py-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="font-syne font-bold text-2xl text-white">
                        Order Summary
                      </h2>
                      <p className="mt-1 text-sm text-white/60">
                        Review the services added to your cart.
                      </p>
                    </div>

                    <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/70">
                      {items.length} line{items.length !== 1 ? "s" : ""}
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="group flex gap-4 rounded-2xl border border-white/10 bg-[#111827]/80 p-4 transition-all duration-300 hover:border-[#C084FC]/30 hover:bg-[#111827]"
                      >
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-[#7C3AED]/20 bg-gradient-to-br from-[#7C3AED]/25 via-[#C084FC]/15 to-[#FF5A36]/20 shadow-[0_0_20px_rgba(124,58,237,0.18)]">
                          <svg
                            className="w-6 h-6 text-[#C084FC]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                            <div className="min-w-0">
                              <h3 className="font-syne font-semibold text-base text-white">
                                {item.name}
                              </h3>
                              <p className="mt-1 text-sm text-[#7FFF00] font-semibold">
                                {item.price}
                              </p>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="self-start rounded-full border border-white/10 bg-white/5 p-2 text-white/50 transition-colors hover:border-[#FF5A36]/40 hover:bg-[#FF5A36]/10 hover:text-[#FF5A36]"
                              aria-label="Remove item"
                            >
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
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>

                          <div className="mt-4 flex items-center justify-between gap-4">
                            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-3 py-2">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/15"
                                aria-label="Decrease quantity"
                              >
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
                                    d="M20 12H4"
                                  />
                                </svg>
                              </button>

                              <span className="min-w-8 text-center font-semibold text-white">
                                {item.quantity}
                              </span>

                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/15"
                                aria-label="Increase quantity"
                              >
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
                                    d="M12 4v16m8-8H4"
                                  />
                                </svg>
                              </button>
                            </div>

                            <div className="text-right">
                              <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                                Line total
                              </div>
                              <div className="mt-1 font-semibold text-white">
                                MXN ${" "}
                                {(
                                  item.priceNumber * item.quantity
                                ).toLocaleString("en-US", {
                                  minimumFractionDigits: 2,
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#111827]/70 p-5">
                    <div className="space-y-3">
                      <div className="flex justify-between text-white/65">
                        <span>Subtotal</span>
                        <span>
                          MXN${" "}
                          {totalPrice.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                          })}
                        </span>
                      </div>

                      <div className="flex justify-between text-white/65">
                        <span>VAT (16%)</span>
                        <span>
                          MXN${" "}
                          {vatAmount.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                          })}
                        </span>
                      </div>

                      <div className="flex justify-between border-t border-white/10 pt-4 text-lg font-bold text-white">
                        <span>Total</span>
                        <span>
                          MXN${" "}
                          {grandTotal.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="border-b border-white/10 px-6 md:px-8 py-6">
                <h2 className="font-syne font-bold text-2xl text-white">
                  Payment Information
                </h2>
                <p className="mt-1 text-sm text-white/60">
                  Fill in the details to complete your purchase.
                </p>
              </div>

              <div className="p-6 md:p-8">
                {error && (
                  <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-[#111827]/60 p-5">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                      Contact Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                      />
                      <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                      />
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                      />
                    </div>

                    <input
                      name="company"
                      type="text"
                      placeholder="Company (Optional)"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-4 w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                    />
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#111827]/60 p-5">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                      Billing Address
                    </h3>

                    <input
                      name="address"
                      type="text"
                      placeholder="Address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                    />

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <input
                        name="city"
                        type="text"
                        placeholder="City"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                      />
                      <input
                        name="state"
                        type="text"
                        placeholder="State"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <input
                        name="postalCode"
                        type="text"
                        placeholder="Postal Code"
                        required
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                      />
                      <input
                        name="country"
                        type="text"
                        placeholder="Country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#111827]/60 p-5">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                      Card Information
                    </h3>

                    <input
                      name="cardName"
                      type="text"
                      placeholder="Name on Card"
                      required
                      value={formData.cardName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                    />

                    <input
                      name="cardNumber"
                      type="text"
                      placeholder="Card Number"
                      required
                      maxLength={16}
                      inputMode="numeric"
                      autoComplete="cc-number"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className="mt-4 w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                    />

                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <input
                        name="expiryMonth"
                        type="text"
                        placeholder="MM"
                        required
                        inputMode="numeric"
                        autoComplete="cc-exp-month"
                        value={formData.expiryMonth}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                      />
                      <input
                        name="expiryYear"
                        type="text"
                        placeholder="YYYY"
                        required
                        inputMode="numeric"
                        autoComplete="cc-exp-year"
                        value={formData.expiryYear}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                      />
                      <input
                        name="cvv"
                        type="password"
                        placeholder="CVV"
                        required
                        inputMode="numeric"
                        autoComplete="cc-csc"
                        value={formData.cvv}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#7C3AED]/20 bg-gradient-to-r from-[#7C3AED]/10 via-[#C084FC]/10 to-[#FF5A36]/10 px-4 py-3 text-sm text-white/75">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <span>Payment reference</span>
                      <span className="font-medium text-white">
                        {orderId || "Generated at checkout"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 justify-center px-6 py-4 border-t border-white/10">
                    <Image src="/visa.png" alt="Etomin" width={50} height={40} className="" />
                    <Image src="/mastercard.png" alt="Etomin" width={50} height={40} className="" />
                    <Image src="/octano.png" alt="Etomin" width={150} height={40} className="" />
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full rounded-2xl bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#FF5A36] py-4 font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.32)] transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <span className="inline-flex items-center justify-center gap-3">
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center gap-2">
                        Complete Purchase - MXN${" "}
                        {grandTotal.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                        })}
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                    )}
                  </button>

                  <p className="text-xs text-white/45 text-center leading-relaxed">
                    By completing this purchase, you agree to our Terms and
                    Conditions and Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}