import React from 'react'

const Learnhome = () => {
  return (
    <div className='main-page-content'>
       <div>
            <div>
            <img src='https://www.cisco.com/content/dam/cisco-cdc/header/digital-learning-default.jpg' className='content-img'></img>
          </div>
          <div>
            <p className='head-text'>
            Cisco Digital Learning
            </p>
            <p className='text-info'>
            Access our online product, technology, and certification courses, with video lectures and hands-on labs—anytime, anywhere.
            </p>
            <a href='#' className='links-page'>Access now</a>
          </div>
        </div>

        <div>
            <div>
            <img src='https://www.cisco.com/content/dam/cisco-cdc/site/images/header/training-bootcamps-default.jpg' className='content-img' alt='Server'></img>
          </div>
          <div>
            <p className='head-text'>
            Training bootcamps
            </p>
            <p  className='text-info'>
            Taliored to your team's skills and goals, this intensive training program gets your team the skills they need to help your organization realize its potential.
            </p>
            <a href='#' className='links-page'>Join now</a>
          </div>
        </div>

        <div>
            <div>
            <img src='https://www.cisco.com/content/dam/cisco-cdc/site/images/header/events-calendar-default.jpg' className='content-img'></img>
          </div>
          <div>
            <p className='head-text'>
            Events
            </p>
            <p className='text-info'>
            Join us to take advantage of the latest networking opportunities with Cisco customers, partners, employees, and subject-matter experts.
            </p>
            <a href='#' className='links-page'>Explore now</a>
          </div>
        </div>
        
    </div>
  )
}

export default Learnhome
