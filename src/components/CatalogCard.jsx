import React from 'react'

const CatalogCard = () => {
  return (
    <div className='relative cursor-pointer transition'>
        <img className='rounded-md w-[390px] h-[260px]' src={arena} alt="arena" />
        <div className='bg-gray-800/30 text-white md:bg-transparent md:hover:bg-gray-800/50 absolute w-full h-full top-0 left-0 rounded-md md:text-transparent md:hover:text-white'>
            <p className='font-bold left-4 bottom-4 text-xl md:text-2xl absolute'>Arena sílica para filtro</p>
        </div>
    </div>
  )
}

export default CatalogCard