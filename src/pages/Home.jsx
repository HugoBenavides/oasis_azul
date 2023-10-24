import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Products />
        <Contact />
    </div>
  )
}

export default Home