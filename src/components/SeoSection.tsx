"use client";

import { useTranslations } from "next-intl";

export default function SeoSection() {
  const t = useTranslations("seo");

  return (
    <section className="relative overflow-hidden bg-[#120F1A] py-20 md:py-28">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#7d4cff]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#78ffb7]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mac style top dots */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7d4cff]/20 bg-white/5 backdrop-blur px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#78ffb7]" />

            <span className="text-sm font-semibold text-[#b89cff]">
              {t("badge")}
            </span>
          </div>

          <h2 className="font-syne font-bold text-4xl md:text-6xl leading-tight text-white">
            {t("title1")}
            <br />
            {t("title2")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            {/* Image card */}
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              {/* Window top */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black/20">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>

                <div className="text-xs text-gray-400 font-semibold">
                  {t("windowLabel")}
                </div>
              </div>

              <div className="p-4">
                <img
                  src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={t("imageAlt")}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="mt-10 space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {t("description1")}
                </p>
              </div>

              <div className="rounded-3xl border border-[#7d4cff]/20 bg-[#181125] p-7">
                <p className="text-gray-400 leading-relaxed text-lg">
                  {t("description2")}
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-6">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-[32px] border border-[#7d4cff]/20 bg-[#1A1326] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#7d4cff]/40 hover:shadow-[0_20px_60px_rgba(124,76,255,0.2)]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#7d4cff]/10 blur-3xl rounded-full" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-[#5b34d6] flex items-center justify-center shadow-xl mb-6">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1-1-3 1 .75-3M15 6h.01M12 3h4.5A2.5 2.5 0 0119 5.5V10a9 9 0 11-18 0V5.5A2.5 2.5 0 013.5 3H8"
                    />
                  </svg>
                </div>

                <h3 className="font-syne font-semibold text-2xl text-white mb-4">
                  {t("card1.title")}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {t("card1.description")}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-[32px] border border-[#78ffb7]/20 bg-[#0E1618] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#78ffb7]/40 hover:shadow-[0_20px_60px_rgba(120,255,183,0.12)]">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#78ffb7]/10 blur-3xl rounded-full" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-[#78ffb7] flex items-center justify-center shadow-xl mb-6">
                  <svg
                    className="w-7 h-7 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8L10 18l-5-5-3 3"
                    />
                  </svg>
                </div>

                <h3 className="font-syne font-semibold text-2xl text-white mb-4">
                  {t("card2.title")}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {t("card2.description")}
                </p>
              </div>
            </div>

            {/* Bottom mini metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <div className="text-3xl font-bold text-[#78ffb7] mb-2">
                  {t("metric1.title")}
                </div>

                <p className="text-sm text-gray-400 font-medium">
                  {t("metric1.description")}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <div className="text-3xl font-bold text-[#ff8a3d] mb-2">
                  {t("metric2.title")}
                </div>

                <p className="text-sm text-gray-400 font-medium">
                  {t("metric2.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}