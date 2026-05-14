"use client";

import { useLocale, useTranslations } from "next-intl";
import { useCart } from "@/context/CartContext";
import { servicesEnglish, servicesSpanish } from "@/lib/services";
import { LucideIcon } from "lucide-react";
import ServiceModal from "./ServiceModal";

type Service = {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  icon: LucideIcon;
  description: string[];
};

export default function Services() {
  const t = useTranslations("servicesSection");
  const locale = useLocale();

  const services: Service[] =
    locale == "es" ? servicesSpanish : servicesEnglish;

  const { addItem } = useCart();

  const handleAddToCart = (service: Service) => {
    addItem({
      id: service.id,
      name: service.name,
      price: service.price,
      priceNumber: service.priceNumber,
      icon: service.icon,
    });
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#111118] py-20 md:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-fuchsia-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lime-400/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">
              <span className="text-sm font-semibold text-gray-300">
                {t("badge")}
              </span>
            </div>

            <h2 className="font-syne font-semibold text-4xl md:text-5xl text-white leading-tight">
              {t("title")}
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const accents = [
              "from-fuchsia-500 to-violet-600",
              "from-orange-400 to-red-500",
              "from-lime-400 to-emerald-500",
              "from-cyan-400 to-blue-500",
            ];

            const accent = accents[index % accents.length];

            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                {/* Top Accent */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`}
                />

                {/* Window Controls */}
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-orange-400" />
                  <span className="w-3 h-3 rounded-full bg-lime-400" />
                </div>

                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${accent} p-[1px] mb-6 shadow-[0_0_40px_rgba(168,85,247,0.15)]`}
                >
                  <div className="w-full h-full rounded-3xl bg-[#f5f5f7] flex items-center justify-center">
                    <Icon className="w-12 h-12 text-[#1f1f25] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>

                {/* Content  debe clickear aquí para soltar el modal page simulator */}
                
                <ServiceModal service={service} />

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-sm text-gray-400">
                      MXN$
                    </span>

                    <span className="text-3xl font-bold text-white">
                      {service.price}
                    </span>
                  </div>

                  <span className="text-xs text-gray-500 mt-1 block">
                    {t("vatIncluded")}
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleAddToCart(service)}
                  className={`w-full bg-gradient-to-r ${accent} text-white py-3.5 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] shadow-lg`}
                >
                  {t("addToCart")}
                </button>

                {/* Glow */}
                <div
                  className={`absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-3xl`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}