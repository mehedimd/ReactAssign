import React from 'react'
import { FaFacebook,FaInstagram, FaLinkedin, FaTwitter,FaMobileAlt,FaVoicemail } from "react-icons/fa";

export default function Header() {
  return (
    <div className='bg-success text-white'>
    <header className='py-2 container d-flex align-items-center justify-content-between '>
        <div className='d-flex gap-2'>
            <span><FaVoicemail/> example@gmail.com </span>
            <span> <FaMobileAlt/>+880 192 748 2651</span>
            
        </div>
        <div className='d-flex gap-2 align-items-center'>
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
            <FaLinkedin/>
        </div>
    </header>
    </div>
  )
}
