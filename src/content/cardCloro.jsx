
import React from 'react'

//Aqui va la estructura html que va a estar conectada por props a 

const CardCloro = (props) => {

  const data = props.data //se carga a una variable la informaciond e los props

  const filterSort = data.filter((a)=>a.category==="floculante") //se crea una variable que usa la variable con un filter que filtra las categoridas de acuerdo a la palabra que se ingrese

  //Se usa por fin el map desde la variable filtrada lo cual ayuda a renderiza los elementos dentro de data

  const listProduct = filterSort.map((item)=>{

    return(
      <div key={item.id}>
        <div className='group overflow-hidden'>
          <img className=' transition-transform group-hover:scale-110 duration-200' src={item.img} alt={item.productName} />
        </div>
        <div>
          <h3>{item.productName}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    )
  })

  //imprime el list Products dentro de la padina Cloro.jsx

  return (
    <div>
      {listProduct}
    </div>
  )
}

export default CardCloro;