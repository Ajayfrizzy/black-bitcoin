"use client";

import "@styles/globals.css";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Pancake = "https://pancakeswap.finance";

const Hero = () => {
  return (
    <motion.div 
      className="max-w-7xl mx-auto my-10 flex flex-col-reverse md:flex-row items-center px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Section */}
      <motion.div 
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-[32px] sm:text-[40px] md:text-[60px] text-[#656565] font-bold geist my-5 line"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Made For all <motion.span 
            className="text-[#DADADA] block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Bitcoin Lovers
          </motion.span>
        </motion.h1>
        <motion.p 
          className="w-full md:w-[70%] py-3 text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          A community-driven token built on the Binance Smart Chain aimed at
          rewarding its holders with Native Reflections in Black Bitcoin.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row mt-6 gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        >
          <motion.a
            href="#"
            className="text-[#020202] bg-[#FFD70F] hover:bg-[#2B2B2B] rounded-full px-4 sm:px-6 md:px-[3rem] py-3 flex items-center justify-center transition hover:text-[#DADADA] text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Image
              src="/asset/copy-icon.svg"
              alt="Copy Icon"
              width={25}
              height={25}
              priority
              className="pr-2"
            />
            Copy Address
          </motion.a>
          <motion.a
            href={Pancake}
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey bg-[#2B2B2B] rounded-full px-4 sm:px-6 md:px-[3rem] py-3 flex items-center justify-center hover:bg-[#FFD70F] transition hover:text-[#020202] text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Image
              src="/asset/buy-icon.svg"
              alt="Buy Icon"
              width={25}
              height={25}
              priority
              className="pr-2"
            />
            Buy on Pancakeswap
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        className="flex-1 flex justify-center items-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <motion.div 
          className="relative w-[80%] max-w-[250px] md:max-w-[310px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Glowing Shadow */}
          <motion.div 
            className="absolute inset-0 w-full h-full bg-gray-200 rounded-full blur-3xl opacity-30"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>

          {/* Circular Image */}
          <motion.div 
            className="relative rounded-full overflow-hidden shadow-[0px_0px_30px_rgba(255,255,255,0.1)]"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Image
              src="/asset/black-bitcoin-logo.gif"
              alt="Black Bitcoin GIF"
              width={310}
              height={310}
              priority
              unoptimized
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;