"use client";

import { useTranslations } from "next-intl";

export default function Principles() {
  const t = useTranslations("principles");

  const principles = [
    {
      number: 1,
      title: t("items.0.title"),
      description: t("items.0.description"),
      accent: "from-lime-400 to-emerald-500",
      glow: "shadow-[0_0_35px_rgba(132,204,22,0.25)]",
    },
    {
      number: 2,
      title: t("items.1.title"),
      description: t("items.1.description"),
      accent: "from-orange-400 to-red-500",
      glow: "shadow-[0_0_35px_rgba(249,115,22,0.22)]",
    },
    {
      number: 3,
      title: t("items.2.title"),
      description: t("items.2.description"),
      accent: "from-fuchsia-500 to-violet-600",
      glow: "shadow-[0_0_35px_rgba(168,85,247,0.25)]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f6f3ea] py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-fuchsia-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-lime-400/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-md mb-6">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-orange-400" />
              <span className="w-3 h-3 rounded-full bg-lime-400" />
            </div>

            <span className="text-sm font-semibold text-gray-700">
              {t("badge")}
            </span>
          </div>

          <h2 className="font-syne font-semibold text-4xl md:text-5xl text-gray-900 leading-tight">
            {t("title")}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className={`group relative overflow-hidden rounded-[30px] border border-black/10 bg-white/80 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-1 ${principle.glow}`}
            >
              {/* Glow */}
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${principle.accent}`}
              />

              {/* Window controls */}
              <div className="flex items-center gap-2 mb-8">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-orange-400" />
                <span className="w-3 h-3 rounded-full bg-lime-400" />
              </div>

              {/* Number */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${principle.accent} flex items-center justify-center text-white font-syne font-semibold text-2xl mb-6 shadow-lg`}
              >
                {principle.number}
              </div>

              {/* Content */}
              <h3 className="font-syne font-semibold text-2xl text-gray-900 leading-snug mb-4">
                {principle.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-[15px]">
                {principle.description}
              </p>

              {/* Decorative corner */}
              <div
                className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${principle.accent} opacity-10 blur-2xl`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}