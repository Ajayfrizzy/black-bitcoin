"use client";

import { useState } from "react";
import Image from "next/image";

const Tokenomics = () => {
  const [activeImage, setActiveImage] = useState(null);

  const tokenomicsData = [
    { id: 1, src: "/asset/tokenomics1.svg" },
    { id: 2, src: "/asset/tokenomics2.svg" },
    { id: 3, src: "/asset/tokenomics3.svg" },
    { id: 4, src: "/asset/tokenomics4.svg" },
  ];

  return (
    <div className="text-center max-w-7xl mx-auto mt-12 mb-12"> <h3 className="md:text-2xl text-[1rem]">BlackBitcoin Tokenomics</h3>

      <div className="grid grid-cols-2 mt-20 gap-10 px-[2rem] relative">
        {tokenomicsData.map((item) => (
          <div
            key={item.id}
            className={`relative h-[15vh] md:h-[80vh] transition-transform duration-500 ease-in-out ${
              activeImage === item.id ? "scale-110 z-20" : "hover:scale-105"
            }`}
            onClick={() => setActiveImage(item.id === activeImage ? null : item.id)}
          >
            <Image
              alt={`Tokenomics ${item.id}`}
              loading="lazy"
              width={300}
              height={300}
              decoding="async"
              className="absolute top-0 left-1/2 transform -translate-x-1/2"
              style={{ color: "transparent" }}
              src={item.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
