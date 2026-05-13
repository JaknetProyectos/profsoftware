"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function StartProject() {
  const { addItem, openCart } = useCart();

  const [paymentData, setPaymentData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    quoteId: "",
    amount: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const amountNumber = Number(
      paymentData.amount.replace(/[^0-9.]/g, "")
    );

    if (!amountNumber || amountNumber <= 0) {
      return;
    }

    addItem({
      id: `custom-project-${Date.now()}`,
      name: paymentData.quoteId
        ? `Project Quote #${paymentData.quoteId}`
        : "Custom Project Payment",
      price: `$${amountNumber.toLocaleString(
        "en-US"
      )} USD`,
      priceNumber: amountNumber,
      icon: "💻",
    });

    openCart();

    setSuccess(true);

    setPaymentData({
      firstName: "",
      lastName: "",
      email: "",
      quoteId: "",
      amount: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <section
      id="cotizar"
      className="relative overflow-hidden bg-[#0A0A0F] py-24 md:py-32"
    >
      {/* EVA ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,102,102,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          {/* Left */}
          <div>
            {/* macOS window */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-xl">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />

              <span className="text-sm text-gray-300 ml-2">
                custom-payment.tsx
              </span>
            </div>

            <h2 className="font-syne text-5xl md:text-7xl font-semibold text-white leading-[1.05] mb-8">
              Personalize
              <br />
              your service
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Not all of our services are exactly what
              you need, but we can create a unique
              alternative for you.
            </p>

            {/* EVA style panel */}
            <div className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Payment Flow
                  </p>

                  <h3 className="font-syne text-2xl font-semibold text-white">
                    Custom Project
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-[#FF6B6B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0-5v2m0 14v2m9-9h-2M5 12H3"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-sm text-gray-500 mb-2">
                    Secure Checkout
                  </p>

                  <p className="text-white font-semibold">
                    Protected payment process
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-sm text-gray-500 mb-2">
                    Personalized
                  </p>

                  <p className="text-white font-semibold">
                    Tailored to your needs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="relative">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              {/* Window top */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.03]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>

                <span className="text-sm text-gray-400">
                  Payment Details
                </span>

                <div className="w-12" />
              </div>

              <div className="p-8 md:p-10">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Name
                      </label>

                      <input
                        name="firstName"
                        type="text"
                        placeholder="John"
                        required
                        value={paymentData.firstName}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-all focus:border-[#FF6B6B]/60 focus:bg-white/[0.07]"
                      />
                    </div>

                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Surnames
                      </label>

                      <input
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        required
                        value={paymentData.lastName}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-all focus:border-[#FF6B6B]/60 focus:bg-white/[0.07]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      Email
                    </label>

                    <input
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      value={paymentData.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-all focus:border-[#FF6B6B]/60 focus:bg-white/[0.07]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      Quote ID
                    </label>

                    <input
                      name="quoteId"
                      type="text"
                      placeholder="CW-2026-001"
                      value={paymentData.quoteId}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-all focus:border-[#FF6B6B]/60 focus:bg-white/[0.07]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      Amount to Pay
                    </label>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        $
                      </span>

                      <input
                        name="amount"
                        type="text"
                        placeholder="5,000"
                        required
                        value={paymentData.amount}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 pl-8 pr-4 py-3.5 text-white placeholder-gray-500 outline-none transition-all focus:border-[#FF6B6B]/60 focus:bg-white/[0.07]"
                      />
                    </div>
                  </div>

                  {success && (
                    <div className="rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                      Project added to cart successfully.
                    </div>
                  )}

                  <button
                    type="submit"
                    className="group relative overflow-hidden w-full rounded-2xl bg-[#FF6B6B] px-6 py-4 font-semibold text-white transition-all hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(255,107,107,0.35)]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Continue to payment

                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
                  </button>
                </form>

                <p className="text-gray-500 text-xs leading-relaxed mt-5">
                  The final total is subject to 16%
                  VAT. The amounts shown are values
                  excluding tax.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-28 border-t border-white/10 pt-20">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-sm text-gray-500 mb-4">
                Launch your next digital experience
              </p>

              <h2 className="font-syne text-6xl md:text-8xl font-semibold leading-[0.95] text-white">
                Start
                <br />
                your project
              </h2>
            </div>

            <div className="md:pb-3">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8">
                <h3 className="font-syne text-2xl font-semibold text-white mb-4">
                  Do you have an idea in mind?
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  We help companies build scalable
                  software products with modern
                  technologies and high-performance
                  experiences.
                </p>

                <Link
                  href="/quote"
                  className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white transition-all hover:border-[#FF6B6B]/40 hover:bg-white/[0.08]"
                >
                  <span className="font-semibold">
                    Get a quote
                  </span>

                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
    </section>
  );
}