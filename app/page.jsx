import "@styles/globals.css";
import Image from "next/image";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Unique from "../components/Unique";
import Tokenomics from "../components/Tokenomics";
import Howto from "../components/Howto";
import Footer from "../components/Footer";


const page = () => {
  return (
    <>
   <Hero/>
   <div className="bg-[#FFD70F] bg-[url(/asset/first-bg-picture.svg)] bg-cover bg-center bg-no-repeat min-h-[20vh] w-full mt-[6rem]">
    <div className="flex flex-wrap justify-center items-center gap-[1.2rem] sm:gap-[3rem] md:gap-[7rem] max-w-7xl mx-auto py-[2rem] px-4 text-[#000] text-center space-grotesk">
    <div className="flex-shrink-0">
      <p className="font-bold text-[1.1rem] md:text-[1.8rem]">$0.0001</p>
      <span className="font-medium text-[0.8rem] md:text-[1.1rem]">Price (USD)</span>
    </div>

    <div className="hidden sm:block">
      <Image src="/asset/long-line.svg" alt="line" width={2} height={10} />
    </div>

    <div className="flex-shrink-0">
      <p className="font-bold text-[1.1rem] md:text-[1.8rem]">21m</p>
      <span className="font-medium text-[0.8rem] md:text-[1.1rem]">Total Supply</span>
    </div>

    <div className="hidden sm:block">
      <Image src="/asset/long-line.svg" alt="line" width={2} height={10} />
    </div>

    <div className="flex-shrink-0">
      <p className="font-bold text-[1.1rem] md:text-[1.8rem]">5/5</p>
      <span className="font-medium text-[0.8rem] md:text-[1.1rem]">Token Tax</span>
    </div>
   </div>
   </div>

   <div className="max-w-7xl mx-auto text-center my-[3rem] px-4">
    <h2 className="font-bold md:text-[2.5rem] text-[1.9rem] space-grotesk">Our Partners</h2>
    <div className="overflow-hidden mt-8">
      <div className="flex animate-scroll gap-8 items-center justify-center md:justify-between">
          <Image src="/asset/partner_1.svg" alt="Partner 1" width={150} height={150} className="flex-shrink-0 w-[120px] h-[120px] md:w-[200px] md:h-[200px]"/>
          <Image src="/asset/partner_2.svg" alt="Partner 2" width={150} height={150} className="flex-shrink-0 w-[120px] h-[120px] md:w-[200px] md:h-[200px]"/>
          <Image src="/asset/partner_3.svg" alt="Partner 3" width={150} height={150} className="flex-shrink-0 w-[120px] h-[120px] md:w-[200px] md:h-[200px]"/>
          <Image src="/asset/partner_4.svg" alt="Partner 4" width={150} height={115} className="flex-shrink-0 w-[120px] h-[92px] md:w-[200px] md:h-[150px]"/>
      </div>
    </div>
   </div>
   <Benefits/>
   <Unique/>
   <Tokenomics/>
   <Howto/>
   <Footer/>
    </>
  )
}

export default page