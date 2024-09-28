import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";
import Management from "./Management";
import Cloud_Manag from "./Cloud_Manag";
import Switching from "./Switching";
import Wireless from "./Wireless";

const Accessnetworking = () => {
  const [isshow, setisshow] = useState(false);

  const showcomponent = (tab) => {
    setisshow(tab);
  };
  return (
    <div className="Accessnetworking">
      <Header />
      <div className="Contact-Nav">
        <h4>Products / Networking /</h4>
      </div>
      <div
        className="main_carousel"
        style={{
          backgroundImage: `url("https://www.cisco.com/content/dam/cisco-cdc/site/images/heroes/products/networking/DomainAccess-Marquee-3200x1312.jpg")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h4>
          <strong>Acetians Access Networking</strong>
        </h4>
        <h1 className="NetworkAcess-img-text">
          {" "}
          Unlock the power of unification with your access network
        </h1>
        <p>
          Simplify, automate, and secure your network experience with
          software-enabled switching and wireless solutions.
        </p>
      </div>
      <div className="Contact-Nav">
        <h4>
          <strong>Overview</strong> | Resources
        </h4>
      </div>
      <div className="Network_block_1">
        <ul>
          <li>
            <h2>Access with choice: Cloud or on-premises management</h2>
            <video className="video-network" controls>
              <source
                src="https://youtu.be/2DjGq3mvY3k?si=TQU3hZc44nhd9Qv2"
                type="video/ogg"
              ></source>
            </video>
            <p>Blaze new paths to tomorrow. Your journey, your way.</p>
          </li>
          <li className="video-side-accessnetwork">
            <h3>
              {" "}
              Bridge wired and wireless networks with an intelligent management
              platform.
            </h3>
            <li>
              <li>
                <h2>Simplify IT operations</h2>
                <p>
                  AI/ML, automation, and visibility combine to bring you a
                  flexible network management experience across multiple
                  domains, including the cloud.
                </p>
                <h2>Simplify IT operations</h2>
                <p>
                  AI/ML, automation, and visibility combine to bring you a
                  flexible network management experience across multiple
                  domains, including the cloud.
                </p>
              </li>

              <li>
                <h2>Build smart and sustainable workspaces</h2>
                <p>
                  Satisfy new hybrid work demands while meeting your
                  sustainability and safety goals, all while getting back to the
                  office.
                </p>
                <h2>Build smart and sustainable workspaces</h2>
                <p>
                  Satisfy new hybrid work demands while meeting your
                  sustainability and safety goals, all while getting back to the
                  office.
                </p>
              </li>
            </li>
          </li>
        </ul>
      </div>

      <div className="Network_block_2">
        <h1>Assemble your access network</h1>
        <ul>
          <li>
            <li onClick={() => showcomponent("Management")}>
              Management platforms
            </li>
            <li onClick={() => showcomponent("Cloud management")}>
              Cloud management for Catalyst
            </li>
            <li onClick={() => showcomponent("Switching")}>Switching</li>
            <li onClick={() => showcomponent("Wireless")}>
              Wireless solutions
            </li>
          </li>
          <li className="show-network-tab">
            {isshow === false && <Management />}

            {isshow === "Management" && <Management />}
            {isshow === "Cloud management" && <Cloud_Manag />}
            {isshow === "Switching" && <Switching />}
            {isshow === "Wireless" && <Wireless />}
          </li>
        </ul>
      </div>

      <div className="Network_block_4">
        <img
          src="https://www.cisco.com/content/dam/cisco-cdc/site/us/en/images/networking/access-networking-solutions-800x450.jpg"
          className="content-img-network"
        ></img>
        <h1>Check out our robust, easy-to-manage, and scalable solutions</h1>
        <p>
          Secure and scale your network—and manage diverse traffic, bandwidth,
          and latency demands—with an AI-enabled, platform-based architecture.
        </p>
      </div>

      <div className="Get_the_guidance_you_need">
        <h2>
          <strong>Get the guidance you need</strong>
        </h2>
        <br></br>
        <br></br>
        <ul>
          <br></br>
          <li>
            <h4>
              <strong>Cisco Identity Services Engine</strong>
            </h4>
            <h2>
              Simplify delivery of intent-based policy for users and devices
            </h2>
            <p>
              Enable a dynamic and automated approach to policy enforcement, and
              deliver highly secure network-access control.
            </p>
            <a href="#">View service</a>
          </li>
          <li>
            <h4>
              <strong>Cisco Customer Experience services</strong>
            </h4>
            <h2>Drive operational excellence with CX services</h2>
            <p>
              Turn to expert advisory services to help you digitally transform
              faster.
            </p>
            <a href="#">View service</a>
          </li>
        </ul>
      </div>

      <div className="footer-top">
        <ul>
          <li>
            <p>A cloud-first network changes everything</p>
          </li>
          <li>
            <p>
              With a cloud platform that's always on, always learning, and ready
              for what's next, you improve network performance. Listen to a
              discussion on cloud management for Catalyst, why it's important,
              and how it will help you scale and optimize your network for the
              future.
            </p>
            <button>Watch now (57:27)</button>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Accessnetworking;
