import React from 'react'
import {Link} from 'react-router-dom';
import Accessnetworking from '../NetworkBlock/Accessnetworking';
const Network = () => {
  return (
    <div className='main-page-content'>

     <div>
     <ul>
       <Link to="/accessnetworking">Access networking</Link>
       <li>Data center and cloud networking</li>
       <li>Industrial IoT</li>
       <li>Internet, cloud, and endpoint visibility
       </li>
       <li>Network security</li>
       <li>Networking software</li>
       <li>Optics and transceivers</li>
       <li>Service provider and Cloud operator</li>
       <li>Secure Access (SSE)</li>
       <li>Silicon</li>
       <li>Wide-area networking (WAN)</li>     
      </ul>
     </div>

     <div>
      <ul>
        <li>Routers</li>
        <li>Switches</li>
        <li>Wireless</li>
        <li>Services for enterprise networking</li>
        <a href='#' className='links-page'>View all networking products</a>
      </ul>

     </div>

     <div>
      
      <ul>
        <li>
          <img src='https://www.cisco.com/content/dam/cisco-cdc/site/images/header/networking-cloud.jpg' className='content-img'></img>
        </li>
        <p className='head-text'>
        Cisco Networking Cloud
         </p>
         <p className='text-info'>
         Say goodbye to IT complexity and hello to a platform experience that's secured, assured, and simplified.
         </p>
        <a href='#' className='links-page'>Start your journey</a>
        
      </ul>
     </div>
     
 </div>
  )
}

export default Network
