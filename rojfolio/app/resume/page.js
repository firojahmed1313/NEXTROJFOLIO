"use client"

import React from 'react'
import { Icon } from '@iconify/react';
const datas = [1, 2, 3];
import resumeData from "@/data/resume.json";
const page = () => {
  //console.log(resumeData)
  return (
    <article className="ml-3 ">

      {resumeData?.map((resume) => {

        return (
          <section className="mb-7" >
            <div className=" flex items-center mb-6">
              <div className="rounded-2xl  shadow-md shadow-slate-600 p-1 mt-1 mx-2">
                <Icon icon={resume.icon} style={{ color: "#FFCC00" }} className="items-center h-7 w-7" />
              </div>
              <h3 className="text-yellow-200 text-xl font-bold">{resume.title} </h3>
            </div>

            <ol className="m-12">


              {(resume.data).map((data) => {
                console.log(data);
                return (
                  <li className="mb-6 relative after:content-* after:absolute after:top-[7px] after:left-[-30px] after:w-[9px] after:h-[9px] 
                after:rounded-full after:bg-[#FFCC00] after:shadow-[0_0_0_4px] after:shadow-neutral-400
                before:content-* before:absolute before:top-[-25px] before:left-[-30px] before:w-[1px]
                 before:h-[calc(100% + 50px)] before:bg-white " key={data}>

                    <h4 className="text-yellow-100 text-xl font-semibold">{data.name} </h4>
                    <p className="text-lg font-normal">{data.locaton} </p>
                    <span className='text-lg font-normal text-yellow-300'>{data.timeline}</span>
                    <p className="text-lg font-normal">{data.desc} </p> <br />



                  </li>
                )
              })}




            </ol>

          </section>
        )
      })}




    </article>
  )
}

export default page