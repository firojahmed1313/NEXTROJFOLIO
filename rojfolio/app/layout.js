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
        <div className="containe h-[90vh] flex mt-20 m-auto w-[90%]">
          <div className="border rounded-2xl w-1/4 m-1 bg-stone-800  ">
            <NavberProfile />
          </div>
          <div className="border border-black w-3/4 m-1">
            <div className="flex flex-col align-middle justify-center border border-green-900 items-end">
              <div className=" h-auto mt-5 items-center ">
                <Navber />
              </div>
              <div className="border border-gray-800 h-[70vh] mt-5 w-full ">
                {children}
              </div>
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
