import React from 'react'
import skills from "@/data/skills.json"
import Image from 'next/image'

const page = () => {
  //console.log(skills)
  return (
    <section className=" bg-stone-700 m-4 rounded-lg flex flex-wrap">

      {
        skills?.map((skill) => {
          return (
            <div className=" w-[48%] lg:w-[30%] h-fit m-auto my-2 rounded-lg bg-neutral-800  hover:bg-neutral-900 flex flex-col items-center justify-center  pb-4 pt-4" key={skill.name}>
              <img src={skill.icon} alt="skill" className='w-20 mb-4'/>
              <span className="text-2xl font-bold text-center ">{skill.name}</span>
            </div>
          )
        })
      }


    </section>
  )
}

export default page