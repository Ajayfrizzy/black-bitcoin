import Image from "next/image";

const Howto = () => {
  return (
    <div className="max-w-7xl mx-auto mt-12 text-center text-white flex flex-col items-center py-[4rem] px-4">
      <h3 className="pt-[3rem] md:text-[1.5rem] text-[0.9rem]">
        How To Buy Blackbitcoin
      </h3>
      <div className="space-y-8 w-full max-w-4xl mt-12">
      <div className="bg-[#444444] relative rounded-lg h-[55vh] md:h-[50vh] p-[3rem] md:p-[5rem] flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div className="flex flex-col space-y-4">
            <div className="flex md:flex-col gap-5">
              <span className="w-8 h-8 flex items-center justify-center text-black bg-[#767676] text-[0.7rem] text-[#1C1C1C] rounded-full font-bold">
                1
              </span>
              <span className="font-medium md:text-[1.2rem] text-[0.7rem] flex items-center">
                Click to Copy Contract Address
              </span>
            </div>
            <button className="bg-[#FFFDD0] text-black md:px-6 md:py-2 p-2 rounded-[48px] md:mt-0 mt-3 transition md-text[1.2rem] text-[0.7rem] howtoshadow">
              0x5767HDVHJWI3KHIU2FJ
            </button>
          </div>

          <div className="absolute bottom-0 right-20">
            <img
              src="/asset/howtobuy1.svg"
              alt="Address Icon"
              className="md:h-[250px] h-[200px]"
            />
          </div>
        </div>

        <div className="bg-[#444444] relative rounded-lg h-[55vh] md:h-[50vh] p-[3rem] md:p-[5rem] flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div className="flex flex-col space-y-4">
            <div className="flex md:flex-col gap-5">
              <span className="w-8 h-8 flex items-center justify-center text-black bg-[#767676] text-[0.7rem] text-[#1C1C1C] rounded-full font-bold">
                2
              </span>
              <span className="font-medium md:text-[1.2rem] text-[0.7rem] flex items-center">Open Pancakeswap</span>
            </div>
            <a href='https://www.pancakeswap.finance/' target='_blank' className="bg-[#FFFDD0] text-black md:px-6 md:py-2 p-2 md:mt-0 mt-3 rounded-[48px] transition md-text[1.2rem] text-[0.7rem] howtoshadow">
              Open pancakeswap
            </a>
          </div>
          <div className="absolute bottom-0 right-20">
            <img
              src="/asset/howtobuy2.svg"
              alt="Solana Wallet Icon"
              className="md:h-[250px] h-[200px]"
            />
          </div>
        </div>

        <div className="bg-[#444444] relative rounded-lg h-[55vh] md:h-[50vh] p-[3rem] md:p-[5rem] flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div className="flex flex-col md:space-y-4">
            <div className="flex md:flex-col gap-5">
              <span className="w-8 h-8 flex items-center justify-center text-black bg-[#767676] text-[0.7rem] text-[#1C1C1C] rounded-full font-bold">
                3
              </span>
              <span className="font-medium md:text-[1.2rem] text-[0.7rem] flex items-center">Swap to BlackBitcoin</span>
            </div>
            <a href='https://www.pancakeswap.finance/' target='_blank' className="bg-[#FFFDD0] text-black md:px-6 md:py-2 p-2 mt-3 md:mt-0 rounded-[48px] transition md-text[1.2rem] text-[0.7rem] howtoshadow">
              Open pancakeswap
            </a>
          </div>
          <div className="absolute bottom-0 right-20">
            <img
              src="/asset/howtobuy3.svg"
              alt="Swap Icon"
              className="md:h-[250px] h-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howto;
