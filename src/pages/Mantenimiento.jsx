import React from 'react'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'

const Mantenimiento = () => {
  return (
    <div>
        <Navbar2 />
        <div className='max-w-[1240px] h-full m-auto flex justify-center px-4 py-16'>
            <h1>Servicios de Limpieza y Mantenimiento</h1>
        </div>
        <Footer />
    </div>
  )
}

export default Mantenimiento