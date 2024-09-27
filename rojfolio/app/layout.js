import { Inter } from "next/font/google";
import "./globals.css";
import NavberProfile from "@/components/NavberProfile";
import Navber from "@/components/Navber";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: "MD FIROJ AHMED",
  description: "PROTFOLIO OF MD FIROJ AHMED",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black pt-20 pb-10 overflow-hidden m-0 mr-0">
          <div className="containe h-full flex flex-col lg:flex-row mx-[5%] w-[90%] overflow-hidden">
            <div className=" rounded-2xl w-full lg:w-1/4 m-1 bg-stone-800 lg:mr-4 h-fit">
              <NavberProfile />
            </div>
            <div className=" w-full lg:w-3/4 m-1 bg-stone-800 rounded-2xl">
              <div className="flex flex-col align-middle justify-center items-end">
                <div className="h-1 mt-5 items-center mr-4 max-w-[100%] invisible lg:visible  lg:h-auto ">
                  <Navber />
                </div>
                <div className=" h-full mt-0 lg:mt-5 w-full text-white  ">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
