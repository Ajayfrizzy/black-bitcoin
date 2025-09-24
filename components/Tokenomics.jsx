"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Tokenomics = () => {
  return (
    <>
    <motion.div 
      className="max-w-7xl mx-auto text-center md:my-[3rem] md:py-0 py-[4rem]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 
        className="geist font-bold text-[1.5rem] sm:text-[1.8rem] md:text-[2.5rem] px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        BlackBitcoin Tokenomics
      </motion.h2>
      <motion.div 
        className="flex md:flex-row flex-col justify-center items-center mt-[4rem] mb-[3rem] space-grotesk"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="md:block hidden"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <Image src="/asset/pie_chart.svg" alt="pie chart" width={351} height={341} />
        </motion.div>
        <motion.div 
          className="md:hidden block mb-5"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <Image src="/asset/pie_chart.svg" alt="pie chart" width={250} height={250} />
        </motion.div>
        <motion.div 
          className="text-left md:ml-[4rem] md:mx-0 mx-auto px-4 sm:px-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <ul>
            <motion.li 
              className="py-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ x: 5, scale: 1.02 }}
            >
              <span className="bg-[#444444] px-2 rounded-full mr-4"></span>85% -- Market
            </motion.li>
            <motion.li 
              className="py-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ x: 5, scale: 1.02 }}
            >
              <span className="bg-[#FFFDD0] px-2 rounded-full mr-4"></span>5% -- Trading Academy
            </motion.li>
            <motion.li 
              className="py-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ x: 5, scale: 1.02 }}
            >
              <span className="bg-[#FFEE93] px-2 rounded-full mr-4"></span>5% -- Dex Swap
            </motion.li>
            <motion.li 
              className="py-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ x: 5, scale: 1.02 }}
            >
              <span className="bg-[#FFD70F] px-2 rounded-full mr-4"></span>5% -- Wallet Integration
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
    </>
  )
}

export default Tokenomics