"use client"

import React from 'react'
import projects from "@/data/projects.json"
import profilePic from "@/public/profile-pic (5).png"
import Image from 'next/image'
import { Icon } from '@iconify/react';

const page = () => {
  return (
    <div className=" bg-stone-700 m-4 rounded-lg overflow-hidden flex flex-wrap p-4">

      {
        projects?.map((project) => {
          return (
            <>
              <div className="w-[96%] md:w-[48%] m-auto mt-3 mb-3 rounded-xl  overflow-hidden relative group " key={project.name} >
                <Image className='rounded-2xl bg-cover h-[400px] ' src={project.image} alt={project.name} width={700} height={400} />
                <div className="m-auto flex flex-col left-0 w-[100%] h-full absolute cursor-pointer  rounded-xl top-[65%] group-hover:top-[43%] group-hover:sm:top-[65%] group-hover:md:top-[41%] group-hover:lg:top-[38%] ">
                  <div className="w-full pl-3 bg-yellow-300 text-black text-lg lg:text-2xl cursor-pointer font-bold py-1 lg:py-2">
                    <h3>{project.name}</h3>
                  </div>
                  <div className=" bg-white text-black h-[200px] mb-5 pb-6">
                    <p className='text-md md:text-lg font-normal mb-1 p-1'>{project.desc}</p>
                    <div className=" flex justify-center lg:justify-between items-center w-[60%] m-auto mb-5 mt-1 md:mt-3">
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