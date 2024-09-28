import React from 'react'

const Services = () => {
  return (
    <div className='main-page-content'>

    <div>
    <ul>
      <li>Lifecycle Services</li>
      <li>Solution support</li>
      <li>Hardware support</li>
      <li>Software support
      </li>   
     </ul>
    </div>

    <div>
     <ul>
       <li>Packaged services</li>
       <li>Solution consulting
       </li>
       <li>Cisco learning</li>
       <li>Customer stories</li>
       <a href='#' className='links-page'>View all Cisco services</a>
     </ul>

    </div>

    <div>
     
     <ul>
       <li>
         <img src='https://www.cisco.com/content/dam/cisco-cdc/site/images/header/cx-default-offer-card.jpg' className='content-img'></img>
       </li>
       <p className='head-text'> 
Cisco Services
        </p>
        <p className='text-info'>
        Make sure your technology delivers tangible business value with less risk and effort. 
        </p>
       <a href='#' className='links-page'>Choose Cisco Services</a>
       
     </ul>
    </div>
    
</div>
  )
}

export default Services
