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
import SolutionTabComponent from "../components/SolutionTabComponent";
import Support from "./Support";
import Learn from "../components/Learn";
import { Menu } from "@mui/material";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Top_header from "../Resposive/Headers_Components/Top_header";
import Bottom_header from "../Resposive/Headers_Components/Bottom_header";
import Responsive_nav_link from "../Resposive/Headers_Components/Responsive_nav_link";
import Resp_Product_List from "../Resposive/ProdectAndSolution/Resp_Product_List";
import Resp_Solution_List from "../Resposive/Solution/Resp_Solution_List";
import Resp_Support_List from "../Resposive/Support/Resp_Support_List";
import Resp_learn_list from "../Resposive/Learn/Resp_learn_list";
import Network from "./ProductandServices/Network";
import Software from "./ProductandServices/Software";
import ProductAndServicehome from "./ProductandServices/ProductAndServicehome";
import IOT from "./ProductandServices/IOT";
import MobileAndWire from "./ProductandServices/MobileAndWire";
import Collaboration from "./ProductandServices/Collaboration";
import DataCenter from "./ProductandServices/DataCenter";
import Cloud from "./ProductandServices/Cloud";
import Services from "./ProductandServices/Services";
import Soluction from "./Solutions/Soluction";
import Freatured from "./Solutions/Freatured";
import Industry from "./Solutions/Industry";
import Technology from "./Solutions/Technology";
import Busines from "./Solutions/Busines";
import Servicepro from "./Solutions/Servicepro";
import Toolsandresources from "./Support/Toolsandresources";
import Contactsupport from "./Support/Contactsupport";
import LicensesandContracts from "./Support/LicensesandContracts";
import ProductDownlode from "./Support/ProductDownlode.";
import Supporthome from "./Support/Supporthome";
import AcetiansCommunity from "./Support/AcetiansCommunity";
import Learnhome from "./Learn/Learnhome";
import Training from "./Learn/Training";
import Cerificate from "./Learn/Cerificate";
import Videos from "./Learn/Videos";
import Technologytrends from "./Learn/Technologytrends";
import Learningres from "./Learn/Learningres";
import Events from "./Learn/Events";
import Security from "./ProductandServices/Security";

function Header() {
  const [show, setshow] = useState(false);

  const renderComponent = () => {
    switch (show) {
      case "product":
        return <ProductTabComponent />;
      case "solution":
        return <SolutionTabComponent />;
      case "Support":
        return <Support />;
      case "Learn":
        return <Learn />;
      case "nav-link":
        return <Responsive_nav_link onSelect={setshow} />;
      case "Resp_Product_list":
        return <Resp_Product_List onSelect={setshow} />;
      case "Resp_Solution_list":
        return <Resp_Solution_List onSelect={setshow} />;
      case "Resp_Support_list":
        return <Resp_Support_List onSelect={setshow} />;
      case "Resp_Learn_list":
        return <Resp_learn_list onSelect={setshow}/>;



        

      
      case "Resp_Products and Services Home":
        return <ProductAndServicehome />;
      case "Resp_Networking":
        return <Network />;
      case 'Resp_Security':
        return  <Security/>;
      case "Resp_Software":
        return <Software />;
      case "Resp_IOT":
        return <IOT />;
      case "Resp_MobAndWire":
        return <MobileAndWire />;
      case "Resp_Collaboration":
        return <Collaboration />;
      case "Resp_DataCenter":
        return <DataCenter />;
      case "Resp_Cloud":
        return <Cloud />;
      case "Resp_Services":
        return <Services />;




        
      case "Resp_Solutions_Home":
        return <Soluction/>
      case "Res_Featured_Solutions":
        return <Freatured/>;
      case "Resp_By_Industry":
        return <Industry/>;
      case "Resp_By_Technology":
        return <Technology/>;
      case 'Resp_By_Business_Type':
        return <Busines/>;
      case 'Resp_For_Service_Providers':
        return <Servicepro/>;


        case "Resp_Support_Home":
          return <Supporthome/>;
        case "Resp_Products_and_Downloads":
          return <ProductDownlode/>;
        case "Resp_Contact_Support":
          return <Contactsupport/>;
        case "Resp_Licenses_and_Contracts":
          return <LicensesandContracts/>;
        case 'Resp_Tools_and_Resources':
          return <Toolsandresources/>;
        case 'Resp_Acetians_Community':
          return <AcetiansCommunity/>;


        
        
        case "Resp_Learn Home":
          return <Learnhome/>;
        case "Resp_Training":
          return <Training/>;
        case "Resp_Certifications and Exams":
          return <Cerificate/>;
        case "Resp_Events and Webinar":
          return <Events/>;
        case 'Resp_Videos and Live Streams':
          return <Videos/>;
        case 'Resp_Technology Trends':
          return <Technologytrends/>;
        case 'Resp_Learning Resources and Assets':
          return <Learningres/>;

      
      

      default:
        return null;
    }
  };

  const hidecomponent = () => {
    setshow(false);
  };

  return (
    <>
      <div>
        <Top_header />
      </div>

      <div>
        <Bottom_header onSelect={setshow} />
      </div>

      <div className="tab-compo">
        {show && (
          <div className="component-wrapper">
            <button className="closes-button" onClick={hidecomponent}>
              &times;
            </button>
            {renderComponent()}
          </div>
        )}

        <div></div>
      </div>
    </>
  );
}

export default Header;
