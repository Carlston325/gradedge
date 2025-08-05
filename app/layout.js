import { Geist, Geist_Mono, Lato, Merriweather_Sans } from "next/font/google";
import "./global.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

const merriweather = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400"],
  subsets: ["latin"],
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
        className={`${merriweather.variable} ${lato.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
