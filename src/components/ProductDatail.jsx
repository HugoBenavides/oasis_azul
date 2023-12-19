import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from './useFetch';
import Navbar2 from './Navbar2';
import Footer from './Footer';


const ProductDatail = () => {

    const {id} = useParams();

    const {data, error, isPending} = useFetch("http://localhost:8000/contentProducts/" + id);
    

  return (
    <div>
      <Navbar2 />
      {isPending && <div>Cargando...</div>}
      {error && <div>{error}</div>}
      {data &&(
        <div>
          <h3>{data.productName}</h3>
          <p>{data.description}</p>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default ProductDatail;