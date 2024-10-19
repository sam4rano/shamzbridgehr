"use client";

import logo from "../../../public/images/logos.png";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	
  
	useEffect(() => {
	  const handleScroll = () => {
		if (window.scrollY > 50) {
		  setScrolled(true);
		} else {
		  setScrolled(false);
		}
	  };
  
	  window.addEventListener("scroll", handleScroll);
	  return () => {
		window.removeEventListener("scroll", handleScroll);
	  };
	}, []);
  return (
    <header className={`bg-gray-100 h-16 flex flex-row justify-between align-middle items-center font-nunito font-bold`}>
      <nav className={`mx-auto w-full justify-evenly flex flex-row items-center gap-4 fixed top-0 left-0 right-0 z-50 duration-300 ${
          scrolled ? "text-white bg-slate-100" : " text-white"
        }`}>
        <Link href="/" className="">
          <Image
            className="w-full h-14 sm:h-12 sm:w-24"
            src={logo}
            alt=""
            priority={true}
          />
        </Link>
          <div className=" flex items-center align-middle space-x-2">
            <Link
              href="/about-us"
              className="rounded-md px-3 py-2 text-lg sm:text-sm font-nunito font-bold text-gray-800 hover:bg-gray-700 hover:text-white"
            >
              About us
            </Link>
            {/* <!-- Logged In Only --> */}
            <Link
              href="#services"
              className="rounded-md px-3 py-2 text-lg sm:text-sm font-bold font-nunito text-gray-800 hover:bg-gray-700 hover:text-white"
            >
              services
            </Link>
          </div>
      </nav>

     
    </header>
  );
};

export default Navbar;
