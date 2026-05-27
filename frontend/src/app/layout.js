import "./globals.css";

import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Kasa",
  description: "Property booking platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Menu />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
