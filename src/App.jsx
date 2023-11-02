import React from 'react'
import './index.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Quimicos from './pages/Quimicos'



function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='quimicos' element={<Quimicos />} />
      </Routes>
    </div>
  )
}

export default App
