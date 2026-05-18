"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { Box, Pencil } from "lucide-react";

export default function CustomProjectPage() {
  const { addItem, openCart } = useCart();
  const t = useTranslations("CustomProject");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    quoteId: "",
    amount: "",
    details: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const amountNumber = Number(
      formData.amount.replace(/[^0-9.]/g, "")
    );

    const customProduct = {
      id: `custom-project-${Date.now()}`,
      name: formData.service
        ? t("cart.customProjectName", {
            service: formData.service,
          })
        : t("cart.defaultProjectName"),
      price: `${amountNumber.toLocaleString("")}`,
      priceNumber: amountNumber,
      icon: Box,
    };

    addItem(customProduct);

    openCart();

    setSuccess(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      service: "",
      quoteId: "",
      amount: "",
      details: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#07070B] text-white overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7c3aed]/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff5f1f]/10 blur-3xl rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#84cc16]/10 blur-3xl rounded-full" />
        </div>

        {/* Hero */}
        <section className="relative border-b border-white/10 overflow-hidden pt-24">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-7xl mx-auto px-6 py-24">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#84cc16]/30 bg-[#84cc16]/10 text-[#b5ff5e] text-sm mb-8 backdrop-blur-xl">
              <div className="w-2 h-2 rounded-full bg-[#84cc16] animate-pulse" />
              {t("hero.badge")}
            </div>

            <h1 className="font-semibold text-5xl md:text-7xl max-w-5xl">
              {t("hero.title")}
              <span className="block bg-gradient-to-r from-[#7c3aed] via-[#ff4fd8] to-[#ff5f1f] bg-clip-text text-transparent">
                {t("hero.titleHighlight")}
              </span>
              {t("hero.titleEnd")}
            </h1>

            <p className="mt-8 text-lg text-gray-300 max-w-2xl leading-relaxed">
              {t("hero.description")}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.15fr] gap-16 items-start">
            {/* Left Side */}
            <div>
              <div className="sticky top-28">
                <div className="mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff5f1f]/20 bg-[#ff5f1f]/10 text-[#ff9f66] text-xs uppercase mb-6">
                    {t("solutions.badge")}
                  </div>

                  <h2 className="font-syne text-4xl md:text-5xl font-semibold leading-tight mb-6">
                    {t("solutions.title")}
                    <span className="block text-[#c084fc]">
                      {t("solutions.titleHighlight")}
                    </span>
                  </h2>

                  <p className="text-lg text-gray-400 leading-relaxed">
                    {t("solutions.description")}
                  </p>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      title: t("cards.web.title"),
                      desc: t("cards.web.description"),
                      color: "#7c3aed",
                    },
                    {
                      title: t("cards.mobile.title"),
                      desc: t("cards.mobile.description"),
                      color: "#84cc16",
                    },
                    {
                      title: t("cards.ai.title"),
                      desc: t("cards.ai.description"),
                      color: "#ff5f1f",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300"
                    >
                      <div
                        className="absolute inset-y-0 left-0 w-1"
                        style={{ background: item.color }}
                      />

                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background: `${item.color}20`,
                            border: `1px solid ${item.color}40`,
                          }}
                        >
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ background: item.color }}
                          />
                        </div>

                        <div>
                          <h3 className="font-bold text-xl mb-2">
                            {item.title}
                          </h3>

                          <p className="text-gray-400 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Right Side */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 via-transparent to-[#ff5f1f]/20 blur-3xl rounded-[40px]" />

              <div className="relative rounded-[32px] border border-white/10 bg-[#101018]/90 backdrop-blur-2xl overflow-hidden shadow-2xl">
                {/* Top Glow */}
                <div className="h-1 bg-gradient-to-r from-[#7c3aed] via-[#84cc16] to-[#ff5f1f]" />

                <div className="p-8 md:p-10">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-sm uppercase text-[#c084fc] mb-2">
                        {t("form.badge")}
                      </p>

                      <h3 className="font-syne text-3xl font-semibold">
                        {t("form.title")}
                      </h3>
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff4d4d]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffb703]" />
                      <div className="w-3 h-3 rounded-full bg-[#84cc16]" />
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Names */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm text-gray-300 mb-2 block">
                          {t("form.firstName")}
                        </label>

                        <input
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder={t("form.placeholders.firstName")}
                          className="w-full px-5 py-4 rounded-2xl bg-[#181824] border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-[#7c3aed] focus:ring-4 focus:ring-[#7c3aed]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-sm text-gray-300 mb-2 block">
                          {t("form.lastName")}
                        </label>

                        <input
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder={t("form.placeholders.lastName")}
                          className="w-full px-5 py-4 rounded-2xl bg-[#181824] border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-[#7c3aed] focus:ring-4 focus:ring-[#7c3aed]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-sm text-gray-300 mb-2 block">
                        {t("form.email")}
                      </label>

                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("form.placeholders.email")}
                        className="w-full px-5 py-4 rounded-2xl bg-[#181824] border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-[#84cc16] focus:ring-4 focus:ring-[#84cc16]/20 transition-all"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="text-sm text-gray-300 mb-2 block">
                        {t("form.service")}
                      </label>

                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl bg-[#181824] border border-white/10 text-white outline-none focus:border-[#ff5f1f] focus:ring-4 focus:ring-[#ff5f1f]/20 transition-all"
                      >
                        <option value="">
                          {t("form.selectService")}
                        </option>

                        <option value={t("services.webPlatform")}>
                          {t("services.webPlatform")}
                        </option>

                        <option value={t("services.mobileApp")}>
                          {t("services.mobileApp")}
                        </option>

                        <option value={t("services.aiAutomation")}>
                          {t("services.aiAutomation")}
                        </option>

                        <option value={t("services.ecommerce")}>
                          {t("services.ecommerce")}
                        </option>

                        <option value={t("services.customSoftware")}>
                          {t("services.customSoftware")}
                        </option>
                      </select>
                    </div>

                    {/* Details */}
                    <div>
                      <label className="text-sm text-gray-300 mb-2 block">
                        {t("form.projectDetails")}
                      </label>

                      <textarea
                        name="details"
                        rows={6}
                        value={formData.details}
                        onChange={handleChange}
                        placeholder={t("form.placeholders.details")}
                        className="w-full px-5 py-4 rounded-2xl bg-[#181824] border border-white/10 text-white placeholder:text-gray-500 resize-none outline-none focus:border-[#c084fc] focus:ring-4 focus:ring-[#c084fc]/20 transition-all"
                      />
                    </div>

                    {/* Quote & Amount */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm text-gray-300 mb-2 block">
                          {t("form.quoteId")}
                        </label>

                        <input
                          name="quoteId"
                          type="text"
                          value={formData.quoteId}
                          onChange={handleChange}
                          placeholder={t("form.placeholders.quoteId")}
                          className="w-full px-5 py-4 rounded-2xl bg-[#181824] border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-[#84cc16] focus:ring-4 focus:ring-[#84cc16]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-sm text-gray-300 mb-2 block">
                          {t("form.amount")}
                        </label>

                        <input
                          name="amount"
                          type="text"
                          required
                          value={formData.amount}
                          onChange={handleChange}
                          placeholder={t("form.placeholders.amount")}
                          className="w-full px-5 py-4 rounded-2xl bg-[#181824] border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-[#ff5f1f] focus:ring-4 focus:ring-[#ff5f1f]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Success */}
                    {success && (
                      <div className="rounded-2xl border border-[#84cc16]/30 bg-[#84cc16]/10 px-5 py-4 text-[#b5ff5e] text-sm backdrop-blur-xl">
                        {t("success")}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group relative w-full overflow-hidden rounded-2xl py-5 font-bold text-white transition-all duration-300 hover:scale-[1.01]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] via-[#ff4fd8] to-[#ff5f1f]" />

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.2),transparent)] animate-[shine_2s_linear_infinite]" />

                      <div className="relative flex items-center justify-center gap-3">
                        {t("form.submit")}

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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </button>

                    <p className="text-center text-xs text-gray-500 leading-relaxed">
                      {t("footer")}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}