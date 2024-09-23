import {
  MenuOutlined,
  LanguageOutlined,
  Person2Outlined,
  SearchOffOutlined,
  SearchOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import ProductTabComponent from "./ProductTabComponent";
import SolutionTabComponent from "./SolutionTabComponent";
import Support from "./Support";
import Learn from "./Learn";
import { Menu } from "@mui/material";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Top_header from "../Headers_Components/Top_header";
import Bottom_header from "../Headers_Components/Bottom_header";
import Responsive_nav_link from "../Headers_Components/Responsive_nav_link";

function Header() {
  const [show, setshow] = useState(false);
  const [menu, setmenu] = useState(false);


  const renderComponent = () => {
    switch (show) {
      case 'product':
        return <ProductTabComponent />;
      case 'solution':
        return <SolutionTabComponent />;
      case 'Support':
        return <Support />;
        case 'Learn':
          return <Learn />;
      case 'nav-link':
        return <Responsive_nav_link onSelect={setshow}/>

      default:
        return ;
    }
  };

  // const showcomponent = (tab) => {
  //   setshow(tab);
  // };

  const hidecomponent = () => {
    setshow(false);
  };
  return (
    <>

      <div>
        <Top_header/>
      </div>



      <div>

              <Bottom_header />
      </div>

      <div>
        {renderComponent()}
      </div>


        <div className="tab-compo">
           {renderComponent()}
        </div>

    </>
  );
}

export default Header;
