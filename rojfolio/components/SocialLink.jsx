import React from 'react'
import { Icon } from '@iconify/react';

const SocialLink = () => {
    return (
        <>
            <section class="flex justify-evenly items-center mb-10">
                <button
                    href="https://www.linkedin.com/in/md-firoj-ahmed-8209a01bb/"
                    class="group flex justify-center drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#310413] borde rounded-xl  shadow-md shadow-slate-600 p-3 mt-1 hover:bg-red-500"
                >
                    <Icon icon="entypo-social:linkedin-with-circle" style={{ color: "#2935db" }} className="h-10 w-10" />
                    <span
                        class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-400 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                    >
                        Linkedin
                    </span>
                </button>
                <button
                    href="https://github.com/firojahmed1313"
                    class="group flex justify-center drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#310413] borde rounded-xl  shadow-md shadow-slate-600 p-3 mt-1 hover:bg-red-500"
                >
                    <Icon icon="entypo-social:github" style={{ color: "#2935db" }} className="h-10 w-10" />
                    <span
                        class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-400 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                    >
                        GitHub
                    </span>
                </button>
                <button
                    href="https://auth.geeksforgeeks.org/user/firozahmed3052000"
                    class="group flex justify-center drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#310413] borde rounded-xl  shadow-md shadow-slate-600 p-3 mt-1 hover:bg-red-500"
                >
                    <Icon icon="material-symbols:link-rounded" style={{ color: "#2935db" }} className="h-10 w-10" />
                    <span
                        class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-400 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                    >
                        GeeksforGeeks
                    </span>
                </button> 
            </section>

        </>
    )
}

export default SocialLink