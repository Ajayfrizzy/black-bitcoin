import "@styles/globals.css"
import Image from "next/image"

const Hero = () => {
  return (
    <>
    <div className="bg-black text-white rounded-lg text-center p-8 m-2 md:mt-8 hero max-w-7xl md:mx-auto">
        <div className="flex justify-center mt-4 mb-4">
            <Image src="asset/biggerlogo.svg" alt="Bigger Logo" width={350} height={350} className="md:w-[30%] w-[50%]"/>
        </div>
        <h1 className="md:w-[60%] mx-auto py-[2rem] px-[3rem] text-[2.5rem] text-[#A6A6A6]">Made For all Bitcoin Lovers</h1>
        <a href="#" className="bg-[#FDFBD4] text-black rounded-full mt-4 mb-3 inline-block text-xl py-[1.2rem] md:py-[2rem] px-[2rem] text-[0.875rem] md:text-[31.25px] md:px-[3rem] sh">
            Buy $blackbitcoin
        </a>
    </div>
    </>
  )
}

export default Hero