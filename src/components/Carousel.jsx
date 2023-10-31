import React, {useState} from "react";
import alberca from "../assets/cotizacion.jpg";
import alberca2 from "../assets/bomba.webp";
import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs'

const sliderData = [
  { src: alberca, alt: "Alberca" },
  { src: alberca2, alt: "Alberca Agua Verde" },
];

const Carousel = () => {

  const [slide,setSlide] = useState(0)

  const length = sliderData.length

  const prevSlide = ()=>{
    setSlide(slide === length -1 ? 0 : slide + 1)
  };
  const nextSlide = ()=>{
    setSlide(slide === 0 ? length -1 : slide -1)
  };

  return (
    <div className="max-w-[1240px] m-auto relative flex flex-col pt-12">
      <div className="text-center">
        <h2>Sección de Promociones o Descuentos</h2>
      </div>
      <BsArrowLeftSquareFill onClick={prevSlide} className="absolute top-[60%] md:top-[50%] text-3xl cursor-pointer left-8 text-black md:text-4xl md:text-sky-600 z-10" />
      <BsArrowRightSquareFill onClick={nextSlide} className="absolute top-[60%] md:top-[50%] text-3xl cursor-pointer right-8  text-black md:text-4xl md:text-sky-600 z-10"/>
      <div className="max-w-[1240px] m-auto px-4 py-8 relative flex justify-center items-center">
        {sliderData.map((items, key) => (
          <div className={key === slide ? 'opacity-100 transition':'opacity-0'}>
            {key === slide && <img className="w-full rounded-md" src={items.src} alt={items.alt} /> }
          </div>
        ))}
      </div>
    </div>
      
  );
};

export default Carousel;
