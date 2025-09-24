"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Howto = () => {
  return (
    <>
      <div className="bg-[#141414] text-[#ABABA8] md:py-[3rem] py-[1rem]">
        <motion.div 
          className="max-w-7xl mx-auto my-[3rem] p-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="font-bold md:text-[2.5rem] text-[1.9rem] text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            How To Buy Blackbitcoin?
          </motion.h2>
          
          <motion.div 
            className="flex md:flex-row flex-col gap-5 mt-[3rem]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Step 1 */}
            <motion.div 
              className="flex-1 bg-[#444444] rounded-xl md:w-full w-[80%] md:mx-0 mx-auto md:px-[1.5rem] md:py-[3rem] p-[1.5rem]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.h3 
                className="text-[1rem]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="bg-[#767676] text-[#1C1C1C] px-2 rounded-full shadow-[2.57px_3.22px_0_#1E1E1E] mr-3">
                  1
                </span>
                Deposit BNB
              </motion.h3>
              <motion.p 
                className="text-[#fff] text-[12px] ml-8 mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Buy $BNB from your favorite exchange
              </motion.p>
              <motion.div 
                className="bg-[#353535] rounded-2xl w-[70%] mx-auto pt-4 flex flex-col items-center justify-center md:hover:bg-[#FFD70F] transition"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-[#141414] rounded-xl md:p-[3rem] p-[1.3rem] flex items-center justify-center">
                  <Image
                    src="/asset/howto_1.svg"
                    alt="Picture 1"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text-center my-4">
                  <Link
                    href="#"
                    className="bg-[#2B2B2B] text-[12px] rounded-full md:px-4 py-2 px-3"
                  >
                    Open Exchange
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="flex-1 bg-[#444444] rounded-xl md:w-full w-[80%] md:mx-0 mx-auto md:px-[1.5rem] md:py-[3rem] p-[1.5rem]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.h3 
                className="text-[1rem]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="bg-[#767676] text-[#1C1C1C] px-2 rounded-full shadow-[2.57px_3.22px_0_#1E1E1E] mr-3">
                  2
                </span>
                Connect to Dex
              </motion.h3>
              <motion.p 
                className="text-[#fff] text-[12px] ml-8 mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Open any DEX of your choice, eg Pancake Swap and connect to your wallet
              </motion.p>
              <motion.div 
                className="bg-[#353535] rounded-2xl w-[70%] mx-auto pt-4 flex flex-col items-center justify-center md:hover:bg-[#FFD70F] transition"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-[#141414] rounded-xl md:p-[3rem] p-[1.3rem] flex items-center justify-center">
                  <Image
                    src="/asset/howto_2.svg"
                    alt="Picture 2"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text-center my-4">
                  <Link
                    href="#"
                    className="bg-[#2B2B2B] text-[12px] rounded-full md:px-4 py-2 px-3"
                  >
                    Open PancakeSwap
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="flex-1 bg-[#444444] rounded-xl md:w-full w-[80%] md:mx-0 mx-auto md:px-[1.5rem] md:py-[3rem] p-[1.5rem]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.h3 
                className="text-[1rem]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <span className="bg-[#767676] text-[#1C1C1C] px-2 rounded-full shadow-[2.57px_3.22px_0_#1E1E1E] mr-3">
                  3
                </span>
                Buy and Swap
              </motion.h3>
              <motion.p 
                className="text-[#fff] text-[12px] ml-8 mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Swap BNB to Black Bitcoin.
              </motion.p>
              <motion.div 
                className="bg-[#353535] rounded-2xl w-[70%] mx-auto pt-4 flex flex-col items-center justify-center md:hover:bg-[#FFD70F] transition"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-[#141414] rounded-xl md:p-[3rem] p-[1.3rem] flex items-center justify-center relative">
                  {/* Arrows */}
                  <Image
                    src="/asset/howto_arrow.svg"
                    alt="Arrow Left"
                    width={10}
                    height={10}
                    className="absolute top-[10%] left-[30%] z-0"
                  />
                  <Image
                    src="/asset/howto_arrow.svg"
                    alt="Arrow Right"
                    width={10}
                    height={10}
                    className="absolute top-[10%] right-[30%] z-0"
                  />

                  {/* Bitcoin Logo */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] left-1/2 transform -translate-x-1/2 z-5"
                  >
                    <Image
                      src="/asset/black-bitcoin-logo.gif"
                      alt="Bitcoin Logo"
                      width={80}
                      height={80}
                      unoptimized
                    />
                  </motion.div>

                  {/* Wallet */}
                  <Image
                    src="/asset/howto_wallet.svg"
                    alt="Wallet"
                    width={100}
                    height={100}
                    className="pt-[3rem] z-10"
                  />
                </div>

                <div className="text-center my-4">
                  <Link
                    href="#"
                    className="bg-[#2B2B2B] text-[12px] rounded-full md:px-4 py-2 px-3"
                  >
                    Swap to $BBitcoin
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Howto;