import "@styles/globals.css";
import Nav from "../components/Nav";
// import Hero from "../components/Hero"
// import Tokenomics from "components/Tokenomics";
// import Howto from "components/Howto";
// import Footer from "components/Footer";

export const metadata = {
  title: "Black Bitcoin",
  description: "Made for all BITCOIN lovers",
  icons:{
    icon: "/asset/navtoplogo.svg",
    alt: "Black Bitcoin Logo",
    width: 30,
    height: 30,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Nav/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
