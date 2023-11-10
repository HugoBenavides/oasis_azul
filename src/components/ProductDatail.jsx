import React from 'react'
import {useParams} from 'react-router-dom'

const ProductDatail = () => {

    const {product} = useParams();

  return (
    <div>
        <h1>Detalles de Producto {product}</h1>
    </div>
  )
}

export default ProductDatail;