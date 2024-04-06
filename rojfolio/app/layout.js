import { Inter } from "next/font/google";
import "./globals.css";
import NavberProfile from "@/components/NavberProfile";
import Navber from "@/components/Navber";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MD FIROJ AHMED",
  description: "PROTFOLIO OF MD FIROJ AHMED",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black pt-20 pb-10">
          <div className="containe h-full flex m-auto w-[90%]">
            <div className=" rounded-2xl w-1/4 m-1 bg-stone-800 lg:mr-4 h-fit">
              <NavberProfile />
            </div>
            <div className=" w-3/4 m-1 bg-stone-800 rounded-2xl">
              <div className="flex flex-col align-middle justify-center items-end">
                <div className=" h-auto mt-5 items-center mr-4">
                  <Navber />
                </div>
                <div className=" h-full mt-5 w-full text-white  ">
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
