import { LanguageOutlined, Person2Outlined, SearchOffOutlined, SearchOutlined, VerifiedUserOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import ProductTabComponent from './ProductTabComponent';
import SolutionTabComponent from './SolutionTabComponent';

function Header() {
  const [tabVisble,setTabVisible]=useState(false);
  const [currentDetailedTab,setCurrentDetailedTab]=useState('');
  const handleTabVisiblity=(tab)=>{
     
    setTabVisible(!tabVisble);
    setCurrentDetailedTab(tab)
  }
  return (
    
    <>
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
          <li onClick={()=>handleTabVisiblity("product")}>Product & Services</li>
          <li  onClick={()=>handleTabVisiblity("solution")}>Solutions </li>
          <li  onClick={()=>handleTabVisiblity()}>Support</li>
          <li onClick={()=>handleTabVisiblity()}>Learn</li>
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

    <div className={tabVisble==true?`tab___details__visible`:`tab__details`}>
      {currentDetailedTab==''&&<></>}
      {currentDetailedTab=='product'&& <ProductTabComponent/>}
      {currentDetailedTab=='solution'&& <SolutionTabComponent/>}
          
    </div>  
    </> 
    </>
  )
}

export default Header