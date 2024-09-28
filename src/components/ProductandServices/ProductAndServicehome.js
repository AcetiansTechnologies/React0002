import React from 'react'

const ProductAndServicehome = () => {
  return (
    <div className='main-page-content'>
      
       <div>
            <div>
            <img src='https://www.cisco.com/content/dam/cisco-cdc/site/images/header/en-default-offer-card.jpg' className='content-img'></img>
          </div>
          <div>
            <p className='head-text'>
            Upgrade to Acetians Catalyst 8000
            </p>
            <p className='text-info'>
            Get up to 38% off branch routers when you upgrade to the Acetians Catalyst 8000, bundled with a cellular or switching module.
            </p>
            <a href='#' className='links-page'>Get offer details </a>
            <p> </p>
            <a href='#'  className='links-page'>Learn about edge routing</a>
          </div>
        </div>

        <div>
            <div>
            <img src='https://www.cisco.com/content/dam/cisco-cdc/site/images/header/security-default-offer-card.jpg' className='content-img'></img>
          </div>
          <div>
            <p className='head-text'>
            Acetians Secure free trials
            </p>
            <p  className='text-info'>
            Get started with the right security solution for you. Try out our security solutions before you buy them.
            </p>
            <a href='#' className='links-page'>Start a Free Trials</a>
          </div>
        </div>

        <div>
            <div>
            <img src='https://www.cisco.com/content/dam/cisco-cdc/site/images/header/cx-default-offer-card.jpg' className='content-img'></img>
          </div>
          <div>
            <p className='head-text'>
            Acetians CX Services
            </p>
            <p className='text-info'>
              Realize business outcomes faster with expertise and AI-driven insights to get the most out of your technologies and accelerate your success.
            </p>
            <a href='#' className='links-page'>View CX Services</a>
          </div>
        </div>
        
    </div>
  )
}

export default ProductAndServicehome
