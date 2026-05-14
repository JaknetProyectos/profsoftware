import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Plataforma Tecnológica | Desarrollo de Software y Soluciones Digitales",
    template: "%s | Plataforma Tecnológica",
  },
  description:
    "Plataforma Tecnológica es una empresa especializada en desarrollo de software, aplicaciones web, sistemas empresariales, plataformas digitales y soluciones tecnológicas a medida. Creamos software escalable, seguro y de alto rendimiento para empresas y emprendedores.",
  keywords: [
    "desarrollo de software",
    "software a medida",
    "desarrollo web",
    "aplicaciones web",
    "plataformas digitales",
    "sistemas empresariales",
    "soluciones tecnológicas",
    "desarrollo frontend",
    "desarrollo backend",
    "ingeniería de software",
    "software empresarial",
    "tecnología",
    "desarrollo full stack",
    "automatización de procesos",
    "Plataforma Tecnológica",
  ],
  authors: [{ name: "Plataforma Tecnológica" }],
  creator: "Plataforma Tecnológica",
  publisher: "Plataforma Tecnológica",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // No definimos lang aquí porque lo hará el layout dinámico
    <html suppressHydrationWarning={true}>
      <head>

      </head>
      <body>
        {children}
      </body>
    </html>
  );
}