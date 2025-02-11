"use client";

import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const TWITTER_URL = "https://x.com/blackbitcoinerz";
const TELEGRAM_URL = "https://t.me/blackbitcoiners";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-white">
      {/* Logo and Brand */}
      <div className="flex items-center gap-2">
        <Image
          src="/asset/navlogotop.svg"
          alt="Nav logo"
          width={50}
          height={50}
          priority
        />
        <span className="md:text-2xl font-semibold sm:text-lg">BlackBitcoin</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 bg-[#444444] rounded-full px-5 py-3 text-lg">
        <Link href="/" className="bg-black text-[#E8E8E8] px-4 py-2 rounded-full hover:bg-[#FDFBD4] hover:text-[#1C1C1C] transition">
            Home
        </Link>
  
        <Link href="/roadmap" className="text-white hover:text-gray-300 transition">
          Roadmap
        </Link>
      </div>

      {/* Social Media Links (Desktop) */}
      <div className="hidden md:flex gap-4 items-center text-2xl">
        <h3 className="text-lg">Join</h3>
        <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="hover:text-blue-300 transition" />
        </a>
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane className="hover:text-blue-300 transition" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu />
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#222] p-6 flex flex-col items-center space-y-4 transition-all duration-300 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/" className="text-white text-lg hover:text-gray-300">
          Home
        </Link>
        <Link href="/roadmap" className="text-white text-lg hover:text-gray-300">
         Roadmap
        </Link>
        <p className="text-white text-[center]">Join</p>
        <div className="flex gap-4 text-white text-2xl">
          <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="hover:text-blue-300 transition" />
          </a>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane className="hover:text-blue-300 transition" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
