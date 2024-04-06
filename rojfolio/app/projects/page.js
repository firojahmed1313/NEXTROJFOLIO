import React from 'react'
import projects from "@/data/projects.json"

const page = () => {
  return (
    <section className=" bg-stone-700 m-4 rounded-lg flex flex-wrap p-4">

      {
        projects?.map((project) => {
          return (
            <>
              frryhnh
            </>
          )
        })
      }


    </section>
  )
}

export default page