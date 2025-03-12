const TWITTER_URL = "http://X.com/blackbitcoinerz";
const TELEGRAM_URL = "https://t.me/blackbitcoiners";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto mt-12 mb-6">
      <section className="text-center bg-[#000] h-[40vh] flex flex-col items-center justify-center text-white rounded-xl md:w-full md:max-w-4xl md:mx-auto m-2">
        <h3 className="text-[0.9rem] md:text-2xl">Join Our Global Community</h3>

        <div className="flex md:flex-row flex-col gap-4 mt-5">
          <a
            href={TWITTER_URL} target="_blank"
            className="text-[#1C1C1C] bg-[#FDFBD4] rounded-full sh2"
          >
            Twitter
          </a>
          <a
            href={TELEGRAM_URL} target="_blank"
            className="text-[#1C1C1C] bg-[#FDFBD4] rounded-full sh2"
          >
            Telegram
          </a>
        </div>
      </section>

      <p className="pt-[3rem] pb-[1rem] text-[0.8rem] md:text-[1.2rem] text-center text-[#D5D5D5]">@Copywrite 2025 - BlackBitcoin All right reserved</p>
    </footer>
  );
};

export default Footer;
