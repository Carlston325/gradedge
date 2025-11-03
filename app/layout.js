import {
  Geist,
  Geist_Mono,
  Lato,
  Montserrat,
  Montserrat_Underline,
} from "next/font/google";
import "@/styles/global.css";
import Header from "@/components/layout/Header.js";
import Footer from "@/components/layout/Footer.js";

const montserratUnderline = Montserrat_Underline({
  variable: "--font-montserrat-underline",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subset: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gradedge",
  description: "CV/Cover Letter & other employment services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${montserratUnderline.variable} ${montserrat.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
