import "../styles/globals.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SubMenu from "./components/SubMenu/SubMenu";
import { ProductProvider } from "./context/ProductContext";

export const metadata = {
  title: "Online Store for Fashion, Jewelry & Electronics | metta muse",
  description:
    "Discover stylish fashion, elegant jewelry, and the latest electronics — all in one place at metta muse. Curated collections from global artisans and top brands.",
  viewport: "width=device-width, initial-scale=1",
  keywords: [
    "online shopping",
    "fashion store",
    "jewelry online",
    "electronics gadgets",
    "men's clothing",
    "women's fashion",
    "smart gadgets",
    "metta muse shop",
    "affordable fashion",
    "trendy accessories",
  ].join(", "),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProductProvider>
          <Navbar />
          <SubMenu current="Home" active="Shop" />
          {children}
          <Footer />
        </ProductProvider>
      </body>
    </html>
  );
}
