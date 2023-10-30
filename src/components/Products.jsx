import React from "react";
import cloro from "../assets/cloro.webp";
import equipo from "../assets/bomba.webp";
import mantenimiento from "../assets/mantenimiento.jpg";
import construccion from "../assets/construccion.webp";
import cotizacion from "../assets/cotizacion.jpg";
import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center font-[Poppins]">
      <h1>Tu alberca siempre lista para nadar</h1>
      <p className="my-3 text-xl">
        Conservamos el agua limpia y cristalina en cualquier condición con
        nuestros productos o servicios.
      </p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 px-2 gap-2 md:gap-4">
        <div className="relative w-full h-full object-cover col-span-2 md:col-span-3 row-span-2">
          <img className="rounded-md" src={cloro} alt="cloro" />
          <div className="absolute top-0 left-0 right-0 w-full h-full text-white md:text-transparent md:hover:bg-gray-900/30 cursor-pointer md:hover:text-white text-center rounded-md transition">
            <p className="font-bold md:mt-8" style={{ fontSize: "2rem" }}>
              Cloro y Químicos
            </p>
          </div>
        </div>
        <ProductsCard bg={equipo} alt={"equipo"} text={"Equipos, Bombas y Accesorios"} />
        <ProductsCard bg={mantenimiento} alt={"manteninimiento"} text={"Servicio de limpieza y mantenimiento"} />
        <ProductsCard bg={construccion} alt={"construccion"} text={"Construcción"} />
        <ProductsCard bg={cotizacion} alt={"cotizacion"} text={"Cotización"} />
      </div>
    </div>
  );
};

export default Products;
