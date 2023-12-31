import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest, FaYoutube} from 'react-icons/fa'

const Navbar = () => {

  const [nav,setNav] = useState(false);
  const [logo,setLogo] = useState(false);

  const handleNav = ()=>{
    setNav(!nav)
    setLogo(!logo)
  }

  //console.log(nav)

  return (
    <div className='flex justify-between items-center h-20 px-4 absolute z-10 bg-gray-400/10 w-full'>
      <div>
        {logo ? <></> : <h1 className='text-white'>Albercas Oasis Azul</h1>   }
      </div>
      <ul className='hidden md:flex text-white cursor-pointer'>
        <li className='hover:underline hover:font-bold decoration-white transition'><Link to='/quimicos'>Químicos</Link></li>
        <li className='hover:underline hover:font-bold decoration-white transition'><Link to='/equipos'>Equipos</Link></li>
        <li className='hover:underline hover:font-bold decoration-white transition'><Link to='/mantenimiento'>Mantenimiento</Link></li>
        <li className='hover:underline hover:font-bold decoration-white transition'><Link to='/construccion'>Construcción</Link></li>
        <li className='hover:underline hover:font-bold decoration-white transition'><Link to='/equipos'>Cotización</Link></li>
      </ul>
      <div className='hidden md:flex text-white'>
        <BiSearch className='mr-2' size={20} />
        <Link to='/login'><BsPerson size={20} /></Link>
        
      </div>
      {/*Hamburguer*/}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} className='text-white'/>    }
        
      </div>
      {/*Mobile*/}
      <div className={nav ? 'absolute top-0 left-0 w-full bg-gray-100/90 px-4 flex flex-col' : 'absolute left-[-100%]' }>
        <ul>
          <h1><Link to='/'>Albercas Oasis Azul</Link></h1>
          <li className='border-b-2 border-blue-800'><Link to='/quimicos'>Químicos</Link></li>
          <li className='border-b-2 border-blue-800'><Link to='/equipos'>Equipos</Link></li>
          <li className='border-b-2 border-blue-800'><Link to='/mantenimiento'>Mantenimiento</Link></li>
          <li className='border-b-2 border-blue-800'><Link to='/construccion'>Construcción</Link></li>
          <li className='border-b-2 border-blue-800'><Link to='/cotizacion'>Cotización</Link></li>
          <div className='flex flex-col'>
            <button className='my-2'>Search</button>
            <Link to='/login'><button className="mb-2 w-full">Account</button></Link>
          </div>
          <div className='flex justify-between'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaInstagram className='icon' />
            <FaPinterest className='icon' />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar