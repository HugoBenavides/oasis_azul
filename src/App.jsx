import React from 'react'
import './index.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Quimicos from './pages/Quimicos'
import Equipos from './pages/Equipos'
import Mantenimiento from './pages/Mantenimiento'
import Construccion from './pages/Construccion'
import Cotizacion from './pages/Cotizacion'
import Cloro from './pages/Cloro'



function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quimicos' element={<Quimicos />} />
        <Route path='/equipos' element={<Equipos />} />
        <Route path='/mantenimiento' element={<Mantenimiento />} />
        <Route path='/construccion' element={<Construccion />} />
        <Route path='/cotizacion' element={<Cotizacion />} />
        <Route path='/quimicos/cloro' element={<Cloro />} />
      </Routes>
    </div>
  )
}

export default App
