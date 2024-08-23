import React from 'react'

const Supporthome = () => {
  return (
    <div className='main-page-content'>
       <div>
           
          <div>
            <p className='head-text'>
            Product support
            </p>
            <p className='text-info'>
            Access all documentation, security notices, and quick links to support resources for all supported Cisco products.
            </p>
            <a href='#' className='links-page'>View all product support</a>
          </div>
        </div>

        <div>
           
          <div>
            <p className='head-text'>
            Software downloads
            </p>
            <p  className='text-info'>
            Download and manage new software, get updates or patches, or upgrade your current software to the latest release.
            </p>
            <a href='#' className='links-page'>View Software Central</a>
          </div>
        </div>

        <div>
           
          <div>
            <p className='head-text'>
            Licensing support

            </p>
            <p className='text-info'>
            Troubleshoot common licensing issues and leverage easy-to-follow documentation for both PAK-based or Smart Licenses.
            </p>
            <a href='#' className='links-page'>Get licensing support</a>
          </div>
        </div>
        
    </div>
  )
}

export default Supporthome
