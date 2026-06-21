import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dosso Djeneba Samira - Développeuse web et mobile",
  description: "Portfolio de Dosso Djeneba Samira, développeuse web et mobile junior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
