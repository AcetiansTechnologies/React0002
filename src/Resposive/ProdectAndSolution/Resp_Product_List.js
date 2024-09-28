import React from 'react'

const List_Link = ({onSelect}) => {
  return (
    <div>
        
        <ul className="Resp_list_link">
          <h2><strong>Product And Service</strong></h2>
          <li
            onClick={() => onSelect("Resp_Products and Services Home")}
            className="main-page"
          >
            Products and Services Home
          </li>
          <li onClick={() => onSelect("Resp_Networking")}>Networking</li>
          <li onClick={() => onSelect("Resp_Security")}>Security</li>
          
          <li onClick={() => onSelect("Resp_IOT")}>Internet of Things (IoT)</li>
          <li onClick={() => onSelect("Resp_MobAndWire")}>
            Mobility and Wireless
          </li>
          
          <li onClick={() => onSelect("Resp_Collaboration")}>Collaboration</li>
          <li onClick={() => onSelect("Resp_DataCenter")}>Data Center</li>
          <li onClick={() => onSelect("Resp_Cloud")}>Cloud and Computing</li>
          <li onClick={() => onSelect("Resp_Software")}>Software</li>
          <li onClick={() => onSelect("Resp_Services")}>Services (CX)</li>
        </ul>
    </div>
  )
}

export default List_Link