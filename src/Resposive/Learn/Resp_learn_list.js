import React from 'react'

const Resp_learn_list = ({onSelect}) => {
  return (
    <div>
       
        <ul className="Resp_list_link">
        <h2><strong>Learn</strong></h2>
          <li onClick={() => onSelect("Resp_Learn Home")}
            className="main-page"
          >
            Learn Home
          </li>
          <li onClick={() => onSelect("Resp_Training")}>Training
          </li>
          <li onClick={() => onSelect("Resp_Certifications and Exams")}>Certifications and Exams</li>
          <li onClick={() => onSelect("Resp_Events and Webinars")}>Events and Webinars</li>
          <li onClick={() => onSelect("Resp_Videos and Live Streams")}>Videos and Live Streams
          </li>
          <li onClick={() => onSelect("Resp_Technology Trends")}>Technology Trends
          </li>
          <li onClick={() => onSelect("Resp_Learning Resources and Assets")}>Learning Resources and Assets
          </li>
        </ul>
      </div>
  )
}

export default Resp_learn_list