import MUIThemeProvider from "@/components/Theme/MUIThemeProvider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Boilerplate",
  description: "UI Reusable components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MUIThemeProvider>{children}</MUIThemeProvider>
      </body>
    </html>
  );
}
