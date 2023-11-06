import React from 'react'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import CardQuimicos from '../content/cardQuimicos'
import contentQuimicos from '../content/contentQuimicos'

const Quimicos = () => {


  return (
    <div>
       <Navbar2 />
       <h1>Cloro, Floculantes y Clarificadores</h1>
       <div className='max-w-[1240px] h-full justify-center m-auto px-4 py-16'>
          <div>
            {contentQuimicos.map((contentQuimicos, id)=>(
              <CardQuimicos
                key={id}
                productName={contentQuimicos.productName}
                img={contentQuimicos.img}
                size={contentQuimicos.size}
                messureQuantity={contentQuimicos.messureQuantity}
                messure={contentQuimicos.messure}
                description={contentQuimicos.description}
                symbol={contentQuimicos.symbol}
              />
            ))}
          </div>
       </div>
       <Footer />
    </div>
  )
}

export default Quimicos