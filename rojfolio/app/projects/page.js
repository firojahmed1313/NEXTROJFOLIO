"use client"

import React from 'react'
import projects from "@/data/projects.json"
import profilePic from "@/public/profile-pic (5).png"
import Image from 'next/image'
import { Icon } from '@iconify/react';

const page = () => {
  return (
    <div className=" bg-stone-700 m-4 rounded-lg flex flex-wrap p-4">

      {
        projects?.map((project) => {
          return (
            <>
              <div className="w-[45%] m-auto mt-3 mb-3 rounded-xl  overflow-hidden relative group " key={project.name} >
                <Image className='rounded-2xl ' src={profilePic} alt={project.name} width={"70%"} height={"100%"}/>
                <div className="m-auto flex flex-col left-0 w-[100%] h-full absolute cursor-pointer  rounded-xl top-[70%] group-hover:top-[40%] ">
                  <div className="w-full pl-3 pt-4 bg-yellow-300 text-black text-2xl cursor-pointer font-bold pb-4">
                    <h3>{project.name}</h3>
                  </div>
                  <div className=" bg-white text-black h-[200px] mb-5">
                    <p className='text-xl font-medium mb-3 p-3'>{project.desc}</p>
                    <div className=" flex justify-between items-center w-[60%] m-auto mb-5 mt-5">
                      <a href={project.links.view} className=" bg-black text-white flex justify-between items-center p-2 pl-4 pr-4 rounded-xl hover:bg-blue-800" target="_blank"><Icon icon="ic:baseline-remove-red-eye"  style={{color: "white", marginRight:"10px"}} /> View</a>
                      <a href={project.links.code} className=" bg-black text-white flex justify-between items-center p-2 pl-4 pr-4 rounded-xl hover:bg-blue-800" target="_blank"> <Icon icon="iconoir:code"  style={{color: "white", marginRight:"10px"}} /> Code</a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }


    </div>
  )
}

export default page