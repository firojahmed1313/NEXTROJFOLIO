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
        <div className="container border border-red-500 h-[90vh] flex ">
          <div className="border border-blue-500 w-1/5 m-1">
            <NavberProfile />
          </div>
          <div className="border border-black w-4/5 m-1">
            <div className="flex align-middle justify-center border border-green-900 flex-col">
              <div className="border border-gray-800 h-[10dvh]">
                <Navber />
              </div>
              <div className="border border-gray-800 h-[70vh]">
                {children}
              </div>
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
