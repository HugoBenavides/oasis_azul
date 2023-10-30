import React from 'react'
import cubierta from '../assets/cubierta5.jpg'
import manguera from '../assets/manguera2.jpg'
import solar from '../assets/solarAlt2.jpg'
import caldera from '../assets/caldera.jpg'
import jacuzzi from '../assets/jacuzzi.jpg'
import arena from '../assets/arena_silica.jpg'

const Catalog = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='relative cursor-pointer transition'>
            <img className='rounded-md w-full h-full' src={cubierta} alt="cubierta" />
            <div className='bg-gray-800/30 text-white md:bg-transparent md:hover:bg-gray-800/30 absolute w-full h-full top-0 left-0 rounded-md md:text-transparent md:hover:text-white'>
                <p className='font-bold left-4 bottom-4 text-xl md:text-2xl absolute'>Cubiertas</p>
            </div>
        </div>
        <div className='relative cursor-pointer transition'>
            <img className='rounded-md w-[390px] h-[260px]' src={manguera} alt="accesorios" />
            <div className='bg-gray-800/30 text-white md:bg-transparent md:hover:bg-gray-800/50 absolute w-full h-full top-0 left-0 rounded-md md:text-transparent md:hover:text-white'>
                <p className='font-bold left-4 bottom-4 text-xl md:text-2xl absolute'>Accesorios para limpieza</p>
            </div>
        </div>
        <div className='relative cursor-pointer transition'>
            <img className='rounded-md w-[390px] h-[260px]' src={solar} alt="calentador" />
            <div className='bg-gray-800/30 text-white md:bg-transparent md:hover:bg-gray-800/50 absolute w-full h-full top-0 left-0 rounded-md md:text-transparent md:hover:text-white'>
                <p className='font-bold left-4 bottom-4 text-xl md:text-2xl absolute'>Calentadores solares</p>
            </div>
        </div>
        <div className='relative cursor-pointer transition'>
            <img className='rounded-md w-[390px] h-[260px]' src={caldera} alt="caldera" />
            <div className='bg-gray-800/30 text-white md:bg-transparent md:hover:bg-gray-800/50 absolute w-full h-full top-0 left-0 rounded-md md:text-transparent md:hover:text-white'>
                <p className='font-bold left-4 bottom-4 text-xl md:text-2xl absolute'>Caldera para Alberca</p>
            </div>
        </div>
        <div className='relative cursor-pointer transition'>
            <img className='rounded-md w-[390px] h-[260px]' src={jacuzzi} alt="jacuzzi" />
            <div className='bg-gray-800/30 text-white md:bg-transparent md:hover:bg-gray-800/50 absolute w-full h-full top-0 left-0 rounded-md md:text-transparent md:hover:text-white'>
                <p className='font-bold left-4 bottom-4 text-xl md:text-2xl absolute'>Construcción de Jacuzzi</p>
            </div>
        </div>
        <div className='relative cursor-pointer transition'>
            <img className='rounded-md w-[390px] h-[260px]' src={arena} alt="arena" />
            <div className='bg-gray-800/30 text-white md:bg-transparent md:hover:bg-gray-800/50 absolute w-full h-full top-0 left-0 rounded-md md:text-transparent md:hover:text-white'>
                <p className='font-bold left-4 bottom-4 text-xl md:text-2xl absolute'>Arena 
                sílica para filtro</p>
            </div>
        </div>
    </div>
  )
}

export default Catalog;