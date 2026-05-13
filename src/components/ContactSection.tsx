"use client";

import { useState } from "react";
import { useContact } from "@/hooks/use-contact";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const { send, isLoading, success, error } = useContact({
    endpoint: "/api/contacto",
    onSuccess: () => {
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await send({
      nombre: formData.name,
      empresa: formData.company,
      telefono: formData.phone,
      email: formData.email,
      mensaje: formData.message,
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#071A1D] py-20 md:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>

            <span className="text-sm text-gray-300 font-medium">
              Contact CreativaWorks
            </span>
          </div>

          <div className="bg-[#F7F3EE] rounded-[32px] p-8 md:p-12 border border-black/5 shadow-[0_20px_80px_rgba(0,0,0,0.12)]">
            <h2 className="font-syne font-semibold text-4xl md:text-6xl text-[#FF7A59] leading-[1.05] max-w-4xl">
              Let&apos;s Build Your
              <br />
              Digital Solution
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          {/* Left Side */}
          <div className="bg-white/[0.03] border border-white/10 rounded-[30px] p-8 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>

              <span className="text-sm text-gray-300 font-medium">
                Start your project
              </span>
            </div>

            <h3 className="font-syne font-semibold text-3xl text-white mb-4 leading-tight">
              Let&apos;s Begin Now
            </h3>

            <p className="text-gray-400 leading-relaxed mb-10 text-[15px]">
              Tell us about your business, your idea, or the software solution
              you need. We&apos;ll help you build something scalable, modern,
              and ready for growth.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:hereweare@creativaworks.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-white/[0.06] transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-coral">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <p className="text-white font-medium group-hover:text-coral transition-colors">
                    hereweare@creativaworks.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+525521208017"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-white/[0.06] transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-coral">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">Telephone</p>
                  <p className="text-white font-medium group-hover:text-coral transition-colors">
                    +52 55 2120 8017
                  </p>
                </div>
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-coral flex-shrink-0">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-1">Office</p>

                    <p className="text-white leading-relaxed text-sm">
                      Av. Homero 203, Office 804, Floor 8 MZ,
                      Col. Polanco V Section, Miguel Hidalgo
                      Borough, CP 11560, Mexico City
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 overflow-hidden rounded-[24px] border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6617366657!2d-99.19844682527832!3d19.43317034090901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201fe24a4c9af%3A0x8f5f5f5f5f5f5f!2sAv.%20Homero%20203%2C%20Polanco%2C%20Polanco%20V%20Secc%2C%20Miguel%20Hidalgo%2C%2011560%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1234567890"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              />
            </div>
          </div>

          {/* Form */}
          <div className="relative bg-[#F7F3EE] rounded-[30px] border border-black/5 shadow-[0_20px_80px_rgba(0,0,0,0.14)] overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center gap-2 px-6 py-4 border-b border-black/5 bg-white/60 backdrop-blur">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />

              <div className="ml-4 text-sm text-gray-500 font-medium">
                Contact Form
              </div>
            </div>

            <div className="p-8 md:p-10">
              <h4 className="font-syne font-semibold text-3xl text-gray-900 mb-3">
                Complete your information
              </h4>

              <p className="text-gray-600 leading-relaxed mb-8">
                Send us your details and we&apos;ll get in touch shortly to
                discuss your project.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-coral focus:ring-4 focus:ring-coral/10"
                  />

                  <input
                    name="company"
                    type="text"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-coral focus:ring-4 focus:ring-coral/10"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-coral focus:ring-4 focus:ring-coral/10"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-coral focus:ring-4 focus:ring-coral/10"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-coral focus:ring-4 focus:ring-coral/10"
                />

                {error && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    Message sent successfully.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full rounded-2xl bg-[#FF7A59] px-6 py-4 text-white font-semibold transition-all hover:scale-[1.01] hover:shadow-[0_10px_40px_rgba(255,122,89,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isLoading ? "Sending..." : "Send"}

                    {!isLoading && (
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
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}