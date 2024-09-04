import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Accessnetworking from './components/NetworkBlock/Accessnetworking'

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Services/>}/>
      <Route path = "/accessnetwork" element={<Accessnetworking accessnetworking = "acsessnetwork"/>}/>
    </Routes>
    </Router>
  )
}

export default App