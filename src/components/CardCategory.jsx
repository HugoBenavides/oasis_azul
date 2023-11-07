import React from 'react'


//esta card sive para conectar las diferentes categorias de productos y servicios.
//titulo y descripcion van por props

const CardCategory = ({ img, title, text }) => {
  return (
    <div className='relative max-w-xs overflow-hidden rounded-md shadow-lg group'>
        <img src={img} alt="/" className=' transition-transform group-hover:scale-110 duration-200 ' />
        <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent flex-col justify-center text-center'>
            <h3 className='mb-1 md:mb-4 text-white text-[14px] md:text-2xl mx-auto'>{title}</h3>
            <p className='text-white text-[12px] md:text-xl mx-auto'>{text}</p>
        </div>
    </div>
  )
}

export default CardCategory