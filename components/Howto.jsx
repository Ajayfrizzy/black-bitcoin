import Image from "next/image";
import Link from "next/link";
// import "@styles/globals.css";

const Howto = () => {
  return (
    <>
      <div className="bg-[#141414] text-[#ABABA8] py-[3rem]">
        <div className="max-w-7xl mx-auto my-[3rem] p-6">
          <h2 className="font-bold text-[2.5rem] text-center">
            How To Buy Blackbitcoin?
          </h2>
          <div className="flex gap-5 mt-[3rem]">
            <div className="flex-1 bg-[#444444] rounded-xl px-[1.5rem] py-[3rem]">
              <h3 className="text-[1rem]">
                <span className="bg-[#767676] text-[#1C1C1C] px-2 rounded-full shadow-[2.57px_3.22px_0_#1E1E1E] mr-3">
                  1
                </span>
                Deposit BNB
              </h3>
              <p className="text-[#fff] text-[12px] ml-9 mb-6">
                Buy $BNB from your favorite exchange
              </p>
              <div className="bg-[#353535] rounded-2xl px-1 pt-4 w-[70%] mx-auto flex flex-col items-center justify-center md:hover:bg-[#FFD70F] transition">
                <div className="bg-[#141414] rounded-xl p-[3rem] flex items-center justify-center">
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
                    className="bg-[#2B2B2B] text-[12px] rounded-full px-4 py-2"
                  >
                    Open Exchange
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-[#444444] rounded-xl px-[1.5rem] py-[3rem]">
              <h3 className="text-[1rem]">
                <span className="bg-[#767676] text-[#1C1C1C] px-1 rounded-full shadow-[2.57px_3.22px_0_#1E1E1E] mr-3">
                  2
                </span>
                Connect to Dex
              </h3>
              <p className="text-[#fff] text-[12px] ml-9 mb-6">
                Open any DEX of your choice, eg Pancake Swap and connect to your
                wallet
              </p>
              <div className="bg-[#353535] rounded-2xl px-1 pt-4 w-[70%] mx-auto flex flex-col items-center justify-center md:hover:bg-[#FFD70F] transition">
                <div className="bg-[#141414] rounded-xl p-[3rem] flex items-center justify-center">
                  <Image
                    src="/asset/howto_2.svg"
                    alt="Picture 1"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text-center my-4">
                  <Link
                    href="#"
                    className="bg-[#2B2B2B] text-[12px] rounded-full px-4 py-2"
                  >
                    Open PancakeSwap
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-[#444444] rounded-xl px-[1.5rem] py-[3rem]">
              <h3 className="text-[1rem]">
                <span className="bg-[#767676] text-[#1C1C1C] px-1 rounded-full shadow-[2.57px_3.22px_0_#1E1E1E] mr-3">
                  3
                </span>
                Swap $BBitcoin
              </h3>
              <p className="text-[#fff] text-[12px] ml-9 mb-6">
                Pick the amount the buy amount and swap $BNB to $BBitcoin
              </p>
              <div className="bg-[#353535] rounded-2xl px-1 pt-4 w-[70%] mx-auto flex flex-col items-center justify-center md:hover:bg-[#FFD70F] transition">
                <div className="bg-[#141414] rounded-xl p-[3rem] relative flex items-center justify-center">
                  {/* Arrows (Behind everything) */}
                  <Image
                    src="/asset/middle_arrow.svg"
                    alt="Arrow Top"
                    width={10}
                    height={10}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0"
                  />
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

                  {/* Bitcoin Logo (Above Wallet, Below Arrows) */}
                  <Image
                    src="/asset/black-bitcoin-logo.gif"
                    alt="Bitcoin Logo"
                    width={80}
                    height={80}
                    className="absolute top-[20%] left-1/2 transform -translate-x-1/2 z-5"
                  />

                  {/* Wallet (Behind Bitcoin Logo) */}
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
                    className="bg-[#2B2B2B] text-[12px] rounded-full px-4 py-2"
                  >
                    Swap to $BBitcoin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Howto;
