import React from 'react'
import cartificates from "@/data/cartificate.json"

const page = () => {
  return (
    <section className=" bg-stone-700 m-4 rounded-lg flex flex-wrap p-4">

      {
        cartificates?.map((cartificate) => {
          return (
            <div className=" w-[45%]  h-fit m-auto rounded-lg bg-neutral-800  hover:bg-neutral-900 flex flex-col items-center justify-center  pb-4 pt-4" key={cartificate.name}>
              <img src={cartificate.image} alt={cartificate.name} className='w-20 mb-4'/>
              <span className="text-2xl font-bold text-center ">{cartificate.name}</span>
            </div>
          )
        })
      }


    </section>
  )
}

export default page