import { LanguageOutlined, Person2Outlined, SearchOffOutlined, SearchOutlined, VerifiedUserOutlined } from '@mui/icons-material'
import React from 'react'

function Header() {
  return (
    <>
    <div className='top__header'>
       <ul>
        <li>Contact</li>
        <li>Partners</li>
        <li> <Person2Outlined style={{color:'gray'}}/> Login</li>
        <li> <LanguageOutlined  style={{color:'gray'}} /> EN US</li>
        </ul>
    </div>
    <div className='bottom__header'>
    <ul>
        <li>
          <ul>
          <li><img src="https://acetians.com/assets/img/logo1.png" /> </li>
          <li>Product & Services</li>
          <li>Solutions </li>
          <li>Support</li>
          <li>Learn</li>
          </ul>
        </li>
        <li>
          <ul> 
          <li> Explore Acetians </li>
          <li> Search  <SearchOutlined style={{color:'#bebebe'}}/> </li>
          </ul>
        </li>
    </ul>
    </div>
    </>
  )
}

export default Header