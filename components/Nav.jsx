"use client";

import "@styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTelegram } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TWITTER_URL = "https://x.com/blackbitcoinerz";
const TELEGRAM_URL = "https://t.me/blackbitcoiners";
const PANKCAKE = "https://pancakeswap.finance";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="relative max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo and Brand */}
      <Link href="/">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="/asset/navtoplogo.svg"
              alt="Nav logo"
              width={30}
              height={30}
              priority
            />
          </motion.div>
          <span className="text-[1.2rem] geist">Blackbitcoin</span>
        </motion.div>
      </Link>

      {/* Desktop Navigation */}
      <motion.div 
        className="hidden md:flex justify-between items-center gap-4 rounded-full px-5 py-2 text-grey text-[14.65px] space-grotesk"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/roadmap" className="hover:text-blue-300 transition">
            Whitepaper
          </Link>
        </motion.div>
        <motion.a 
          href={TWITTER_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-300 transition px-[4rem]"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          X(Twitter)
        </motion.a>
        <motion.a 
          href={TELEGRAM_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-300 transition"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Telegram
        </motion.a>
      </motion.div>

      {/* Buy Link - Only for Desktop */}
      <motion.div 
        className="hidden md:block text-grey text-[14.65px] space-grotesk"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <motion.a 
          href={PANKCAKE} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-grey-400 hover:bg-yellow-500 hover:text-black px-[3rem] py-2 rounded-full bg-black transition"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Buy
        </motion.a>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button 
        className="md:hidden text-2xl" 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <GiHamburgerMenu />
      </motion.button>

      {/* Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-40" 
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed top-6 right-1 h-75 w-[75%] bg-[#2F2F2F] p-6 flex flex-col items-center space-y-6 rounded-4xl z-50"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
            <motion.button 
              className="absolute top-3 right-6 text-white text-3xl" 
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2 }}
            >
              ✕
            </motion.button>

            {/* Menu Links */}
            <motion.div 
              className="bg-[#444444] w-full rounded-3xl p-4 flex flex-col items-center gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.a 
                href={PANKCAKE} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white text-center py-3 px-[5rem] bg-black rounded-full hover:text-blue-300 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/roadmap" className="hover:text-gray-300">
                  Whitepaper
                </Link>
              </motion.div>
            </motion.div>
            <motion.a 
              href={TWITTER_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-300 transition flex items-center gap-2"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FaXTwitter />X(Twitter)
            </motion.a>
            <motion.a 
              href={TELEGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-300 transition flex items-center gap-2"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <LiaTelegram />Telegram
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
