import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import CardCloro from "../content/cardCloro";
import contentQuimicos from "../content/contentQuimicos";

const Cloro = () => {

  const filterSort = contentQuimicos.filter((a) => a.category === "cloro");

  return (
    <div>
      <Navbar2 />
      <div className="max-w-[1240px] h-full mx-[15%] px-4 py-8 grid grid-cols-3 gap-4">
        {filterSort.map((item) => {
          return (
            <CardCloro
              key={item.id}
              img={item.img}
              productName={item.productName}
              description={item.description}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Cloro;
