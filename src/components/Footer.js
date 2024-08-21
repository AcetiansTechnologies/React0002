import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <ul>
        <li>
            <h2>Career</h2>
            <h6>Gain a heritage , leave a legacy</h6>
            <button className='btn btn-primary-outlined'>
              Join Us
            </button>
        </li>
        <li>
        <h2>Contact US</h2>
            <h6>What can we help you achieve</h6>
            <button className='btn btn-primary-outlined'>
              Speak With Us
            </button>
        </li>
      </ul>
      <ul>
        <li>
        <img src="https://acetians.com/assets/img/logo1.png" />
        </li>
        <li>
          <h2>Important Links</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Partners</li>
          </ul>

        </li>
        <li>
          <h4>Quick Links</h4>
          <ul>
            <li>News</li>
            <li>Blogs</li>
             
          </ul>
        </li>
        <li>

        </li>
      </ul>
      <div className='copyright_line'>
        
        <p>Acetians Technologies Private Limited</p>
        <ul>
          <li>
            Terms of Service
          </li>
          <li>
            Privacy Policy
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer