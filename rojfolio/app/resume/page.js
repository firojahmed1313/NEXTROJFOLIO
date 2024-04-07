"use client"

import React from 'react'
import { Icon } from '@iconify/react';
const datas = [1, 2, 3];
const page = () => {
  return (
    <article className="ml-3 ">
      <section className="mb-7">

        <div className=" flex items-center mb-6">
          <div className="rounded-2xl  shadow-md shadow-slate-600 p-1 mt-1 mx-2">
            <Icon icon="material-symbols-light:school-outline" style={{ color: "#FFCC00" }} className="items-center h-7 w-7" />
          </div>
          <h3 className="text-yellow-200 text-xl font-bold">Education</h3>
        </div>

        <ol className="m-12">

          {
            datas.map((data) => {
              return (
                <li className="mb-6 relative after:content-* after:absolute after:top-[7px] after:left-[-30px] after:w-[9px] after:h-[9px] 
                after:rounded-full after:bg-[#FFCC00] after:shadow-[0_0_0_4px] after:shadow-neutral-400
                before:content-* before:absolute before:top-[-25px] before:left-[-30px] before:w-[1px]
                 before:h-[calc(100% + 50px)] before:bg-white " key={data}>

                  <h4 className="text-yellow-100 text-xl font-semibold">Kalyani Government Engineering College </h4>
                  <p className="text-lg font-normal">Kalyani, West Bengal 741235</p>
                  <span className='text-lg font-normal text-yellow-300'>Present -2020</span>

                  <p className="text-lg font-normal">
                    B.Tech in Computer Science And Engineeing <br />
                    Cgpa: 9.14
                  </p>

                </li>
              )
            })
          }



        </ol>

      </section>

      <section className="mb-7">

        <div className=" flex items-center mb-6">
          <div className="rounded-xl  shadow-md shadow-slate-600 p-1 mt-1 mx-2">
            <Icon icon="material-symbols-light:desktop-windows-outline-rounded" style={{ color: "#FFCC00" }} className="items-center h-7 w-7" />
          </div>

          <h3 className="text-yellow-200 text-xl font-bold">Experience</h3>
        </div>

        <ol className="m-12">

          <li className="mb-6 relative after:content-* after:absolute after:top-[7px] after:left-[-30px] after:w-[9px] after:h-[9px] 
                after:rounded-full after:bg-[#FFCC00] after:shadow-[0_0_0_4px] after:shadow-neutral-400
                before:content-* before:absolute before:top-[-25px] before:left-[-30px] before:w-[1px]
                 before:h-[calc(100% + 50px)] before:bg-white ">

            <h4 className="text-yellow-100 text-xl font-semibold">Summer Intern</h4>
            <p className="text-lg font-normal"> Celebal Technologies <br /> Jaipur, Rajasthan 302017</p>

            <span className='text-lg font-normal text-yellow-300'>June 2023 - Aug 2023 </span>

            <p className="text-lg font-normal">
              Developed a high-performance frontend website for Movie lovers.
              Worked with Reactjs ,html , css,bootstrap,Reduxsaga.
              implemented Redux for state management, which allowed me to efficiently handle data flow and manage the application’s global state.
            </p>

          </li>





        </ol>

      </section>
      <section className="mb-7 ">

        <div className=" flex items-center mb-6">
          <div className="rounded-xl  shadow-md shadow-slate-600 p-1 mt-1 mx-2">
            <Icon icon="ic:round-business" style={{ color: "#FFCC00" }} className="items-center h-7 w-7" />
          </div>

          <h3 className="text-yellow-200 text-xl font-bold">Training</h3>
        </div>

        <ol className="m-12">

          <li className="mb-6 relative after:content-* after:absolute after:top-[7px] after:left-[-30px] after:w-[9px] after:h-[9px] 
                after:rounded-full after:bg-[#FFCC00] after:shadow-[0_0_0_4px] after:shadow-neutral-400
                before:content-* before:absolute before:top-[-25px] before:left-[-30px] before:w-[1px]
                 before:h-[calc(100% + 50px)] before:bg-white ">

            <h4 className="text-yellow-100 text-xl font-semibold">Industrial Training And Internship</h4>
            <p className="text-lg font-normal"> Ardent Computech Pvt Ltd <br /> Online </p>

            <span className='text-lg font-normal text-yellow-300'> Aug 2022 - Sep 2022 </span>

            <p className="text-lg font-normal">
              Developed a hotel website project from zero to deployment.
              Utilized responsive design to ensure compatibility across all devices
              Tools: Html, Css , JavaScript and Bootstrap.
              Coordinated with a team of students to design and deployment.
            </p>

          </li>





        </ol>

      </section>
    </article>
  )
}

export default page