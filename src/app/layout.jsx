
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Karla, Nunito } from "next/font/google";
 
const nunito = Nunito({
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  subsets: ["latin"],
});

const karla = Karla({
  weight: ["400", "500", "600", "700"],
  variable: "--font-Karla",
  subsets: ["latin"],
});


export const metadata = {
  title: "Shamzbridge consult",
  description: "All your software solutions in one place",
  image: "./favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${karla.variable}`}>
        <Navbar />
        
        <main className="mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
