import React from 'react'

const Responsive_nav_link = ({onSelect}) => {
  return (
     
                <ul className='Responsive_nav'>

                  <li onClick={() => onSelect('product')} className="click">
                    Product
                  </li>
                  <li onClick={() => onSelect('solution')}>Solutions </li>
                  <li onClick={() => onSelect('Support')}>Support</li>
                  <li onClick={() => onSelect('Learn')}>Learn</li>


                </ul>
  )
}

export default Responsive_nav_link