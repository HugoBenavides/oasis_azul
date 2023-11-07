import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Contact from '../components/Contact'
import Catalog from '../components/Catalog'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Carousel /> 
        <Products />
        <Contact />
        <Catalog />
        <Footer />
    </div>
  )
}

export default Home