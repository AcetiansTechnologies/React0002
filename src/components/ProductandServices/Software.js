import React from 'react'

const Software = () => {
  return (
    <div className='main-page-content'>
      
    <div>
      <ul>
        <h3><strong>Networking</strong></h3>
        <li>Catalyst Center</li>
        <li>Catalyst SD-WAN Manager</li>
        <li>IoT Operations Dashboard</li>
        <li>Meraki Platform</li>
        <li>Nexus Dashboard</li>
        <li>All networking software</li>
        <br></br>

        <h3><strong>Sequrity</strong></h3>
        <li>Cyber Vision</li>
        <li>Secure Equipment Access</li>
        <li>Security Cloud</li>
      </ul>
   </div>
     <div>
     <ul>
      <h3><strong>Full-Stack Observability</strong></h3>
        <li>AppDynamics</li>
        <li>ThousandEyes</li>  
        <br></br>
        <h3><strong>Collaboration</strong></h3>
        <li>Webex by Cisco</li>
        <br></br>
        <h3><strong>Computing</strong></h3>
        <li>Intersight</li>
        <br></br>
        <li>Explore Cisco buying programs</li>
        <li>Download software and manage licenses</li> 
        <br></br>
       <a href='#' className='links-page' >View all software</a>
      </ul>
     </div>

     <div>
      
      <ul>
        <li>
          <img src='https://www.cisco.com/content/dam/cisco-cdc/site/images/header/software-trials-demos.jpg' className='content-img'></img>
        </li>
        
        <p className='head-text'>
        Free trials and demos
         </p>
         <p className='text-info'>
         View and sign up for over 100 products and portfolio solutions for free. 
         </p>
      
        <a href='#' className='links-page'>Explore trials and demos</a>
        
      </ul>
     </div>
     
 </div>
  )
}

export default Software
