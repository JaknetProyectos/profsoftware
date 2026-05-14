"use client";

import {
  useEffect,
  useState,
  type ComponentType,
} from "react";

import { createPortal } from "react-dom";

import {
  X,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";

import Header from "./Header";
import Footer from "./Footer";

import { useCart } from "@/context/CartContext";

interface ServiceModalProps {
  service: {
    id: string;
    name: string;
    price: string;
    priceNumber: number;
    icon: ComponentType<{
      className?: string;
    }>;
    description: string[];
  };
}

export default function ServiceModal({
  service,
}: ServiceModalProps) {
  const { addItem } = useCart();

  const [isOpen, setIsOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const Icon = service.icon;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleAddToCart = () => {
    addItem({
      id: service.id,
      name: service.name,
      price: service.price,
      priceNumber: service.priceNumber,
      icon: service.icon,
      quantity,
    });

    setIsOpen(false);
  };

  const modalContent = (
    <div
      className={`fixed inset-0 z-[999999] transition-all duration-500 ${
        isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
      />

      {/* Modal */}
      <div
        className={`relative h-screen overflow-y-auto bg-gradient-to-br from-black via-zinc-950 to-zinc-900 transition-transform duration-500 ${
          isOpen
            ? "translate-y-0"
            : "translate-y-full"
        }`}
      >
        {/* macOS Bar */}
        <div className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <Header />

        {/* Content */}
        <section className="px-6 md:px-12 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <div className="w-32 h-32 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-10">
                <Icon className="w-16 h-16 text-white" />
              </div>

              <h1 className="font-syne text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                {service.name}
              </h1>

              <div className="flex items-end gap-3 mb-10">
                <span className="text-6xl font-black text-white">
                  $
                  {service.priceNumber.toLocaleString(
                    "es-MX"
                  )}
                </span>

                <span className="pb-2 text-zinc-400">
                  MXN · IVA incluido
                </span>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-5 mb-10">
                <div className="flex items-center rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <button
                    onClick={() =>
                      setQuantity((prev) =>
                        prev > 1 ? prev - 1 : 1
                      )
                    }
                    className="w-16 h-16 flex items-center justify-center hover:bg-white/10"
                  >
                    <Minus className="w-5 h-5 text-white" />
                  </button>

                  <div className="w-16 text-center text-2xl font-bold text-white">
                    {quantity}
                  </div>

                  <button
                    onClick={() =>
                      setQuantity((prev) => prev + 1)
                    }
                    className="w-16 h-16 flex items-center justify-center hover:bg-white/10"
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="h-16 px-8 rounded-2xl bg-white text-black font-semibold flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition"
                >
                  <ShoppingBag className="w-5 h-5" />

                  Agregar al carrito
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10 backdrop-blur-2xl">
              <h2 className="text-3xl font-bold text-white mb-8 font-syne">
                Description
              </h2>

              <div className="space-y-5">
                {service.description.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex gap-4"
                    >
                      <div className="w-2 h-2 rounded-full bg-white mt-3 shrink-0" />

                      <p className="text-zinc-300 text-lg leading-relaxed">
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-left w-full"
      >
        <h3 className="font-syne font-semibold text-xl text-white leading-snug mb-4 min-h-[56px] hover:text-zinc-300 transition-colors">
          {service.name}
        </h3>
      </button>

      {/* Portal */}
      {mounted &&
        createPortal(
          modalContent,
          document.body
        )}
    </>
  );
}