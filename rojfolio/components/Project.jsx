"use client"

import React, { useEffect, useState } from 'react'
import projects from "@/data/projects.json"
import Image from 'next/image'
import { Icon } from '@iconify/react';
import filters from '@/data/filter.json';

const Project = () => {
    const [projectData,setProjectData] = useState([]);
    const [filter,setFilter] = useState("");
    //console.log(projects)
    useEffect(() => {
      setProjectData(projects);  
    }, [])
    const filterData = (name) => {
      console.log("filterData",name);
      if(name=="NO-FILTER"){
        setProjectData(projects);
        setFilter("");
        return;
      }
      setProjectData(projects.filter((project) => project.category === name));
      //setFilter(name);
  
    }
    return (
      <section className=" bg-stone-700 m-4 rounded-lg flex flex-wrap p-4 h-fit ">
        <div className="flex flex-auto justify-evenly border rounded-md w-full flex-wrap flex-row">
          {filters.map((fil) => {
            return (
              <button className="border-none px-2 py-1 rounded-md  hover:bg-blue-600 flex flex-row justify-center  " onClick={()=>filterData(fil.name)} key={fil.id}>
                <Icon icon={fil.icon} width="28" height="28" style={{ color: "white",margin:"2px",marginRight:"5px" }} />
                <input type="radio" className="hidden" id={fil.name} />
                <label className="cursor-pointer" htmlFor={fil.name} style={{ color: "white",fontSize:"22px" }} >{fil.name}</label>
              </button>
            )
          })}
        </div>
  
        <div className=" bg-stone-700 m-4 rounded-lg  max-h-screen flex flex-wrap p-4 overflow-scroll  overflow-x-auto scroll-smooth scrollbar">
  
          {
            projectData?.map((project) => {
              return (
                <>
                  <div className="w-[96%] md:w-[48%] m-auto mt-3 mb-3 rounded-xl  overflow-hidden relative group shadow-lg shadow-neutral-900 " key={project.id} >
                    <Image className='rounded-2xl bg-cover h-[400px] ' src={project.image} alt={project.name} width={700} height={400} />
                    <div className="m-auto flex flex-col left-0 w-[100%] h-full absolute cursor-pointer  rounded-xl top-[65%] group-hover:top-[43%] group-hover:sm:top-[65%] group-hover:md:top-[41%] group-hover:lg:top-[38%] ">
                      <div className="w-full pl-3 bg-yellow-300 text-black text-lg lg:text-2xl cursor-pointer font-bold py-1 lg:py-2">
                        <h3>{project.name}</h3>
                      </div>
                      <div className=" bg-white text-black h-[200px] mb-5 pb-6">
                        <p className='text-md md:text-lg font-normal mb-1 p-1'>{project.desc}</p>
                        <div className=" flex justify-center lg:justify-between items-center w-[60%] m-auto mb-5 mt-1 md:mt-3">
                          <a href={project.links.view} className=" bg-black text-white flex justify-between items-center p-2 pl-4 pr-4 rounded-xl hover:bg-blue-800" target="_blank"><Icon icon="ic:baseline-remove-red-eye" style={{ color: "white", marginRight: "10px" }} /> View</a>
                          <a href={project.links.code} className=" bg-black text-white flex justify-between items-center p-2 pl-4 pr-4 rounded-xl hover:bg-blue-800" target="_blank"> <Icon icon="iconoir:code" style={{ color: "white", marginRight: "10px" }} /> Code</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
  
  
        </div>
      </section>
    )
}

export default Project