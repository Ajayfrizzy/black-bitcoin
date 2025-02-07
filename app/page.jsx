import "@styles/globals.css";
import Image from "next/image";


const page = () => {
  return (
    <>
 <section className="background text-[#1c1c1c] mt-12">
      <div className="flex justify-between max-w-7xl mx-auto py-[5rem] px-[2rem] text-center">
        <div>
          <h3 className="md:text-2xl text-[1.42rem] font-bold">21M</h3>
          <p className="md:text-xl text-[0.7625rem] pt-2">Total Token Supply</p>
        </div>
        <div className="md:px-0 px-6">
          <h3 className="md:text-2xl text-[1.42rem] font-bold">5/5</h3>
          <p className="md:text-xl text-[0.7625rem] pt-2">Token Tax</p>
        </div>
        <div>
          <h3 className="md:text-2xl text-[1.42rem] font-bold">$0.0001</h3>
          <p className="md:text-xl text-[0.7625rem] pt-2">BlackBitcoin Price</p>
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto mt-12">
      <p className="text-3xl text-center">Our Partners</p>
        <marquee behavior="scroll" direction="left" scrollamount="10">
      <div className="flex justify-between mt-8">
          <Image src="/asset/partner1.svg" alt="Partner 1" width={200} height={200} />
          <Image src="/asset/partner2.svg" alt="Partner 2" width={200} height={200} />
          <Image src="/asset/partner3.svg" alt="Partner 3" width={200} height={200} />
          <Image src="/asset/partner4.svg" alt="Partner 4" width={200} height={200} />
      </div>
        </marquee>
    </section>

    <section className="max-w-7xl mx-auto mt-12 mb-[10rem] text-center">
      <h3 className="text-[#D5D5D5] text-4xl">About BlackBitcoin</h3>
      <p className="my-5 text-[#A6A6A6] px-4 md:px-[7rem] text-xl">Black Bitcoin is a memecoin made for Bitcoin Lovers and all those who missed Bitcoin. It the younger brother of Bitcoin.</p>
      <p className="my-5 text-[#A6A6A6] px-4 md:px-[7rem] text-xl">BENEFITS OF HOLDING PREMIUM PERCENTAGE (%) OF  BLACK BITCOIN AT $500K MARKET CAP
      </p>
      <ul className="list-none text-[#A6A6A6] px-4 md:px-0">
        <li className="my-1">NATIVE REFLECTIONS </li>
        <li className="my-1">ACCESS TO  MENTORSHIP: For  premium holders only</li>
        <p className="my-1">Premium holders are holders with 1% supply of $BBitcoin..</p>
        <p className="my-1">Premium holders criteria will be adjustable as the marketcap grows.</p>
        <li className="my-1">EARLY ACCESS TO FUTURE UTILITIES</li> 
      </ul>
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 text-[1.25rem]">
        <a href="#" target="_blank" className="text-[#1C1C1C] bg-[#FDFBD4] rounded-full sh1">View on dexscreener</a>
        <a href="#" target="_blank" className="text-[#1C1C1C] bg-[#FDFBD4] rounded-full sh1">Join our community</a>
      </div>
    </section>

      <div className="w-100 h-[75rem] unique">
        
      </div>
    </>
  )
}

export default page