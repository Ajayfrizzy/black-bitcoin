// app/roadmap/page.jsx
const RoadmapPage = () => {
  return (
    <section className="max-w-7xl mx-auto mt-12 mb-[10rem] text-center">
      <h3 className="text-[#000] bg-[#FDFBD4] py-4 mx-auto w-[80%] md:text-[2rem] text-[0.9rem] rounded-md">
        BlackBitcoin Roadmap
      </h3>
      
      <div className="bg-[#000] py-6 w-[80%] mx-auto mt-8 rounded-sm">
        <div className="space-y-6 text-[#FDFBD4] px-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start text-left">
              <h3 className="text-[0.7rem] md:text-[1.2rem] font-bold mb-2">Phase 1: Meme</h3>
              <p className="text-[0.6rem] md:text-[0.9rem] text-[#A6A6A6]">Launch and community building</p>
            </div>

            <div className="flex flex-col items-start text-left">
              <h3 className="text-[0.7rem] md:text-[1.2rem] font-bold mb-2">Phase 2: Earn and HODL</h3>
              <p className="text-[0.6rem] md:text-[0.9rem] text-[#A6A6A6]">Staking and rewards implementation</p>
            </div>

            <div className="flex flex-col items-start text-left">
              <h3 className="text-[0.7rem] md:text-[1.2rem] font-bold mb-2">Phase 3: DexSwap Utilities</h3>
              <p className="text-[0.6rem] md:text-[0.9rem] text-[#A6A6A6]">Decentralized exchange integration</p>
            </div>

            <div className="flex flex-col items-start text-left">
              <h3 className="text-[0.7rem] md:text-[1.2rem] font-bold mb-2">Phase 4: Trading Academy</h3>
              <p className="text-[0.6rem] md:text-[0.9rem] text-[#A6A6A6]">Educational platform launch</p>
            </div>

            <div className="flex flex-col items-start text-left">
              <h3 className="text-[0.7rem] md:text-[1.2rem] font-bold mb-2">Phase 5: Wallet Integration</h3>
              <p className="text-[0.6rem] md:text-[0.9rem] text-[#A6A6A6]">Secure wallet development and integration</p>
            </div>
          </div>
        </div>

        {/* <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <a href="#" target="_blank" className="text-[#1C1C1C] bg-[#FDFBD4] rounded-full sh1">
            View on dexscreener
          </a>
          <a href="#" className="text-[#1C1C1C] bg-[#FDFBD4] rounded-full sh1">
            Join our community
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default RoadmapPage;