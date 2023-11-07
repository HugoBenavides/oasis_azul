import React from 'react'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import CardCloro from '../content/cardCloro'
import contentQuimicos from '../content/contentQuimicos'

const Cloro = () => {
  return (
    <div>
        <Navbar2 />
        <div className='max-w-[1240px] h-full mx-[20%] px-4 py-8 grid grid-cols-3 gap-2'>
          <CardCloro data={contentQuimicos} />
        </div>
        <Footer />
    </div>
  )
}

export default Cloro