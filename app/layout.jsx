import "@styles/globals.css";
import Nav from "../components/Nav";

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
      <body className="overflow-x-hidden">

        <Nav/>
        <main className="min-h-screen">
          {children}
        </main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
