"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#07070B] pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7c3aed]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff5f1f]/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* MacOS Top */}
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-t-2xl border border-white/10 bg-[#111118]/90 backdrop-blur-xl">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />

              <div className="ml-4 text-sm text-gray-400 font-medium">
                {t("windowTitle")}
              </div>
            </div>

            {/* Main Card */}
            <div className="rounded-b-[28px] rounded-r-[28px] border border-white/10 bg-[#111118]/90 backdrop-blur-2xl p-8 md:p-10 shadow-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#d8b4fe] text-sm font-medium mb-8">
                <div className="w-2 h-2 rounded-full bg-[#84cc16] animate-pulse" />
                {t("badge")}
              </div>

              <h1 className="font-syne font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-white">
                {t("title.start")}
                <span className="block bg-gradient-to-r from-[#7c3aed] via-[#ff4fd8] to-[#ff5f1f] bg-clip-text text-transparent">
                  {t("title.highlight")}
                </span>
                {t("title.end")}
              </h1>

              <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-2xl">
                {t("description")}
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex gap-5 items-end justify-center lg:justify-end">
            {/* Analytics Card */}
            <div className="relative rounded-[32px] border border-white/10 bg-[#111118]/90 backdrop-blur-2xl p-6 shadow-2xl flex-1 max-w-sm overflow-hidden">
              {/* Top Bar */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />

                <span className="ml-3 text-sm text-gray-400">
                  {t("analytics.file")}
                </span>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">
                    {t("analytics.trafficLabel")}
                  </div>

                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-semibold text-white">
                      40.8K
                    </span>

                    <span className="text-sm text-[#84cc16] bg-[#84cc16]/10 border border-[#84cc16]/20 px-2 py-1 rounded-full">
                      +8.1%
                    </span>
                  </div>
                </div>
              </div>

              {/* Bars */}
              <div className="flex gap-2 items-end h-44">
                {[40, 60, 80, 45, 70, 85, 55, 75, 90, 65].map(
                  (height, i) => (
                    <div
                      key={i}
                      className="flex-1 flex flex-col gap-1"
                    >
                      <div
                        className="rounded-t-xl bg-gradient-to-t from-[#7c3aed] to-[#c026d3]"
                        style={{
                          height: `${height * 0.45}%`,
                        }}
                      />

                      <div
                        className="rounded-b-xl bg-gradient-to-b from-[#ff5f1f] to-[#ff8c42]"
                        style={{
                          height: `${height * 0.55}%`,
                        }}
                      />
                    </div>
                  )
                )}
              </div>

              <div className="flex justify-between mt-4 text-sm text-gray-500">
                <span>{t("chart.start")}</span>
                <span>{t("chart.end")}</span>
              </div>
            </div>

            {/* Donut */}
            <div className="hidden md:block rounded-[32px] border border-white/10 bg-[#111118]/90 backdrop-blur-2xl p-6 shadow-2xl w-[230px]">
              {/* MacOS */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>

              <div className="text-sm text-gray-400 mb-4">
                {t("visitors.title")}
              </div>

              <div className="relative w-36 h-36 mx-auto">
                <svg
                  className="w-full h-full -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="15.91549430918954"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="3"
                    strokeDasharray="50 50"
                    strokeDashoffset="0"
                  />

                  <circle
                    cx="18"
                    cy="18"
                    r="15.91549430918954"
                    fill="none"
                    stroke="#84cc16"
                    strokeWidth="3"
                    strokeDasharray="50 50"
                    strokeDashoffset="-50"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-semibold text-white">
                    100K
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7c3aed]" />

                    <span className="text-gray-300">
                      {t("visitors.organic")}
                    </span>
                  </div>

                  <span className="text-gray-500">
                    50%
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#84cc16]" />

                    <span className="text-gray-300">
                      {t("visitors.social")}
                    </span>
                  </div>

                  <span className="text-gray-500">
                    50%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}