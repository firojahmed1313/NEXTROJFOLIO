import React from 'react'
import profilePic from "@/public/profile-pic (5).png"
import Image from 'next/image'

const NavberProfile = () => {
  return (
    <aside className="text-white" >

      <div className="border border-blue-900 m-auto w-[90%] mt-5 rounded-3xl flex flex-col align-middle justify-center">

        <div className="rounded-3xl">
          <Image className='rounded-3xl' src={profilePic} alt="MD FIROJ AHMED" width={"80%"}/>
        </div>

        <div className="mt-5">
          <h1 className="text-center font-bold " title="MD FIROJ AHMED">MD FIROJ AHMED</h1>

          <p className="text-center mt-3">Web developer</p>
        </div>

        <button className="mt-5">
          <span>Show Contacts</span>
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:firozahmed3052000@gmail.com" className="contact-link">firozahmed3052000@gmail.com</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:9830340650" className="contact-link">9830340650</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time datetime="1982-06-23">May 30, 2000</time>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Vill+Post=Ghuni,
                P.S.=Newtown,
                Dist=North 24 pgs,
                West Bengal,
                pincode-700157</address>
            </div>

          </li>

        </ul>

        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a href="https://www.linkedin.com/in/md-firoj-ahmed-8209a01bb/" className="social-link" target="_blank">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/firojahmed1313" className="social-link" target="_blank">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://auth.geeksforgeeks.org/user/firozahmed3052000" className="social-link" target="_blank">
              <ion-icon name="link"></ion-icon>
            </a>
          </li>


        </ul>

      </div>

    </aside>
  )
}

export default NavberProfile