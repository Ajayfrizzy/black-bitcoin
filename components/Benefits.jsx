import Link from "next/link";
import "@styles/globals.css";

const Benefits = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-[#A6A6A6] md:pb-[3rem] space-grotesk">
      {/* First Section */}
      <div className="md:w-[45%] w-full md:mb-0 mb-[3rem] px-[2.5rem] text-center md:text-left flex flex-col">
        <h2 className="geist font-bold text-[20px] md:text-[30px]">What is Black Bitcoin?</h2>
        <p className="py-[1rem]">
          Black Bitcoin is the first and younger brother of Bitcoin on the block.
          It’s a memecoin made for all Bitcoin lovers and those who missed Bitcoin.
        </p>
        <p>
          $BBTC aims to provide seamless transactions using its Dexswap,
          increase hodlers’ portfolios through its trading academy, and a
          sustainable tokenomics model for the long term.
        </p>
      </div>

      {/* Second Section with Full Height Background */}
      <div className="md:w-[45%] w-full px-[3rem] text-center md:text-left md:bg-[#1C1C1C] bg-[#020202] md:py-0 py-[2rem] flex flex-col flex-grow">
        <h2 className="geist font-bold md:text-[30px] text-[20px]">
          Benefits of Premium <span className="block">Black Bitcoin Holder?</span>
        </h2>

        <ul className="my-[1rem] space-y-2 flex-grow">
          <li className="flex items-start gap-3 leading-tight">
            <div className="w-[24px] h-[24px] flex-shrink-0">
              <img src="/asset/star.svg" alt="Star" className="bg-[#FFD70F] p-1 rounded-full w-full h-full" />
            </div>
            <span>Premium holders are investors holding 1% supply of $BBTC</span>
          </li>
          <li className="flex items-start gap-3 leading-tight">
            <div className="w-[24px] h-[24px] flex-shrink-0">
              <img src="/asset/star.svg" alt="Star" className="bg-[#FFD70F] p-1 rounded-full w-full h-full" />
            </div>
            <span>Access to trading academy and mentorship</span>
          </li>
          <li className="flex items-start gap-3 leading-tight">
            <div className="w-[24px] h-[24px] flex-shrink-0">
              <img src="/asset/star.svg" alt="Star" className="bg-[#FFD70F] p-1 rounded-full w-full h-full" />
            </div>
            <span>First users of DexSwap and Wallet</span>
          </li>
          <li className="flex items-start gap-3 leading-tight">
            <div className="w-[24px] h-[24px] flex-shrink-0">
              <img src="/asset/star.svg" alt="Star" className="bg-[#FFD70F] p-1 rounded-full w-full h-full" />
            </div>
            <span>1 month (20%) Dexswap and wallet validators’ fees split with team.</span>
          </li>
        </ul>

        {/* Updated Button Section */}
        <div className="py-[1rem] flex justify-center md:justify-start">
          <Link
            href="/roadmap"
            className="block w-full md:w-[50%] py-[0.8rem] px-[1.2rem] bg-[#FFD70F] font-bold text-[0.7rem] text-[#000] rounded-full text-center hover:text-[#A6A6A6] hover:bg-[#2B2B2B] transition">
            Read Whitepaper
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
