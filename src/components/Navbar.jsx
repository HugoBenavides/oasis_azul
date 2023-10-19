import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <h1>Albercas Oasis Azul</h1>    
      </div>
      <ul className='flex'>
        <li>Químicos</li>
        <li>Equipos</li>
        <li>Mantenimiento</li>
        <li>Construcción</li>
        <li>Cotización</li>
      </ul>
      <div className='flex'>
        <BsPerson className='icon' />
        <BiSearch className='icon' />
      </div>
    </div>
  )
}

export default Navbar