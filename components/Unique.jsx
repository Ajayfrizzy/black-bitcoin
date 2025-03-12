import Image from "next/image"

const Unique = () => {
  return (
    <>
    {/* For Desktop */}
    <div className="text-[#E8E8E8] bg-[#444444] bg-[url(/asset/first-bg-picture.svg)] bg-cover bg-center bg-no-repeat w-full space-grotesk">
      <div className="max-w-7xl mx-auto text-center md:pt-[4rem] pt-[2rem] pb-[3rem]">
        <h2 className="font-bold md:text-[2.5rem] text-[26px] pb-[6rem]">Our Unique  Ecosystem</h2>
        <div className="md:relative">

          <div className="md:absolute md:top-[40%] md:left-[5%] md:block hidden">
            <Image src="/asset/unique_line.svg" alt="Unique Long Line" width={1} height={0} className="w-[100%]"/>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-center md:px-[3rem] font-bold">
          <div className="md:z-10">
            <Image src="/asset/unique_1.svg" alt="Unique 1" width={150} height={150} />
            <p className="pt-3">Community</p>
          </div>

            {/* For Mobile */}
          <div className="block md:hidden py-5">
            <Image src="/asset/sm_line.svg" alt="Small line" width={10} height={10} />
          </div>

          <div className="md:z-10">
            <Image src="/asset/black-bitcoin-logo.gif" alt="Unique 2" width={150} height={150} />
            <p className="pt-3">BlackBitcoin</p>
          </div>

            {/* For Mobile */}
          <div className="block md:hidden py-5">
            <Image src="/asset/sm_line.svg" alt="Small line" width={10} height={10} />
          </div>

          <div className="md:z-10">
            <Image src="/asset/unique_3.svg" alt="Unique 3" width={150} height={150} />
            <p className="pt-3">Contributors</p>
          </div>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Unique