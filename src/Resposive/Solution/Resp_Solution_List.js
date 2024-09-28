import React from 'react'

const Resp_Solution_List = ({onSelect}) => {
  return (
    <div>
      
    <ul className="Resp_list_link">
      <h2><strong>Solution</strong></h2>
      <li onClick={() => onSelect("Resp_Solutions_Home")}
        className="main-page"
      >
        Solutions Home
      </li>
      <li onClick={() => onSelect("Res_Featured_Solutions")}>Featured Solutions
      </li>
      <li onClick={() => onSelect("Resp_By_Industry")}>By Industry</li>
      <li onClick={() => onSelect("Resp_By_Technology")}>By Technology</li>
      <li onClick={() => onSelect("Resp_By_Business_Type")}>
        By Business Type
      </li>
      <li onClick={() => onSelect("Resp_For_Service_Providers")}>For Service Providers
      </li>
    </ul>
  </div>
  )
}

export default Resp_Solution_List