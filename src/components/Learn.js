import { Business, Support } from "@mui/icons-material";
import React, { useState } from "react";
import Learnhome from './Learn/Learnhome'
import Training from './Learn/Training'
import Certificate from './Learn/Cerificate'
import Events from './Learn/Events'
import Videos from'./Learn/Videos'
import Technologytrends from './Learn/Technologytrends'
import Learningres from './Learn/Learningres'





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
          <li onClick={() => showcomponent("Learn Home")}
            className="main-page"
          >
            Learn Home
          </li>
          <li onClick={() => showcomponent("Training")}>Training
          </li>
          <li onClick={() => showcomponent("Certifications and Exams")}>Certifications and Exams</li>
          <li onClick={() => showcomponent("Events and Webinars")}>Events and Webinars</li>
          <li onClick={() => showcomponent("Videos and Live Streams")}>Videos and Live Streams
          </li>
          <li onClick={() => showcomponent("Technology Trends")}>Technology Trends
          </li>
          <li onClick={() => showcomponent("Learning Resources and Assets")}>Learning Resources and Assets
          </li>
        </ul>
      </div>

      <div className="list-content">

        {isshow === false &&
          <Learnhome />}
        {isshow === "Learn Home" &&
          <Learnhome />}
        {isshow === "Training" &&
          <Training/>}
        {isshow === "Certifications and Exams" &&
          <Certificate />}
        {isshow === "Events and Webinars" &&
          <Events />}
        {isshow === "Videos and Live Streams" &&
          <Videos />}
        {isshow === "Technology Trends" &&
          <Technologytrends />}
        {isshow === "Learning Resources and Assets" &&
          <Learningres />}
        
      </div>
    </div>
  );
}
export default ProductTabComponent;