"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Icon } from '@iconify/react';
const navItems = [
  {
    path: "/",
    name: "About",
    icon: "mdi:user"
  },
  {
    path: "/resume",
    name: "Resume",
    icon: "mdi:file-table-outline"
  },
  {
    path: "/skills",
    name: "Skills",
    icon: "game-icons:cut-diamond"
  },
  {
    path: "/cartificate",
    name: "Cartificate",
    icon: "icons8:diploma-1"
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "akar-icons:airplay-video"
  },
  {
    path: "/contact",
    name: "Contact",
    icon: "mdi:contact"
  },
];
const Navber = (promts) => {
  let pathname = usePathname()
  console.log(pathname);
  return (
    <nav className="border border-black rounded-xl bg-black flex align-middle justify-items-end h-full w-min">
      {
        (navItems).map((navItem) => {
          const isActive = navItem.path === pathname;
          return <Link key={navItem.path} href={navItem.path} className='text-white '> 
            <div className={`border border-black  rounded-xl m-3 p-3 flex flex-col align-middle justify-center hover:bg-red-500 items-center h-24 w-24 ${isActive ? "bg-red-500" : "bg-stone-900 "}`}>
              <Icon icon={navItem.icon} style={{ color: "#faf9fb"} } className="items-center h-16 w-20"/>
              <h3 className="text-center">{navItem.name}</h3>
            </div>
          </Link>
        })
      }
    </nav>
  )
}

export default Navber