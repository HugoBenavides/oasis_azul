import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import CardCategory from "../components/CardCategory";
import cloro from "../assets/cloro.webp";
import floculante from "../assets/floculante.jpg"
import clarificador from "../assets/clarificador.jpg"
import alguicida from "../assets/alguicidas.jpg"
import { Link } from "react-router-dom";


const Quimicos = () => {
  return (
    <div>
      <Navbar2 />
      <h1 className="text-center my-8">
        Mantenie el agua limpa y lista para nadar
      </h1>
      <div className="max-w-[1240px] h-full md:mx-[25%] px-1 md:px-0 py-8 grid grid-cols-2 gap-2 justify-items-center">
        <Link to="/quimicos/cloro">
          <CardCategory
            img={cloro}
            title={"Cloro"}
            text={"Desinfecta y limpia el agua"}
          />
        </Link>
        <CardCategory
          img={floculante}
          title={"Floculantes"}
          text={"Atrapa partículas suspendidas"}
        />
        <CardCategory
          img={clarificador}
          title={"Clarificadores"}
          text={"Agua cristalina siempre"}
        />
        <CardCategory
          img={alguicida}
          title={"Alguicidas"}
          text={"Elimina el color verde del agua"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Quimicos;
