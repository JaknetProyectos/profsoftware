"use client";

import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("AboutUs");

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F6F1FF] py-20 md:py-28"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#7d4cff]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#78ffb7]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7d4cff]/20 bg-white/70 backdrop-blur px-4 py-2 mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#78ffb7]" />

              <span className="text-sm font-semibold text-[#5b34d6]">
                {t("badge")}
              </span>
            </div>

            <h2 className="font-syne font-bold text-4xl md:text-6xl leading-tight text-[#151515] max-w-xl">
              {t("title")}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-xl">
              {t("description")}
            </p>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-[32px] border border-[#7d4cff]/15 bg-white/80 backdrop-blur-xl p-8 shadow-[0_20px_80px_rgba(91,52,214,0.12)]">
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-black/5 pb-5 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>

                <div className="text-sm font-semibold text-gray-400">
                  {t("windowTitle")}
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-2xl border border-[#7d4cff]/10 bg-[#faf7ff] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#5b34d6] flex items-center justify-center shadow-lg">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">
                      {t("cards.innovation.title")}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {t("cards.innovation.description")}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#78ffb7]/20 bg-[#0f1720] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#78ffb7] flex items-center justify-center shadow-lg">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 17v-2a4 4 0 014-4h8"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l8 8-8 8"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {t("cards.growth.title")}
                    </h3>
                  </div>

                  <p className="text-gray-400 leading-relaxed">
                    {t("cards.growth.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}