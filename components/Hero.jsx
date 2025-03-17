import "@styles/globals.css";
import Image from "next/image";

const Pancake = "https://pancakeswap.finance";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 flex flex-col-reverse md:flex-row items-center px-5">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-[40px] md:text-[60px] text-[#656565] font-bold geist my-5 line md:w-[80%] sm:w-[100%]">
          Made For all <span className="text-[#DADADA]">Bitcoin Lovers</span>
        </h1>
        <p className="w-full md:w-[70%] py-3">
          A community-driven token built on the Binance Smart Chain aimed at
          rewarding its holders with Native Reflections in Black Bitcoin.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row mt-6 gap-4">
          <a
            href="#"
            className="text-[#020202] bg-[#FFD70F] hover:bg-[#2B2B2B] rounded-full px-6 md:px-[3rem] py-3 flex items-center justify-center transition hover:text-[#DADADA]"
          >
            <Image
              src="/asset/copy-icon.svg"
              alt="Buy Icon"
              width={25}
              height={25}
              priority
              className="pr-2"
            />
            Copy Address
          </a>
          <a
            href={Pancake}
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey bg-[#2B2B2B] rounded-full px-6 md:px-[3rem] py-3 flex items-center justify-center hover:bg-[#FFD70F] transition hover:text-[#020202]"
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
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <div className="relative w-[80%] max-w-[250px] md:max-w-[310px]">
          {/* Glowing Shadow */}
          <div className="absolute inset-0 w-full h-full bg-gray-200 rounded-full blur-3xl opacity-30"></div>

          {/* Circular Image */}
          <div className="relative rounded-full overflow-hidden shadow-[0px_0px_30px_rgba(255,255,255,0.1)]">
            <Image
              src="/asset/black-bitcoin-logo.gif"
              alt="Black Bitcoin GIF"
              width={310}
              height={310}
              priority
              unoptimized
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
