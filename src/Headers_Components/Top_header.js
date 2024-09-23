import React from 'react'
import {
    MenuOutlined,
    LanguageOutlined,
    Person2Outlined,
    SearchOffOutlined,
    SearchOutlined,
    VerifiedUserOutlined,
  } from "@mui/icons-material";
  import { Link } from 'react-router-dom';

const Top_header = () => {
  return (

    <div className="top__header">
    <ul>
      <Link
        to="/contactus"
        style={{ textDecoration: "none", color: "black" }}
      >
        Contact
      </Link>
      <li>Partners</li>
      <li>
        {" "}
        <Person2Outlined style={{ color: "gray" }} /> Login
      </li>
      <li>
        {" "}
        <LanguageOutlined style={{ color: "gray" }} /> EN US
      </li>
    </ul>
  </div>
  )
}

export default Top_header