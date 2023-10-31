import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-200 py-16'>
        <div className='max-w-[1240px] m-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center'>
                <h1 className='text-[--primary-dark]'>Albercas Oasis Azul<span className='text-[16px]'>&copy;</span>{" "}<span className='text-[12px]'>2023</span> </h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaYoutube className='icon' />
                    <FaInstagram className='icon' />
                    <FaPinterest className='icon' />
                </div>
            </div>
            <div className='flex md:justify-center'>
                <ul className='md:flex '>
                    <li className='text-[16px] text-[--primary-dark]'>WhatsApp +52 55 XXXXXXXX</li>
                    <li className='cursor-pointer text-[16px] text-[--primary-dark]'>Químicos</li>
                    <li className='cursor-pointer text-[16px] text-[--primary-dark]'>Equipo</li>
                    <li className='cursor-pointer text-[16px] text-[--primary-dark]'>Mantenimiento</li>
                    <li className='cursor-pointer text-[16px] text-[--primary-dark]'>Construcción</li>
                    <li className='cursor-pointer text-[16px] text-[--primary-dark]'>Cotización</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer