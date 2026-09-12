import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Matheus Rocha — Designer",
  description: "Portfolio de Matheus Rocha, designer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`h-full ${archivo.variable}`}>
      <body className="min-h-full bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
