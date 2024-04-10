import React from 'react'
import cartificates from "@/data/cartificate.json"
import profilePic from "@/public/profile-pic (5).png"
import Image from 'next/image'

const page = () => {
  return (
    <section className=" bg-stone-700 m-4 rounded-lg flex flex-wrap p-4">

      {
        cartificates?.map((cartificate) => {
          return (
            <div className=" w-[98%] md:w-[48%] lg:w-[30%]  h-fit m-auto rounded-lg bg-neutral-800  hover:bg-neutral-900 flex flex-col items-center justify-center  pb-4 pt-4 mb-3" key={cartificate.name}>
              {//<img src={profilePic} alt={cartificate.name} className='w-20 mb-4'/>
              }
              <Image className='p-4 rounded-2xl mb-3' src={cartificate.image} alt={cartificate.name} width={700} height={700} />
              <span className="text-2xl font-bold text-center ">{cartificate.name}</span>
            </div>
          )
        })
      }


    </section>
  )
}

export default page