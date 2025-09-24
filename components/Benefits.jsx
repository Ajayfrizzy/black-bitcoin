"use client";

import Link from "next/link";
import "@styles/globals.css";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <motion.div 
      className="max-w-7xl mx-auto flex flex-col md:flex-row text-[#A6A6A6] md:pb-[3rem] space-grotesk"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* First Section */}
      <motion.div 
        className="md:w-[45%] w-full md:mb-0 mb-[3rem] px-4 sm:px-[2.5rem] text-center md:text-left flex flex-col"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="geist font-bold text-[18px] sm:text-[20px] md:text-[30px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          What is Black Bitcoin?
        </motion.h2>
        <motion.p 
          className="py-[1rem]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Black Bitcoin is the first and younger brother of Bitcoin on the block.
          It's a memecoin made for all Bitcoin lovers and those who missed Bitcoin.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          $BBTC aims to provide seamless transactions using its Dexswap,
          increase hodlers' portfolios through its trading academy, and a
          sustainable tokenomics model for the long term.
        </motion.p>
      </motion.div>

      {/* Second Section with Full Height Background */}
      <motion.div 
        className="md:w-[45%] w-full px-[3rem] text-center md:text-left md:bg-[#1C1C1C] bg-[#020202] md:py-0 py-[2rem] flex flex-col flex-grow"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="geist font-bold md:text-[30px] text-[20px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Benefits of Premium <span className="block">Black Bitcoin Holder?</span>
        </motion.h2>

        <motion.ul 
          className="my-[1rem] space-y-2 flex-grow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.li 
            className="flex items-start gap-3 leading-tight"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-[24px] h-[24px] flex-shrink-0">
              <img src="/asset/star.svg" alt="Star" className="bg-[#FFD70F] p-1 rounded-full w-full h-full" />
            </div>
            <span>Premium holders are investors holding 1% supply of $BBTC</span>
          </motion.li>
          <motion.li 
            className="flex items-start gap-3 leading-tight"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-[24px] h-[24px] flex-shrink-0">
              <img src="/asset/star.svg" alt="Star" className="bg-[#FFD70F] p-1 rounded-full w-full h-full" />
            </div>
            <span>Access to trading academy and mentorship</span>
          </motion.li>
          <motion.li 
            className="flex items-start gap-3 leading-tight"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-[24px] h-[24px] flex-shrink-0">
              <img src="/asset/star.svg" alt="Star" className="bg-[#FFD70F] p-1 rounded-full w-full h-full" />
            </div>
            <span>First users of DexSwap and Wallet</span>
          </motion.li>
          <motion.li 
            className="flex items-start gap-3 leading-tight"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="w-[24px] h-[24px] flex-shrink-0">
              <img src="/asset/star.svg" alt="Star" className="bg-[#FFD70F] p-1 rounded-full w-full h-full" />
            </div>
            <span>1 month (20%) Dexswap and wallet validators' fees split with team.</span>
          </motion.li>
        </motion.ul>

        {/* Updated Button Section */}
        <motion.div 
          className="py-[1rem] flex justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-[50%]"
          >
            <Link
              href="/roadmap"
              className="block w-full py-[0.8rem] px-[1.2rem] bg-[#FFD70F] font-bold text-[0.7rem] text-[#000] rounded-full text-center hover:text-[#A6A6A6] hover:bg-[#2B2B2B] transition">
              Read Whitepaper
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Benefits;