"use client";

import "@styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const TWITTER_URL = "https://x.com/blackbitcoinerz";
const TELEGRAM_URL = "https://t.me/blackbitcoiners";
const PANKCAKE = "https://pancakeswap.finance";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-white">
      {/* Logo and Brand */}
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image
            src="/asset/navtoplogo.svg"
            alt="Nav logo"
            width={30}
            height={30}
            priority
          />
          <span className="text-[24px] geist">BBitcoin</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center gap-4 rounded-full px-5 py-2 text-grey text-[14.65px] space-grotesk">
        <Link href="/roadmap" className="hover:text-blue-300 transition">
          Whitepaper
        </Link>
        <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition px-[4rem]">
          X(Twitter)
        </a>
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
          Telegram
        </a>
      </div>

      {/* Buy Link - Only for Desktop */}
      <div className="hidden md:block text-grey text-[14.65px] space-grotesk">
        <a href={PANKCAKE} target="_blank" rel="noopener noreferrer" className="text-grey-400 hover:bg-yellow-500 hover:text-black transition px-[3rem] py-2 rounded-full bg-black transition">
          Buy
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </button>

      {/* Full-Screen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-40" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-6 right-1 h-75 w-[75%] bg-[#2F2F2F] p-6 flex flex-col items-center space-y-6 transition-transform duration-300 ease-in-out rounded-4xl z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close Button */}
        <button className="absolute top-3 right-6 text-white text-3xl" onClick={() => setIsOpen(false)}>
          ✕
        </button>

        {/* Menu Links */}
        <div className="bg-[#444444] w-full rounded-3xl p-4 flex flex-col items-center gap-4 mt-6">
        <a href={PANKCAKE} target="_blank" rel="noopener noreferrer" className="text-white text-center py-3 px-[5rem] bg-black rounded-full hover:text-blue-300 transition">
          Buy
        </a>
        <Link href="/roadmap" className="hover:text-gray-300">
          Whitepaper
        </Link>
        </div>
        <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
          X(Twitter)
        </a>
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
          Telegram
        </a>
      </div>
    </nav>
  );
};

export default Nav;
