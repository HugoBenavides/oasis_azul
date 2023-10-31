import React from "react";
import cubierta from "../assets/cubierta5.jpg";
import manguera from "../assets/manguera2.jpg";
import solar from "../assets/solarAlt2.jpg";
import caldera from "../assets/caldera.jpg";
import jacuzzi from "../assets/jacuzzi.jpg";
import arena from "../assets/arena_silica.jpg";
import CatalogCard from "./CatalogCard";

const Catalog = () => {
  return (
    <div className="max-w-[1240px] m-auto flex flex-col pt-12">
      <div className="text-center my-8">
        <h2>Amplia gama de productos y servicios para tu piscina</h2>
      </div>
      <div className="max-w-[1240px] mx-auto px-4 py-4 grid grid-cols-2 lg:grid-cols-3 gap-4">
      <CatalogCard
        bg={cubierta}
        alt={"cubierta"}
        text={"Cubierta para Alberca"}
      />
      <CatalogCard
        bg={manguera}
        alt={"accesorios"}
        text={"Accesorios para limpieza"}
      />
      <CatalogCard
        bg={solar}
        alt={"panel"}
        text={"Calentador solar para piscina"}
      />
      <CatalogCard
        bg={caldera}
        alt={"caldera"}
        text={"Caldera para albercas"}
      />
      <CatalogCard
        bg={jacuzzi}
        alt={"jacuzzi"}
        text={"Construcción de jacuzzi"}
      />
      <CatalogCard
        bg={arena}
        alt={"cubierta"}
        text={"Arena Sílica para filtro"}
      />
    </div>

    </div>
    
  );
};

export default Catalog;
