import React from 'react'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'

const Cotizacion = () => {
  return (
    <div>
        <Navbar2 />
        <div className='max-w-[1240px] h-full flex justify-center m-auto px-4 py-16'>
            <h1>Cotización y Contacto</h1>
        </div>
        <Footer />
    </div>
  )
}

export default Cotizacion