"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="relative overflow-hidden border-t border-[#6dffb3]/10 bg-[#09090f]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-[-120px] w-[320px] h-[320px] bg-[#7c3aed]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#ff5f1f]/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:34px_34px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-[1.3fr_.8fr] gap-14 mb-14">
          {/* Company Info */}
          <div>
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-3 mb-7"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#7c3aed] blur-xl opacity-70 rounded-full" />

                <div className="relative w-12 h-12 rounded-2xl border border-[#6dffb3]/30 bg-[#12121b] flex items-center justify-center">
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#ff5f1f"
                    />

                    <path
                      stroke="#6dffb3"
                      d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <span className="block text-white font-black tracking-[0.25em] text-xl">
                  PLATAFORMA TECNOLÓGICA
                </span>

                <span className="text-xs uppercase tracking-[0.35em] text-[#6dffb3]">
                  {t("subtitle")}
                </span>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed max-w-xl text-[15px]">
              {t("description")}
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#ff5f1f] flex items-center justify-center flex-shrink-0">
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
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0L6.343 16.657a8 8 0 1111.314 0z"
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
                <p className="text-white font-semibold mb-1">
                  {t("officeTitle")}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {t("officeAddress")}
                </p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
                {t("securePayments")}
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <div className="bg-white rounded-2xl px-5 py-3 shadow-[0_0_30px_rgba(255,255,255,.06)] border border-white/10">
                  <Image
                    src="/visa.png"
                    alt="Visa"
                    width={70}
                    height={24}
                    className="object-contain h-6 w-auto"
                  />
                </div>

                <div className="bg-white rounded-2xl px-5 py-3 shadow-[0_0_30px_rgba(255,255,255,.06)] border border-white/10">
                  <Image
                    src="/mastercard.png"
                    alt="MasterCard"
                    width={70}
                    height={24}
                    className="object-contain h-6 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#7c3aed]/20 blur-3xl rounded-full" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#6dffb3]/20 bg-[#6dffb3]/10 px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#6dffb3]" />

                <span className="text-[#6dffb3] text-xs uppercase tracking-[0.3em]">
                  {t("contact")}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-2">
                    {t("email")}
                  </p>

                  <a
                    href="mailto:gestion@plataformatecnologica.com"
                    className="text-white hover:text-[#6dffb3] transition-colors text-lg font-medium break-all"
                  >
                    gestion@plataformatecnologica.com
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-2">
                    {t("telephone")}
                  </p>

                  <a
                    href="tel:+525521208017"
                    className="text-white hover:text-[#ff5f1f] transition-colors text-lg font-medium"
                  >
                    +52 55 2120 8017
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-2">
                    {t("location")}
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    {t("locationAddress")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#6dffb3] animate-pulse" />

              <p className="text-gray-500 text-sm">
                {t("copyright")}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#6dffb3] transition-colors"
              >
                {t("privacy")}
              </Link>

              <Link
                href="#"
                className="text-gray-400 hover:text-[#ff5f1f] transition-colors"
              >
                {t("refund")}
              </Link>

              <Link
                href="#"
                className="text-gray-400 hover:text-[#ff4f5e] transition-colors"
              >
                {t("terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}