import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matheus Rocha — Designer",
  description: "Portfolio de Matheus Rocha, designer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
