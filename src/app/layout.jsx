import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shamzbridge consult",
  description: "All your software solutions in one place",
  image: "./favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        <main className="mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
