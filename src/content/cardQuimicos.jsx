import React from 'react'

//Aqui va la estructura html que va a estar conectada por props a 

const CardQuimicos = ({id,productName,img,productType,size,messure,messureQuantity,price,description,use}) => {
  return (
    <div>
        <div key={id}>
            <img src={img} alt={productName} />
        </div>
        <h3>{productName}</h3>
        <div>
            <div>
                <div>${price}</div>
            </div>
            <div>
                <div>{size}</div>
                <div>{messureQuantity}</div>
                <div>{messure}</div>
            </div>
        </div>
    </div>
  )
}

export default CardQuimicos;