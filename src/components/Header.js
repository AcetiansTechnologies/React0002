import { LanguageOutlined, Person2Outlined, SearchOffOutlined, SearchOutlined, VerifiedUserOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import ProductTabComponent from './ProductTabComponent';
import SolutionTabComponent from './SolutionTabComponent';
import Support from './Support';
import Learn from './Learn'

function Header() {
  
  const [show, setshow] = useState(false);

  
  const showcomponent = (tab) => {
    setshow(tab);
  };

  
  const hidecomponent = () => {
    setshow(false);
  };
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
          <li onClick={() => showcomponent('product')} className='click' >Product & Services</li>
          <li  onClick={()=>showcomponent("solution")}>Solutions </li>
          <li  onClick={()=>showcomponent('Support')}>Support</li>
          <li onClick={()=>showcomponent('Learn')}>Learn</li>
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
    {show === 'product' && (
        <div className='tab-compo'>

            <div>
              <ProductTabComponent/>
            </div>
            <div>
            <button className='close-button' onClick={hidecomponent}><img className='close-button-1' src='https://www.svgrepo.com/show/12848/x-symbol.svg'></img></button>
            </div>

        </div>
    )}
      {show === 'solution' && (

        <div className='tab-compo'>
            <div>
              <SolutionTabComponent/>
            </div>
            <div>
              <button className='close-button' onClick={hidecomponent}><h1>X</h1></button>
            </div>
        </div>

      )}
      {show === 'Support' && (
        <div className='tab-compo'> 
          <div>
              <Support/>
            </div>
            <div>
              <button className='close-button-1' onClick={hidecomponent}><img className='close-button-1' src='https://www.svgrepo.com/show/12848/x-symbol.svg'></img></button>
            </div>
        </div>
       
      )}
      {show === 'Learn' && (
        <div className='tab-compo'>
           <div>
              <Learn/>
            </div>
            <div>
              <button className='close-button' onClick={hidecomponent}><h1>X</h1></button>
            </div>
        </div>
          
      )}
      
    </> 
  )
}

export default Header