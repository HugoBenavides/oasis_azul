import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Contact from '../components/Contact'
import Catalog from '../components/Catalog'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Products />
        <Contact />
        <Catalog />
    </div>
  )
}

export default Home