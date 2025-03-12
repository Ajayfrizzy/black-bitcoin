import Link from "next/link";


const Benefits = () => {
  return (
    <div className="max-w-7xl mx-auto mt-[3rem] mb-[5rem] flex text-[#A6A6A6] space-grotesk">
      <div className="w-[45%] px-[2.5rem]">
        <h2 className="geist font-bold text-[30px]">What is Black Bitcoin?</h2>
        <p className="py-[1rem]">
          Black Bitcoin is the first and younger brother of bitcoin on the
          block. It a memecoin made for all Bitcoin lovers and all those who
          missed Bitcoin.
        </p>
        <p>
          $BBTC aims to provide seamless transactions using its Dexswap.
          increase hodlers’ portfolio through its trading academy, and a
          sustainable tokenomics model for long term
        </p>
      </div>
      <div className="w-[45%] px-[3rem]">
        <h2 className="geist font-bold text-[30px]">Benefits of Premium <span className="block">Black Bitcoin Holder?</span></h2>
        <ul className="my-[1rem]">
          <li className="flex items-center"><img src="/asset/star.svg" alt="Star" className="bg-[yellow] p-1 rounded-full w-[4%] h-[5%] mr-2"/>Premium holders are investors holding 1% supply of $BBTC</li>
          <li className="flex items-center my-2"><img src="/asset/star.svg" alt="Star" className="bg-[yellow] p-1 rounded-full w-[4%] h-[5%] mr-2"/>Access to trading academy and mentorship</li>
          <li className="flex items-center my-2"><img src="/asset/star.svg" alt="Star" className="bg-[yellow] p-1 rounded-full w-[4%] h-[5%] mr-2"/>First users of DexSwap and Wallet</li>
          <li className="flex items-center p-0"><img src="/asset/star.svg" alt="Star" className="bg-[yellow] p-1 rounded-full w-[4%] h-[5%] mr-2"/>
            1 month (20%) Dexswap and wallet validators’ fees split with team.
          </li>
        </ul>
        <div className="py-[1rem]">
          <Link
            href="/roadmap"
            className="py-[0.8rem] px-[1.2rem] bg-[yellow] font-bold text-[0.7rem] text-[#000] rounded-full hover:text-[#A6A6A6] hover:bg-[#2B2B2B] transition">
            Read Whitepaper
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
