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
        path: "/certificate",
        name: "Certificate",
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
const Hamberger = () => {
    let pathname = usePathname()
    return (
        <div className="m-2 flex flex-wrap">
            {
                (navItems).map((navItem) => {
                    const isActive = navItem.path === pathname;
                    return <Link key={navItem.path} href={navItem.path} className='text-white '>
                        <div className={`border border-black  rounded-xl m-3 p-1 flex hover:bg-red-500 items-center h-fit max-w-[50%] min-w-fit ${isActive ? "bg-red-500" : "bg-stone-900 "}`}>
                            <Icon icon={navItem.icon} style={{ color: "#faf9fb" }} className="items-center h-12 w-16" />
                            <h3 className="text-center mr-2">{navItem.name}</h3>
                        </div>
                    </Link>
                })
            }
        </div>
    )
}

export default Hamberger