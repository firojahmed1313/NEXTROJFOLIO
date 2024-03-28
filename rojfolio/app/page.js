import NavberProfile from "@/components/NavberProfile";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container border border-red-500 h-[90vh] flex ">
          <div className="border border-blue-500 w-1/5 m-1">
            <NavberProfile/>
          </div>
          <div className="border border-black w-4/5 m-1">
            
          </div>
      </div>
    </>
  );
}
