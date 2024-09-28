import React from 'react'

const Responsive_nav_link = ({onSelect}) => {
  return (
     
                <ul className='Responsive_nav'>

                  <li onClick={() => onSelect('Resp_Product_list')} className="click">
                    Product
                  </li>
                  <li onClick={() => onSelect('Resp_Solution_list')}>Solutions </li>
                  <li onClick={() => onSelect('Resp_Support_list')}>Support</li>
                  <li onClick={() => onSelect('Resp_Learn_list')}>Learn</li>


                </ul>
  )
}

export default Responsive_nav_link