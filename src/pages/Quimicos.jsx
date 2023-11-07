import React from 'react'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import CardCategory from '../components/CardCategory'
import cloro from '../assets/cloro.webp'

const Quimicos = () => {


  return (
    <div>
       <Navbar2 />
       <h1 className='text-center my-8'>Mantenie el agua limpa y lista para nadar</h1>
       <div className='max-w-[1240px] h-full m-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-2'>
        <CardCategory img={cloro} title={"Cloro"} text={"Desinfecta y limpia el agua"} />
        <CardCategory img={cloro} title={"Floculantes"} text={"Atrapa partículas suspendidas"} />
        <CardCategory img={cloro} title={"Clarificadores"} text={"Agua cristalina siempre"} />
        <CardCategory img={cloro} title={"Alguicidas"} text={"Elimina el color verdel del agua"} />
       </div>
       <Footer />
    </div>
  )
}

export default Quimicos