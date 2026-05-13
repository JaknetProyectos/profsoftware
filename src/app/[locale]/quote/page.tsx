"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CustomProjectPage() {
  const { addItem, openCart } = useCart();

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
        ? `Custom ${formData.service} Project`
        : "Custom Software Project",
      price: `$${amountNumber.toLocaleString("en-US")} USD`,
      priceNumber: amountNumber,
      icon: "💻",
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
              Premium Custom Development
            </div>

            <h1 className="font-semibold text-5xl md:text-7xl  max-w-5xl">
              Create your
              <span className="block bg-gradient-to-r from-[#7c3aed] via-[#ff4fd8] to-[#ff5f1f] bg-clip-text text-transparent">
                next software
              </span>
              project
            </h1>

            <p className="mt-8 text-lg text-gray-300 max-w-2xl leading-relaxed">
              Enterprise-grade platforms, AI automations,
              mobile apps and scalable systems crafted
              specifically for your business goals.
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff5f1f]/20 bg-[#ff5f1f]/10 text-[#ff9f66] text-xs uppercase  mb-6">
                    Tailored Solutions
                  </div>

                  <h2 className="font-syne text-4xl md:text-5xl font-semibold leading-tight mb-6">
                    What can we
                    <span className="block text-[#c084fc]">
                      build for you?
                    </span>
                  </h2>

                  <p className="text-lg text-gray-400 leading-relaxed">
                    Every custom project is designed for
                    performance, scalability and modern
                    user experiences.
                  </p>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      title: "Web Platforms",
                      desc: "Custom SaaS, dashboards, admin systems and scalable cloud architecture.",
                      color: "#7c3aed",
                    },
                    {
                      title: "Mobile Applications",
                      desc: "High-performance iOS and Android experiences with elegant interfaces.",
                      color: "#84cc16",
                    },
                    {
                      title: "AI Integrations",
                      desc: "AI agents, automations, chatbots and intelligent workflows.",
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

                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="rounded-2xl border border-[#7c3aed]/20 bg-[#7c3aed]/10 p-5">
                    <div className="text-3xl font-black text-white mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-gray-300">
                      Project Support
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#84cc16]/20 bg-[#84cc16]/10 p-5">
                    <div className="text-3xl font-black text-white mb-1">
                      AI
                    </div>
                    <div className="text-sm text-gray-300">
                      Modern Integrations
                    </div>
                  </div>
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
                        Custom Quote
                      </p>

                      <h3 className="font-syne text-3xl font-semibold">
                        Project Details
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
                          Name
                        </label>

                        <input
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className="w-full px-5 py-4 rounded-2xl bg-[#181824] border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-[#7c3aed] focus:ring-4 focus:ring-[#7c3aed]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-sm text-gray-300 mb-2 block">
                          Surnames
                        </label>

                        <input
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className="w-full px-5 py-4 rounded-2xl bg-[#181824] border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-[#7c3aed] focus:ring-4 focus:ring-[#7c3aed]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-sm text-gray-300 mb-2 block">
                        Email
                      </label>

                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-5 py-4 rounded-2xl bg-[#181824] border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-[#84cc16] focus:ring-4 focus:ring-[#84cc16]/20 transition-all"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="text-sm text-gray-300 mb-2 block">
                        Service Needed
                      </label>

                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl bg-[#181824] border border-white/10 text-white outline-none focus:border-[#ff5f1f] focus:ring-4 focus:ring-[#ff5f1f]/20 transition-all"
                      >
                        <option value="">
                          Select a service
                        </option>

                        <option value="Web Platform">
                          Web Platform
                        </option>

                        <option value="Mobile App">
                          Mobile App
                        </option>

                        <option value="AI Automation">
                          AI Automation
                        </option>

                        <option value="E-commerce">
                          E-commerce
                        </option>

                        <option value="Custom Software">
                          Custom Software
                        </option>
                      </select>
                    </div>

                    {/* Details */}
                    <div>
                      <label className="text-sm text-gray-300 mb-2 block">
                        Project Details
                      </label>

                      <textarea
                        name="details"
                        rows={6}
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Tell us about your idea, goals, features and business needs..."
                        className="w-full px-5 py-4 rounded-2xl bg-[#181824] border border-white/10 text-white placeholder:text-gray-500 resize-none outline-none focus:border-[#c084fc] focus:ring-4 focus:ring-[#c084fc]/20 transition-all"
                      />
                    </div>

                    {/* Quote & Amount */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm text-gray-300 mb-2 block">
                          Quote ID
                        </label>

                        <input
                          name="quoteId"
                          type="text"
                          value={formData.quoteId}
                          onChange={handleChange}
                          placeholder="Optional"
                          className="w-full px-5 py-4 rounded-2xl bg-[#181824] border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-[#84cc16] focus:ring-4 focus:ring-[#84cc16]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-sm text-gray-300 mb-2 block">
                          Amount to Pay
                        </label>

                        <input
                          name="amount"
                          type="text"
                          required
                          value={formData.amount}
                          onChange={handleChange}
                          placeholder="$5,000"
                          className="w-full px-5 py-4 rounded-2xl bg-[#181824] border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-[#ff5f1f] focus:ring-4 focus:ring-[#ff5f1f]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Success */}
                    {success && (
                      <div className="rounded-2xl border border-[#84cc16]/30 bg-[#84cc16]/10 px-5 py-4 text-[#b5ff5e] text-sm backdrop-blur-xl">
                        Your custom project was added
                        to the cart successfully.
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
                        Add Custom Project

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
                      Secure custom checkout experience
                      with scalable infrastructure and
                      modern payment processing.
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