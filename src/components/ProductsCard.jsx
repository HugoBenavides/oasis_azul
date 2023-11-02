import React from "react";
import {Link} from 'react-router-dom'

const ProductsCard = ({bg,alt,text,link}) => {
  return (
    <div className="relative w-full h-full object-cover">
      <img className="rounded-md w-full h-full" src={bg} alt={alt} />
      <div className="absolute w-full h-full top-0 left-0 right-0 bg-gray-900/50 text-white md:text-transparent md:bg-transparent md:hover:bg-gray-900/70 cursor-pointer md:hover:text-white align-middle rounded-md transition">
        <p className="font-bold px-1 mt-[90px] md:mt-[6rem]">
          {text}
        </p>
        <Link to={link}>
          <div className="absolute w-full h-full top-0 left-0 right-0"></div>
        </Link>
      </div>
    </div>
  );
};

export default ProductsCard;
