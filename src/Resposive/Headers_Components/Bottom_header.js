import React from "react";
import {
  MenuOutlined,
  LanguageOutlined,
  Person2Outlined,
  SearchOffOutlined,
  SearchOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";



const Bottom_header = ({ onSelect }) => {
  return (
    <div className="bottom__header">
      <ul>
        <li>
          <li>
            <img src="https://acetians.com/assets/img/logo1.png" />
          </li>

          <ul className="show">

            <li>
              <li >
                <SearchOutlined style={{ color: "black" }} />{" "}
              </li>

              <li className="menu-icon">
                <MenuOutlined
                  onClick={() => onSelect("nav-link")}
                />
              </li>
            </li>
          </ul>

          <ul className="bottom_header_links">
            <li onClick={() => onSelect("product")} className="click">
              Product
            </li>
            <li onClick={() => onSelect("solution")}>Solutions </li>
            <li onClick={() => onSelect("Support")}>Support</li>
            <li onClick={() => onSelect("Learn")}>Learn</li>
          </ul>
        </li>

        <li>
          <ul>
            <li> Explore Acetians </li>
            <li>
              {" "}
              <SearchOutlined style={{ color: "#bebebe" }} />{" "}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Bottom_header;
