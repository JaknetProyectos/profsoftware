"use client";

import { useTranslations } from "next-intl";

export default function SoftwareSolutions() {
  const t = useTranslations("softwareSolutions");

  const principles = [
    {
      title: t("principles.innovation.title"),
      description: t("principles.innovation.description"),
      accent: "from-fuchsia-500 to-violet-600",
    },
    {
      title: t("principles.collaboration.title"),
      description: t("principles.collaboration.description"),
      accent: "from-orange-400 to-red-500",
    },
    {
      title: t("principles.quality.title"),
      description: t("principles.quality.description"),
      accent: "from-lime-400 to-emerald-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#111118] py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-fuchsia-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lime-400/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-orange-400" />
              <span className="w-3 h-3 rounded-full bg-lime-400" />
            </div>

            <span className="text-sm font-semibold text-gray-300">
              {t("badge")}
            </span>
          </div>

          <h2 className="font-syne font-semibold text-4xl md:text-6xl text-white leading-tight">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
            <br />
            {t("titleLine3")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* Left */}
          <div>
            {/* Image */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-3 mb-8">
              {/* Window controls */}
              <div className="flex items-center gap-2 mb-4 px-2 pt-1">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-orange-400" />
                <span className="w-3 h-3 rounded-full bg-lime-400" />
              </div>

              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://ext.same-assets.com/2034627938/2116037978.png"
                  alt={t("imageAlt")}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-fuchsia-500/20 blur-3xl rounded-full" />
            </div>

            {/* Text */}
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed text-[15px] md:text-base">
                {t("description1")}
              </p>

              <p className="leading-relaxed text-[15px] md:text-base">
                {t("description2")}
              </p>

              <p className="font-semibold text-white text-lg">
                {t("principlesTitle")}
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between h-full">
            {/* Principle Cards */}
            <div className="grid gap-5">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  {/* Accent line */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${principle.accent}`}
                  />

                  {/* Content */}
                  <div className="flex items-start gap-5">
                    {/* Number */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${principle.accent} flex items-center justify-center text-white font-syne font-semibold text-lg flex-shrink-0 shadow-lg`}
                    >
                      0{index + 1}
                    </div>

                    <div>
                      <h3 className="font-syne font-semibold text-2xl text-white mb-3 leading-snug">
                        {principle.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed text-[15px]">
                        {principle.description}
                      </p>
                    </div>
                  </div>

                  {/* Glow */}
                  <div
                    className={`absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-gradient-to-br ${principle.accent} opacity-10 blur-3xl`}
                  />
                </div>
              ))}
            </div>

            {/* Bottom text */}
            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-orange-400" />
                <span className="w-3 h-3 rounded-full bg-lime-400" />
              </div>

              <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">
                {t("footerText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}