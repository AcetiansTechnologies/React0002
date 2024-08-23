import { Business } from "@mui/icons-material";
import React, { useState } from "react";
import Soluction from './Solutions/Soluction'
import Busines from './Solutions/Busines'
import Freatured from './Solutions/Freatured'
import Industry from './Solutions/Industry'
import Servicepro from "./Solutions/Servicepro";
import Technology  from './Solutions/Technology'


function ProductTabComponent() {
  const [isshow, setisshow] = useState(false);
  const [Color, setColor] = useState(false);
  const showcomponent = (tab) => {
    setisshow(tab);
    if (Color === 'lightcoral') {
      return;
    }
    setColor('lightcoral');
  };
  return (
    <div className="tab">
      <div className="tab-list">
        <ul className="list-link">
          <li onClick={() => showcomponent("Solutions Home")}
            className="main-page"
          >
            Solutions Home
          </li>
          <li onClick={() => showcomponent("Featured Solutions")}>Featured Solutions
          </li>
          <li onClick={() => showcomponent("By Industry")}>By Industry</li>
          <li onClick={() => showcomponent("By Technology")}>By Technology</li>
          <li onClick={() => showcomponent("By Business Type")}>
            By Business Type
          </li>
          <li onClick={() => showcomponent("For Service Providers")}>For Service Providers
          </li>
        </ul>
      </div>

      <div>

        {isshow === false &&
          <Soluction />}
        {isshow === "Solutions Home" &&
          <Soluction />}
        {isshow === "Featured Solutions" &&
          <Freatured/>}
        {isshow === "By Industry" &&
          <Industry />}
        {isshow === "By Technology" &&
          <Technology />}
        {isshow === "By Business Type" &&
          <Busines/>}
        {isshow === "For Service Providers" &&
          <Servicepro />}
        
      </div>
    </div>
  );
}
export default ProductTabComponent;