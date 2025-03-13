import Image from "next/image"

const Tokenomics = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto text-center md:my-[3rem] md:py-0 py-[4rem]">
      <h2 className="geist font-bold md:text-[2.5rem] text-[2rem]">BlackBitcoin Tokenomics</h2>
      <div className="flex md:flex-row flex-col justify-center items-center mt-[4rem] mb-[3rem] space-grotesk">
        <div>
          <Image src="/asset/pie_chart.svg" alt="pie chart" width={351} height={341} />
        </div>
        <div className="text-left md:ml-[4rem] md:mx-0 mx-auto">
          <ul>
            <li className="py-3"><span className="bg-[#444444] px-2 rounded-full mr-4"></span>85% -- Market</li>
            <li className="py-3"><span className="bg-[#FFFDD0] px-2 rounded-full mr-4"></span>5% -- Trading Academy</li>
            <li className="py-3"><span className="bg-[#FFEE93] px-2 rounded-full mr-4"></span>5% -- Dex Swap</li>
            <li className="py-3"><span className="bg-[#FFD70F] px-2 rounded-full mr-4"></span>5% -- Wallet Integration</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tokenomics