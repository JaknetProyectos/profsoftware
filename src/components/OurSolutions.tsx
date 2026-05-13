"use client";

import { useLocale, useTranslations } from "next-intl";
import {
  solutionsEnglish,
  solutionsSpanish,
} from "@/lib/solutions";

export default function OurSolutions() {
  const t = useTranslations("ourSolutions");
  const locale = useLocale();

  const solutions =
    locale === "es"
      ? solutionsSpanish
      : solutionsEnglish;

  const getIcon = (type: string) => {
    const iconClass = "w-10 h-10 text-coral";

    switch (type) {
      case "web":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );

      case "maintenance":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        );

      case "uiux":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        );

      case "custom":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <section className="bg-cream py-20 md:py-28 grid-pattern-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-3 h-3 rounded-full bg-[#ff5c4d]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          <h2 className="font-syne font-semibold text-4xl md:text-5xl text-gray-900 leading-tight">
            {t("title")}
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-coral/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-coral/10 border border-coral/10">
                    {getIcon(solution.icon)}
                  </div>

                  <span className="text-sm text-gray-400 font-medium">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-syne font-semibold text-2xl text-gray-900 leading-tight mb-3">
                  {solution.title}
                </h3>

                {/* Subtitle */}
                {solution.subtitle && (
                  <p className="text-gray-500 mb-4 leading-relaxed">
                    {solution.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-8">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-gray-900">
                    {t("includes")}
                  </p>

                  <ul className="space-y-3">
                    {solution.features.map(
                      (feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-gray-600"
                        >
                          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-coral/10 text-coral text-xs mt-0.5">
                            ✓
                          </span>

                          <span className="leading-relaxed text-sm">
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ERP Section */}
        <div className="mt-10 rounded-[2.5rem] border border-black/5 bg-white p-8 md:p-12 shadow-sm">
          <div className="max-w-5xl mx-auto">
            {/* Top */}
            <div className="flex flex-col items-center text-center mb-12">
              <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-coral/10 border border-coral/10 mb-6">
                <svg
                  className="w-10 h-10 text-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>

              <h3 className="font-syne font-semibold text-3xl md:text-4xl text-gray-900 leading-tight mb-6">
                {t("erp.title")}
              </h3>

              <p className="text-gray-600 leading-relaxed max-w-3xl text-lg">
                {t("erp.description")}
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4">
              {t.raw("erp.features").map(
                (item: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-black/5 bg-cream px-5 py-5"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-coral text-white text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </div>

                    <p className="text-sm leading-relaxed text-gray-700">
                      {item}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}