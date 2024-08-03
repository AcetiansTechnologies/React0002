import React from 'react'
import InnovationCard from './InnovationCard'

function LatestInnovations() {
  return (
    <div className='latest__innovations'>
        <h1>Our Latest Innovations</h1>
        <ul>
            <li> <InnovationCard/> </li>
            <li> <InnovationCard/> </li>
            <li> <InnovationCard/> </li>

        </ul>
    </div>
  )
}

export default LatestInnovations