"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Unique = () => {
  return (
    <>
    {/* For Desktop */}
    <div className="text-[#E8E8E8] bg-[#444444] bg-[url(/asset/first-bg-picture.svg)] bg-cover bg-center bg-no-repeat w-full space-grotesk">
      <motion.div 
        className="max-w-7xl mx-auto text-center md:pt-[4rem] pt-[2rem] pb-[3rem]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="font-bold md:text-[2.5rem] text-[26px] pb-[6rem]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Unique  Ecosystem
        </motion.h2>
        <motion.div 
          className="md:relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >

          <motion.div 
            className="md:absolute md:top-[40%] md:left-[5%] md:block hidden"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <Image src="/asset/unique_line.svg" alt="Unique Long Line" width={1} height={0} className="w-[100%]"/>
          </motion.div>

          <div className="flex flex-col md:flex-row md:justify-between items-center md:px-[3rem] font-bold">
          <motion.div 
            className="md:z-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Image src="/asset/unique_1.svg" alt="Unique 1" width={150} height={150} />
            <p className="pt-3">Community</p>
          </motion.div>

            {/* For Mobile */}
          <motion.div 
            className="block md:hidden py-5"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image src="/asset/sm_line.svg" alt="Small line" width={10} height={10} />
          </motion.div>

          <motion.div 
            className="md:z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/asset/black-bitcoin-logo.gif" alt="Unique 2" width={150} height={150} unoptimized />
            </motion.div>
            <p className="pt-3">BlackBitcoin</p>
          </motion.div>

            {/* For Mobile */}
          <motion.div 
            className="block md:hidden py-5"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Image src="/asset/sm_line.svg" alt="Small line" width={10} height={10} />
          </motion.div>

          <motion.div 
            className="md:z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Image src="/asset/unique_3.svg" alt="Unique 3" width={150} height={150} />
            <p className="pt-3">Contributors</p>
          </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </div>
    </>
  )
}

export default Unique