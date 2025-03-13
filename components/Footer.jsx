import Link from "next/link";

const TWITTER_URL = "http://X.com/blackbitcoinerz";
const TELEGRAM_URL = "https://t.me/blackbitcoiners";

const Footer = () => {
  return (
      <>
      <footer className="bg-[url(/asset/footer-bg.svg)] bg-cover bg-center bg-no-repeat">
      <section className="max-w-7xl mx-auto py-[6rem] px-4 text-center">
        <h2 className="text-[2.5rem] font-bold">Join Our Global Community</h2>
        <div className="flex justify-center gap-4 mt-4 text-[#D4D4D4]">
          <div>
            <Link href={TWITTER_URL} target="_blank" className="bg-[#2B2B2B] px-6 py-2 rounded-full hover:bg-[#1C1C1C] hover:text-[#e8e8e8] transition">Twitter</Link>
          </div>
          <div>
            <Link href={TELEGRAM_URL} target="_blank" className="bg-[#2B2B2B] px-6 py-2 rounded-full hover:bg-[#1C1C1C] hover:text-[#e8e8e8] transition">Telegram</Link>
          </div>
        </div>
      </section>

    </footer>
      <p className="text-center pt-[4rem] pb-[2rem] px-[2rem]">@Copywrite 2025 - BlackBitcoin All right reserved</p>
      </>
  );
};

export default Footer;
