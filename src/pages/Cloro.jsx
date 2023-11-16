import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import CardCloro from "../content/cardCloro";
import { Link } from "react-router-dom";
import useFetch from "../components/useFetch";


const Cloro = () => {
   
    const { data, isPending, error} = useFetch ("http://localhost:8000/contentProducts");

  const filterSort = data.filter((a) => a.category === "cloro");

  return (
    <div>
      <Navbar2 />
      <div className="max-w-[1240px] h-full mx-[15%] px-4 py-8 grid grid-cols-3 gap-4">
        {error && <div>{error}</div>}
        {isPending && <div>CARGANDO...</div>}
        {filterSort && filterSort.map((item) => {
          return (
            <Link to={`/quimicos/cloro/${item.id}`} key={item.id}>
              <CardCloro
                img={item.img}
                productName={item.productName}
                description={item.description}
              />
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Cloro;
