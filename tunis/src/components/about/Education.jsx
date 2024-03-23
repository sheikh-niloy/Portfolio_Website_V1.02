import React from "react";

const educationContent = [
  {
    year: "2022-Present",
    degree: "Computer Science & Engineering",
    institute: "North South University",
    details: ` Ongoing Curriculum `,
  },
  {
    year: "2020",
    degree: "Higher Secondary School Certificate",
    institute: "Banophool Adibashi Green Heart College",
    details: `Science Background`,
  },
  {
    year: "2018",
    degree: "Banophool Adibashi Green Heart College",
    institute: "TUNIS HIGH SCHOOL",
    details: `Science Background`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
