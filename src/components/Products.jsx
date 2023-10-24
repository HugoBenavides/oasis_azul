import React from "react";
import cloro from "../assets/cloro.webp";
import equipo from "../assets/bomba.webp";
import mantenimiento from "../assets/mantenimiento.jpg";
import construccion from "../assets/construccion.webp";
import cotizacion from "../assets/cotizacion.jpg";

const Products = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center font-[Poppins]">
      <h1>Tu alberca siempre lista para nadar</h1>
      <p className="my-3 text-xl">
        Conservamos el agua limpia y cristalina en cualquier condición
      </p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 px-2 gap-2 md:gap-4">
        <div className="relative w-full h-full object-cover col-span-2 md:col-span-3 row-span-2">
          <img src={cloro} alt="cloro" />
          <div className="absolute top-0 left-0 right-0 w-full h-full text-white md:text-transparent md:hover:bg-gray-900/30 cursor-pointer md:hover:text-white text-center">
            <p className="font-bold md:mt-8" style={{ fontSize: "2rem" }}>
              Cloro y Químicos
            </p>
          </div>
        </div>
        <div className="relative w-full h-full object-cover">
          <img src={equipo} alt="equipo" />
          <div className="absolute w-full h-full top-0 left-0 right-0 bg-gray-900/50 text-white md:text-transparent md:bg-transparent md:hover:bg-gray-900/60 cursor-pointer md:hover:text-white align-middle">
            <p className="font-bold px-1 mt-[90px] md:mt-[6rem]">
              Equipos, Bombas y Accesorios
            </p>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            className="h-full w-full object-cover"
            src={mantenimiento}
            alt="mantenimiento"
          />
          <div className="absolute w-full h-full top-0 left-0 right-0 bg-gray-900/40 text-white md:text-transparent md:bg-transparent md:hover:bg-gray-900/60 cursor-pointer md:hover:text-white align-middle">
            <p className="font-bold mt-[70px] md:mt-[6rem] md:px-1">
              Servicio de Mantenimiento y Limpieza
            </p>
          </div>
        </div>
        <div className="relative w-full h-full object-cover">
          <img
            className="w-full h-full"
            src={construccion}
            alt="construccion"
          />
          <div className="absolute w-full h-full top-0 left-0 right-0 bg-gray-900/30 text-white md:text-transparent md:bg-transparent md:hover:bg-gray-900/60 cursor-pointer md:hover:text-white align-middle">
            <p className="font-bold mt-[40px] md:mt-[4rem]">Construcción</p>
          </div>
        </div>
        <div className="relative w-full h-full object-cover">
          <img className="w-full h-full" src={cotizacion} alt="cotizacion" />
          <div className="absolute w-full h-full top-0 left-0 right-0 bg-gray-900/30 text-white md:text-transparent md:bg-transparent md:hover:bg-gray-900/40 cursor-pointer md:hover:text-white align-middle ">
            <p className="font-bold mt-[40px] md:mt-[4rem]">Cotización</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
