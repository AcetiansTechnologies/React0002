import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const ContactUs = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="Contact-Nav">
        <h4>About</h4>
      </div>

      <div className="Contact-Body">
        <div className="Contact-top">
          <h2>Contact Acetians</h2>
          <p>
            To get global contact information, please make your selections in
            the drop-down menus.
          </p>
        </div>

        <div className="select-container">
            <div className="select-wrapper">
                <label className="select-label">Region</label>
                <select className="select-input">
                <option value="">Select Region</option>
                <option value="North America">North America</option>
                <option value="Africa">Africa</option>
                <option value="Asia Pacific">Asia Pacific</option>
                <option value="Europe">Europe</option>
                <option value="Latin America">Latin America</option>
                <option value="Middle East">Middle East</option>
                </select>
            </div>
            <div className="select-wrapper">
                <label className="select-label">County/Region/Language</label>
                <select className="select-input">
                <option value="">Select Option</option>
                <option value="Canada - Français">Canada - Français</option>
                <option value="Canada - English">Canada - English</option>
                <option value="United States - English">
                    United States - English
                </option>
                </select>
            </div>
        </div>

        <div className="Contact-Main">
          <div className="Contact-bodys">
            <div className="contact-container">
              <h1>Get in touch</h1>
              <p>
                Please reach out to sales for general inquiries or to chat with
                a live agent.
              </p>

              <div className="contact-section">
                <h4><strong>Sales inquiries</strong></h4>
                <p ><span className="Link-button">1 800 553 6387</span> press 1</p>
              </div>

              <div className="contact-section">
                <h4><strong>Order and billing</strong></h4>
                <p><span className="Link-button">1 800 553 6387</span> press 2-1</p>
              </div>

              <div className="contact-section-2">
                <p>Monday to Friday</p>
                <p>8 a.m. to 5 p.m. Eastern Time</p>
                <p>Chat is available to you 24/7.</p>
                <button className="chat-button">Chat now</button>
              </div>

              <div className="contact-section">
                <h2><strong>Support</strong></h2>
                <p>
                  Find technical support for products and licensing, access to
                  support case manager, and chat with support assistant.
                  Technical support is available 24/7.
                </p>
              </div>

              <div className="contact-section">
                <h4><strong>Enterprise and service providers</strong></h4>
                <p><span className="Link-button">1 800 553 2447</span> (U.S. and Canada)</p>
              </div>

              <div className="contact-section">
                <h4><strong>Small business</strong></h4>
                <p><span className="Link-button">1 866 606 1866</span> (U.S. and Canada)</p>
              </div>

              <div className="contact-section">
                <h4><strong>Training and certifications</strong></h4>
                <p><span className="Link-button">1 800 553 6387</span>, press 4</p>
              </div>

              <div className="contact-section">
                <a className="Link-button-2">Explore support &gt;</a>
                <a className="Link-button-2">
                  Explore certification support &gt;
                </a>
              </div>

              <div className="contact-section">
                <h1>Cisco partners</h1>
                <p>
                  Become a partner, locate a partner, get updates, and partner
                  support.
                </p>
                <a className="Link-button-2">
                  Explore Cisco partners &gt;
                </a>
                <a className="Link-button-2">Get partner support &gt;</a>
              </div>

              <div className="contact-section">
                <h1>Find a Cisco office</h1>
                <p>Find offices around the world.</p>
                <a className="Link-button-2">Locate offices &gt;</a>
              </div>

              <div className="contact-section-2">
                <h1>Corporate headquarters</h1>
                <br/> <br/> <br/> <br/>
                <p>300 East Tasman Drive</p>
                <p>San Jose, CA 95134</p>
              </div>

              <div className="contact-section-2">
                <h4><strong>Legal mailing address</strong></h4>
                <br/><br/><br/>
                <p>Cisco Systems, Inc.</p>
                <p>170 West Tasman Drive</p>
                <p>San Jose, California 95134</p>
              </div>
            </div>
          </div>

          <div className="Contact-bodys">
            <div className="request-form-container">
              <h1>Request a call from sales</h1>
              <p>We are currently experiencing delays in response times.If you require an immediate sales response – please call us 1
              800-553-6387.Otherwise, a sales advisor will call you as soon as possible.</p>

              <div>
              <h4>* Required</h4>
              <button className="login-button">Log in with your Cisco ID</button>

              </div>


                  <div class="line-container">
                    <hr class="line" />
                    <span class="text">or</span>
                    <hr class="line" />
                  </div>

              
      
              <form  className="request-form">

                <div style={{ display: 'flex',  flexDirection:'row', gap: '1rem'}}>

                    <div className="name-wrapper">
                        <label className="name-label">First name *</label>
                        <input
                            type="text"
                            id="lastName"
                            className="name-input"
                            name="lastName"
                        
                            required
                        />
                    </div>

                    <div className="name-wrapper">
                        <label className="name-label">Last name *</label>
                        <input
                            type="text"
                            id="lastName"
                            className="name-input"
                            name="lastName"
                            required
                        />
                    </div>

                </div>
                <div>
                    <div className="name-wrapper">
                        <label htmlFor="email" className="name-label">Email address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="Email-input"
                            required
                        />
                    </div>

                    <div className="name-wrapper">
                        <label htmlFor="country" className="name-label">Country *</label>
                        <select
                        id="country"
                        name="country"
                        className="country-input"
                        required
                        >
                        <option value="">Please select</option>
                        <option value="">India</option>
                        <option value="">China</option>
                        <option value="">Usa</option>
                        </select>
                    </div>

                    <div className="name-wrapper">
                        <label htmlFor="phoneNumber"  className="name-label">Phone number *</label>
                        <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="phone-input"
                    
                        required
                        />
                    </div>

                    <div className="name-wrapper">
                        <label htmlFor="country" className="name-label">Company size *</label>
                        <select
                        id="country"
                        name="country"
                        className="country-input"
                        required
                        >
                        <option value="">Please Select</option>  
                        <option value="">1 - 4</option>
                        <option value="">4 - 16</option>
                       
                        </select>
                    </div>

                    <div className="name-wrapper">
                        <label htmlFor="phoneNumber"  className="name-label">Job title (optional)
                        </label>
                        <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="phone-input"
                    
                        required
                        />
                    </div>

                    <div className="name-wrapper">
                        <label htmlFor="country" className="name-label">Company size *</label>
                        <select
                        id="country"
                        name="country"
                        className="country-input"
                        required
                        >
                        <option value="">Please Select one</option>  
                        <option value="">I'd like guidance before making a purchase.</option>
                        <option value="">I'm interested in financing options.</option>
                        <option value="">I'm conducting product research.</option>
                       
                        </select>
                    </div>

                    <div className="name-wrapper">
                        <label htmlFor="phoneNumber"  className="name-label">Comments (optional)
                        </label>
                        <textarea
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="phone-input"
                    
                        required
                        ></textarea>
                    </div>

                </div>

                <label style={{ display: 'flex',  flexDirection:'row', gap: '1rem'}} >

                    <div>
                        <input
                        type="checkbox"
                        name="emailOffers" 
                        />
                    </div>
                    <div>
                        I would like Cisco to email me the offers, promotions, and the
                        latest news regarding Cisco products and services. I know I
                        can unsubscribe at any time. Click here to learn more.
                    </div>

                </label>

                <button type="submit" className="submit-button">
                  Request a call
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr/>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
