"use client"

import React, { useState } from 'react'
import emailqr from "@/public/qr-code email.png"
import Image from 'next/image'
import axios  from 'axios';
const initialData = {
  name: "",
  email: "",
  subject:"",
  message: "",
};
const page = () => {
  const [emailData,setEmail] = useState(initialData);
  const inputEvent = (e) => {
    const { name, value } = e.target;
    setEmail({ ...emailData, [name]: value });
  };
  const submitEmail =async (e) => {
    e.preventDefault();
    //console.log(emailData);
    try {
      const url="/api/email";
      const data=await axios.post(url,emailData);
      //console.log(data);
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    
    <section className="text-gray-600 body-font rounded-lg">
      <div className="container px-1 py-20 mx-auto flex md:flex-nowrap flex-wrap ">
        <div className="lg:w-2/4 sm:w-[38%] bg-gray-300 rounded-lg sm:mr-1 p-3 flex flex-col items-center justify-start relative h-full">
          <h2 className="text-gray-900 text-2xl mb-3 font-medium title-font  ">Scan QR for send Message</h2>
          <Image className='shadow-lg shadow-neutral-900 mb-6 rounded-2xl' src={emailqr} alt="email qr" width={500} height={500} />
        </div>
        <div className="lg:w-2/4 sm:w-[60%] bg-white flex flex-col md:ml-auto w-full py-8 px-6 mt-8 md:mt-0 rounded-lg ">
          <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">Message me</h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" onChange={inputEvent} id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" onChange={inputEvent} id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Subject</label>
            <input type="text" onChange={inputEvent} id="subject" name="subject" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" onChange={inputEvent} name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button onClick={submitEmail} className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Submit</button>
        </div>



      </div>
    </section>
  )
}

export default page