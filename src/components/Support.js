import { Business, Support } from "@mui/icons-material";
import React, { useState } from "react";
import AcetiansCommunity from "./Support/AcetiansCommunity";
import Toolsandresources from "./Support/Toolsandresources";
import LicensesandContracts from "./Support/LicensesandContracts";
import Supporthome from "./Support/Supporthome";
import Contactsupport from "./Support/Contactsupport";
import ProductDownlode from "./Support/ProductDownlode.";




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
          <li onClick={() => showcomponent("Support Home")}
            className="main-page"
          >
            Support Home
          </li>
          <li onClick={() => showcomponent("Products and Downloads")}>Products and Downloads
          </li>
          <li onClick={() => showcomponent("Contact Support")}>Contact Support</li>
          <li onClick={() => showcomponent("Licenses and Contracts")}>Licenses and Contracts</li>
          <li onClick={() => showcomponent("Tools and Resources")}>Tools and Resources
          </li>
          <li onClick={() => showcomponent("Acetians Community")}>Acetians Community
          </li>
        </ul>
      </div>

      <div className="list-content">

        {isshow === false &&
          <Supporthome />}
        {isshow === "Support Home" &&
          <Supporthome />}
        {isshow === "Products and Downloads" &&
          <ProductDownlode/>}
        {isshow === "Contact Support" &&
          <Contactsupport />}
        {isshow === "Licenses and Contracts" &&
          <LicensesandContracts />}
        {isshow === "Tools and Resources" &&
          <Toolsandresources />}
        {isshow === "Acetians Community" &&
          <AcetiansCommunity />}
        
      </div>
    </div>
  );
}
export default ProductTabComponent;