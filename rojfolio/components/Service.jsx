import React from 'react'
import Image from "next/image";
import phone from "@/public/mobile.png";
import web from "@/public/icon-dev.svg";
import blockchain from "@/public/blockchain.svg"
import machinelearning from "@/public/machineLearning.svg"
const serviceData = [
    {
        icon: web,
        title: "Web Development",
        description: "High-quality development of sites at the professional level.",
    },
    {
        icon: machinelearning,
        title: "Machine Learning",
        description: "",
    },
    {
        icon: blockchain,
        title: "Blockchain Development",
        description: "Professional development of website or app using Blockchain.",
    },
    {
        icon: phone,
        title: "Mobile Development",
        description: "Developed a high-performance Mobile App using React Native.",
    }
]

const Service = () => {
    return (
        <section className="service">

            <h3 className="font-bold text-3xl">What i&apos;m doing</h3>

            <ul className="flex flex-wrap pb-3  ">

                {
                    serviceData.map((service, index) => {
                        return (
                            <li className=" w-[96%] lg:w-[45%] m-auto mt-3 p-5 flex align-middle justify-center rounded-xl bg-zinc-800 shadow-xl shadow-[hsla(0, 0%, 0%, 0.25)] hover:shadow-md hover:shadow-slate-600" key={index} >

                                <div className="service-icon-box mr-3  ">
                                    <Image src={service.icon} alt={service.title} width={"70"} />
                                </div>

                                <div className="service-content-box flex flex-col">
                                    <h4 className="font-bold mb-2 text-yellow-100">{service.title}</h4>

                                    <p className="service-item-text">
                                        {service.description}
                                    </p>
                                </div>

                            </li>
                        )
                    })
                }








            </ul>

        </section>
    )
}

export default Service