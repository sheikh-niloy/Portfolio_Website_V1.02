import React from "react";

const experienceContent = [
  {
    year: "   2022 - Present",
    position: " CEO",
    compnayName: "Idaning",
    details: `Currently working as the CEO of the company`,
  },
  {
    year: "2021 - Present",
    position: "Web Developer & Intern Trainer",
    compnayName: "Beater Gaming",
    details: `Build and managed the entire website and also trained the interns`,
  },
  {
    year: "2022 - Present",
    position: "Consultant",
    compnayName: "Sitechai.com",
    details: `Currently working as a senior consultant in sitechai.com`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
