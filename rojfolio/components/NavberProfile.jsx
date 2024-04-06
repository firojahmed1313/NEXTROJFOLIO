"use client"

import React from 'react'
import profilePic from "@/public/profile-pic (5).png"
import Image from 'next/image'
import { Icon } from '@iconify/react';

const NavberProfile = () => {
  return (
    <aside className="text-white" >

      <div className="m-auto w-[90%] mt-5 rounded-3xl flex flex-col align-middle justify-center items-center">

        <div className="rounded-3xl">
          <Image className='rounded-3xl' src={profilePic} alt="MD FIROJ AHMED" width={"80%"} />
        </div>

        <div className="mt-5">
          <h1 className="text-center font-bold text-2xl" title="MD FIROJ AHMED">MD FIROJ AHMED</h1>

          <p className="text-center mt-3 text-xl">Web developer</p>
        </div>

        <button className="mt-5 border border-black rounded-md w-fit bg-orange-500">
          <span className="p-3 ">Show Contacts</span>
        </button>

      </div>

      <div className="m-3">

        <div className="border border-y-black"></div>

        <ul className="m-2">

          <li className="flex justify-around w-full align-middle mb-3">

            <div className="borde rounded-xl  shadow-md shadow-slate-600 p-3 mt-1 mr-2">
              <Icon icon="nimbus:mail" style={{ color: "#FFCC00" }} className="items-center h-7 w-7"/>
            </div>

            <div className="flex flex-col w-[80%] ">
              <p className="text-yellow-200">Email</p>

              <a href="mailto:firozahmed3052000@gmail.com" className="">firozahmed3052000...</a>
            </div>

          </li>

          <li className="flex justify-around w-full align-middle  mb-3">

            <div className="borde rounded-xl  shadow-md shadow-slate-600 p-3  mt-1 mr-2">
              <Icon icon="material-symbols-light:smartphone-outline" style={{ color: "#FFCC00" }} className="items-center h-7 w-7"/>
            </div>

            <div className="flex flex-col w-[80%] ">
              <p className="text-yellow-200">Phone</p>
              <a href="tel:9830340650" className="">9830340650</a>
            </div>

          </li>

          <li className="flex justify-around w-full align-middle  mb-3">

            <div className="borde rounded-xl  shadow-md shadow-slate-600 p-3  mt-1 mr-2">
              <Icon icon="material-symbols-light:calendar-month-rounded" style={{ color: "#FFCC00" }} className="items-center h-7 w-7"/>
            </div>

            <div className="flex flex-col w-[80%] ">
              <p className="text-yellow-200">Birthday</p>

              <time dateTime="">May 30, 2000</time>
            </div>

          </li>

          <li className="flex justify-around w-full align-middle mb-3">

            <div className="borde rounded-xl  shadow-md shadow-slate-600 p-3 h-max  mt-1 mr-2 align-middle">
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

          <li className="borde rounded-xl  shadow-md shadow-slate-600 p-3 mt-1">
            <a href="https://www.linkedin.com/in/md-firoj-ahmed-8209a01bb/" className="" target="_blank">
              <Icon icon="entypo-social:linkedin-with-circle" style={{ color: "#2935db" }} className="h-10 w-10" />
            </a>
          </li>

          <li className="borde rounded-xl  shadow-md shadow-slate-600 p-3 mt-1">
            <a href="https://github.com/firojahmed1313" className="" target="_blank">
            <Icon icon="entypo-social:github"  style={{color: "#2935db"}} className="h-10 w-10" />
            </a>
          </li>

          <li className="borde rounded-xl  shadow-md shadow-slate-600 p-3 mt-1">
            <a href="https://auth.geeksforgeeks.org/user/firozahmed3052000" className="" target="_blank">
            <Icon icon="material-symbols:link-rounded"  style={{color: "#2935db"}} className="h-10 w-10" />
            </a>
          </li>


        </ul>

      </div>

    </aside>
  )
}

export default NavberProfile