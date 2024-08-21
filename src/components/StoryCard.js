import React from 'react'
import defaultImage from '../images/sample-image.png'

function StoryCard() {
  return (
    <div className='story__card'>
        <ul>
            <li>
            <img src={defaultImage} style={{maxHeight:'400px',width:'100%'}}/>
            </li>
            <li>
                <div className='blog_content'>
                <h2>Title of Story Card</h2>
                <h3>Description of innovation that must be truly impresssive. And the Best part should be the moral story giving</h3>   
                <a href=''>Explore Link more</a>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default StoryCard