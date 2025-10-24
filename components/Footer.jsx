"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const TWITTER_URL = "http://X.com/blackbitcoinerz";
const TELEGRAM_URL = "https://t.me/blackbitcoiners";

const Footer = () => {
  return (
      <>
      <footer className="bg-[url(/asset/footer-bg.svg)] bg-cover bg-center bg-no-repeat">
      <motion.section 
        className="max-w-7xl mx-auto py-[6rem] px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join Our Global Community
        </motion.h2>
        <motion.div 
          className="flex justify-center gap-3 mt-4 text-[#D4D4D4]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={TWITTER_URL} target="_blank" className="bg-[#2B2B2B] px-4 sm:px-6 py-2 rounded-full hover:bg-[#1C1C1C] hover:text-[#e8e8e8] transition text-sm sm:text-base">Twitter</Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={TELEGRAM_URL} target="_blank" className="bg-[#2B2B2B] px-4 sm:px-6 py-2 rounded-full hover:bg-[#1C1C1C] hover:text-[#e8e8e8] transition text-sm sm:text-base">Telegram</Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

    </footer>
      <motion.p 
        className="text-center pt-[4rem] pb-[2rem] px-[2rem]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
      >
        @Copywrite 2025 - BlackBitcoin All right reserved
      </motion.p>
      </>
  );
};

export default Footer;
