import React from 'react'
import defaultImage from '../images/sample-image.png'

function InnovationCard() {
  return (
    <div className='innovation__card'>
        <img src={defaultImage} style={{maxHeight:'400px',width:'100%'}}/>
        <div className='blog_content'>
         <span class="badge badge-outlined badge-secondary">NEW</span>
        <h2>Title of Innovation</h2>
        <h3>Description of innovation that must be truly impresssive.</h3>   
        <a href=''>Explore Link more</a>
        </div>
        
    </div>
  )
}

export default InnovationCard