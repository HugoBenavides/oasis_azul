import React from "react";
import video from "../assets/swiming_pool.mp4";
import {AiOutlineSearch} from 'react-icons/ai'


const Hero = () => {

  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center">
        <h1 className="text-white">TODO LO QUE NECESITAS PARA TU ALBERCA</h1>
        <p className="text-white text-2xl font-bold my-3">Desde cloro, hasta la construcción de la piscina de tus sueños</p>
        <form className='flex justify-between items-center max-w-[420px] mx-auto w-full border p-1 rounded-md bg-gray-100'>
            <div>
                <input className=" bg-transparent w-[160px] sm:w-[360px] h-[40px] rounded-md pl-2 focus:outline-none font-[Poppoins] text-gray-900 " type="text" placeholder="¿Qué necesitas para tu alberca?"/>
            </div>
            <div>
                <button onClick={(e)=>e.preventDefault()}><AiOutlineSearch size={20} /></button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
