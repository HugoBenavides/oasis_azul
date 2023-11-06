import React from 'react'

//Aqui va la estructura html que va a estar conectada por props a 

const CardQuimicos = ({id,productName,img,size,messure,messureQuantity,productType,symbol}) => {

  return (
    <div className='flex-col '>
        <div key={id} className='flex justify-center object-cover'>
            <img className='h-[120px] f-[120px]' src={img} alt={productName} />
        </div>
        <div>
            <h3>{productName}</h3>
        </div>
        <div>
            <div>
                <div>
                    {symbol}
                </div>
            </div>
            <div>
                <div>{size}</div>
                <div>{messureQuantity}</div>
                <div>{messure}</div>
                <div>{productType}</div>
            </div>
        </div>
    </div>
  )
}

export default CardQuimicos;