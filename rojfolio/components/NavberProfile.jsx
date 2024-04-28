"use client"

import React, { useState } from 'react'
import profilePic from "@/public/profilepicgif.gif"
//import profilePic from "@/public/profile-pic (1).png"
import Image from 'next/image'
import { Icon } from '@iconify/react';
import Hamberger from './Hamberger';

const NavberProfile = () => {
  const [sort, setSort] = useState(false);
  const [open, setOpen] = useState(false);
  //console.log(sort);
  return (
    <aside className={`text-white ${sort ? "h-60" : "h-fit"} lg:h-fit overflow-hidden`} >

      <div className={`m-auto w-[90%] mt-5 rounded-3xl flex flex-col align-middle justify-center h-  items-center sm:w-[50%] lg:w-[90%] `}>

        <div className="rounded-3xl">
          <Image className='rounded-[50%]' src={profilePic} alt="MD FIROJ AHMED" width={"70%"} />
        </div>

        <div className="mt-5">
          <h1 className="text-center font-bold text-2xl" title="MD FIROJ AHMED">MD FIROJ AHMED</h1>

          <p className="text-center mt-3 text-xl">Web developer</p>
        </div>

        <button className="border border-stone-700 hover:border-yellow-400 absolute h-fit top-[83px] right-[4.5%] flex lg:invisible rounded-bl-lg rounded-tr-2xl " onClick={() => setSort(!sort)}>
          {
            (sort) ?
              <>
                <span className="p-1 invisible md:visible lg:invisible w-0 h-0 md:w-fit md:p-3 text-[#FFCC00] ">Show Contacts</span>
                <Icon icon="ic:outline-keyboard-arrow-right" style={{ color: "#FFCC00" }} className="h-7 w-7 mx-auto m-3 mr-3" />
              </>
              : <>
                <span className="p-1 invisible md:visible lg:invisible w-0 h-0 md:w-fit md:p-3 text-[#FFCC00] ">Hide Contacts</span>
                <Icon icon="ic:round-keyboard-arrow-down" style={{ color: "#FFCC00" }} className="h-7 w-7 mx-auto m-3 mr-3" />
              </>
          }


        </button>
        <button className=" absolute h-fit top-[23px] right-[4.5%] flex lg:invisible" onClick={() => setOpen(!open)}>
          {
            (open) ?
              <Icon icon="ooui:close" style={{ color: "white" }} className="h-7 w-7 m-3 mx-3" />
              :
              <Icon icon="ic:round-menu" style={{ color: "white" }} className="h-9 w-7 m-3 mx-3" />

          }


        </button>
        {
          (open) ?
            <div className="rounded-xl h-fit w-[90%] m-auto absolute top-[69px] bg-stone-700 lg:invisible z-0 ">
              <Hamberger />
            </div> : null
        }


      </div>

      <div className="m-3 ">

        <div className="border border-y-black"></div>

        <ul className="m-2">

          <li className="flex justify-around w-full align-middle mb-3 ">

            <div className="rounded-xl  shadow-md shadow-slate-600 p-3 mt-1 mr-2 hover:bg-red-500">
              <Icon icon="nimbus:mail" style={{ color: "#FFCC00" }} className="items-center h-7 w-7 " />
            </div>

            <div className="flex flex-col w-[80%] overflow-x-hidden">
              <p className="text-yellow-200">Email</p>

              <a href="mailto:firozahmed3052000@gmail.com" className="">firozahmed3052000@gmail.com</a>
            </div>

          </li>

          <li className="flex justify-around w-full align-middle  mb-3">

            <div className="borde rounded-xl  shadow-md shadow-slate-600 p-3  mt-1 mr-2 hover:bg-red-500">
              <Icon icon="material-symbols-light:smartphone-outline" style={{ color: "#FFCC00" }} className="items-center h-7 w-7" />
            </div>

            <div className="flex flex-col w-[80%] ">
              <p className="text-yellow-200">Phone</p>
              <a href="tel:9830340650" className="">9830340650</a>
            </div>

          </li>

          <li className="flex justify-around w-full align-middle  mb-3">

            <div className="borde rounded-xl  shadow-md shadow-slate-600 p-3  mt-1 mr-2 hover:bg-red-500">
              <Icon icon="material-symbols-light:calendar-month-rounded" style={{ color: "#FFCC00" }} className="items-center h-7 w-7" />
            </div>

            <div className="flex flex-col w-[80%] ">
              <p className="text-yellow-200">Birthday</p>

              <time dateTime="">May 30, 2000</time>
            </div>

          </li>

          <li className="flex justify-around w-full align-middle mb-3">

            <div className="borde rounded-xl  shadow-md shadow-slate-600 p-3 h-max  mt-1 mr-2 align-middle hover:bg-red-500">
              <Icon icon="material-symbols-light:location-on-rounded" style={{ color: "#FFCC00" }} className="items-center h-7 w-7" />
            </div>

            <div className="flex flex-col w-[80%] ">
              <p className="text-yellow-200">Location</p>

              <address>Vill+Post=Ghuni,
                P.S.=Newtown,
                Dist=North 24 pgs,
                West Bengal,
                pincode-700157</address>
            </div>

          </li>

        </ul>


        <ul className="flex align-middle justify-evenly">

          <li className="borde rounded-xl  shadow-md shadow-slate-600 p-3 mt-1 hover:bg-red-500">
            <a href="https://www.linkedin.com/in/md-firoj-ahmed-8209a01bb/" className="" target="_blank">
              <Icon icon="entypo-social:linkedin-with-circle" style={{ color: "#2935db" }} className="h-10 w-10" />
            </a>
          </li>

          <li className="borde rounded-xl  shadow-md shadow-slate-600 p-3 mt-1 hover:bg-red-500">
            <a href="https://github.com/firojahmed1313" className="" target="_blank">
              <Icon icon="entypo-social:github" style={{ color: "#2935db" }} className="h-10 w-10" />
            </a>
          </li>

          <li className="borde rounded-xl  shadow-md shadow-slate-600 p-3 mt-1 hover:bg-red-500">
            <a href="https://auth.geeksforgeeks.org/user/firozahmed3052000" className="" target="_blank">
              <Icon icon="material-symbols:link-rounded" style={{ color: "#2935db" }} className="h-10 w-10" />
            </a>
          </li>


        </ul>

      </div>

    </aside>
  )
}

export default NavberProfile