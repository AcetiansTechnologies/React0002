import React from 'react'

const Training = () => {
  return (
    <div className='main-page-content'>
      
    <div>
      <ul>
        <h3><strong>Professionals</strong></h3>
        <li>Individuals</li>
        <li>Enterprise</li>
        <li>Developers (DevNet)</li>
        <li>Partners (SalesConnect)</li>
        <br></br>

        <h3><strong>Students</strong></h3>
        <li>Networking Academy</li>
        <li>Skills for All (free)</li>
        <br></br>
        <a href='#' className='links-page' >
        View all training and certifications</a>
      </ul>
   </div>
     <div>
     <ul>
      <h3><strong>Product Training</strong></h3>
        <li>Duo</li>
        <li>Meraki</li>  
        <br></br>
        <h3><strong>Umbrella</strong></h3>
        <li>Webex</li>
      </ul>
     </div>

     <div>
      
      <ul>
        <li>
          <img src='https://www.cisco.com/content/dam/cisco-cdc/site/images/header/learn-cisco-u.jpg' className='content-img'></img>
        </li>
        
        <p className='head-text'>
        
Tech training, tailored to you
         </p>
         <p className='text-info'>
         Work toward a specific role or certification, deploy or support a technology solution, or enhance your career progress with Cisco U. 
         </p>
      
        <a href='#' className='links-page'>Explore Cisco U</a>
        
      </ul>
     </div>
     
 </div>
  )
}
export default Training
