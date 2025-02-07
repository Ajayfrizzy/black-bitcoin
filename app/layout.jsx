import "@styles/globals.css";
import Nav from "../components/Nav";
import Hero from "../components/Hero"
import Tokenomics from "components/Tokenomics";
import Howto from "components/Howto";
import Footer from "components/Footer";

export const metadata = {
  title: "Black Bitcoin",
  description: "Made for all BITCOIN lovers",
  icons:{
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Nav/>
        <Hero/>
        {children}
        <Tokenomics/>
        <Howto/>
        <Footer/>
      </body>
    </html>
  );
}
