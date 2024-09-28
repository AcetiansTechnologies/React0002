import React from 'react'

const Resp_Support_LIst = ({onSelect}) => {
  return (
    <div>
        <ul className="Resp_list_link">
          <h2><strong>Support</strong></h2>
          <li onClick={() => onSelect("Resp_Support_Home")}
            className="main-page"
          >
            Support Home
          </li>
          <li onClick={() => onSelect("Resp_Products_and_Downloads")}>Products and Downloads
          </li>
          <li onClick={() => onSelect("Resp_Contact_Support")}>Contact Support</li>
          <li onClick={() => onSelect("Resp_Licenses_and_Contracts")}>Licenses and Contracts</li>
          <li onClick={() => onSelect("Resp_Tools_and_Resources")}>Tools and Resources
          </li>
          <li onClick={() => onSelect("Resp_Acetians_Community")}>Acetians Community
          </li>
        </ul>
      </div>
  )
}

export default Resp_Support_LIst