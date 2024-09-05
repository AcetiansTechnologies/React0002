import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Accessnetworking from './components/NetworkBlock/Accessnetworking'
import ContactUs from './components/Contacts/ContactUs'

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Services/>}/>
      <Route path = "/accessnetworking" element={<Accessnetworking accessnetworking = "acsessnetworking"/>}/>
      <Route path = "/contactus" element={<ContactUs contactus = "contactus"/>}/>
    </Routes>
    </Router>
  )
}

export default App