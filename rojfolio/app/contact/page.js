import React from 'react'
import emailqr from "@/public/qr-code email.png"
import Image from 'next/image'
const page = () => {
  return (
    <section className="text-gray-600 body-font relative rounded-lg">
      <div className="mx-[2%] w-[96%] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-1">
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md mx-1">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
            <p className="mt-1">Vill+Post=Ghuni,P.S.=Newtown,
              Dist=North 24 pgs,
              West Bengal,pincode-700157</p>
          </div>
          <div className="lg:w-1/2 px-4 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
            <a className="text-blue-500 leading-relaxed" href="mailto:firozahmed3052000@gmail.com">firozahmed3052000@gmail.com</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
            <a className="leading-relaxed text-blue-700" href="tel:9830340650">9830340650</a>
          </div>
        </div>
      </div>
      <div className="container px-1 py-20 mx-auto flex lg:flex-nowrap flex-wrap ">
        <div className="lg:w-2/4 sm:w-[38%] bg-gray-300 rounded-lg sm:mr-1 p-3 flex flex-col items-center justify-start relative h-full">
          <h2 className="text-gray-900 text-2xl mb-3 font-medium title-font  ">Scan QR for send Message</h2>
          <Image className='rounded-4xl' src={emailqr} alt="email qr" width={"80%"} />
        </div>
        <div className="lg:w-2/4 sm:w-[60%] bg-white flex flex-col md:ml-auto w-full py-8 px-6 mt-8 md:mt-0 rounded-lg ">
          <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">Message me</h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Subject</label>
            <input type="text" id="subject" name="subject" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Submit</button>
        </div>



      </div>
    </section>
  )
}

export default page