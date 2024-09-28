import React, { useState } from "react";
import ProductAndServicehome from "../components/ProductandServices/ProductAndServicehome";
import Network from "../components/ProductandServices/Network";
import Software from "../components/ProductandServices/Software";
import IOT from "../components/ProductandServices/IOT";
import MobileAndWire from "../components/ProductandServices/MobileAndWire";
import Security from "../components/ProductandServices/Security";
import Cloud from "../components/ProductandServices/Cloud";
import Collaboration from "../components/ProductandServices/Collaboration";
import Services from "../components/ProductandServices/Services";
import DataCenter from "../components/ProductandServices/DataCenter";
function ProductTabComponent() {
  const [isshow, setisshow] = useState(false);
  const [Color,setColor] = useState(false);
  


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
          <li
            onClick={() => showcomponent("Products and Services Home")}
            className="main-page"
          >
            Products and Services Home
          </li>
          <li onClick={() => showcomponent("Networking")}>Networking</li>
          <li onClick={() => showcomponent("Security")}>Security</li>
         
          <li onClick={() => showcomponent("IOT")}>Internet of Things (IoT)</li>
          <li onClick={() => showcomponent("MobAndWire")}>
            Mobility and Wireless
          </li>
        
          <li onClick={() => showcomponent("Collaboration")}>Collaboration</li>
          <li onClick={() => showcomponent("DataCenter")}>Data Center</li>
          <li onClick={() => showcomponent("Cloud")}>Cloud and Computing</li>
          <li onClick={() => showcomponent("Software")}>Software</li>
          <li onClick={() => showcomponent("Services")}>Services (CX)</li>
        </ul>
      </div>

      <div className="list-content">

        {isshow === false && <ProductAndServicehome />}

        {isshow === "Products and Services Home" && <ProductAndServicehome />}
        {isshow === "Networking" && <Network />}
        {isshow === "Software" && <Software />}
        {isshow === "IOT" && <IOT />}
        {isshow === "MobAndWire" && <MobileAndWire />}
        {isshow === "Security" && <Security/>}
        {isshow === "Collaboration" && <Collaboration />}
        {isshow === "DataCenter" && <DataCenter />}
        {isshow === "Cloud" && <Cloud />}
        {isshow === "Services" && <Services />}
        
      </div>
    </div>
  );
}

export default ProductTabComponent;
