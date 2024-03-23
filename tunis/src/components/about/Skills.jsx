import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "100", skillName: "HTML" },
  { skillClass: "p50", skillPercent: "50", skillName: "JAVASCRIPT" },
  { skillClass: "p80", skillPercent: "80", skillName: "CSS" },
  { skillClass: "p80", skillPercent: "80", skillName: "PHP" },
  { skillClass: "p80", skillPercent: "80", skillName: "C" },
  { skillClass: "p80", skillPercent: "80", skillName: "C++" },
  { skillClass: "p85", skillPercent: "85", skillName: "Python" },
  { skillClass: "p70", skillPercent: "70", skillName: "Java" },
  { skillClass: "p50", skillPercent: "50", skillName: "Server Management" },
  { skillClass: "p50", skillPercent: "50", skillName: "Game Development" },
  { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  { skillClass: "p95", skillPercent: "95", skillName: "Adobe Photoshop" },
  { skillClass: "p90", skillPercent: "90", skillName: "Adobe Premiere Pro" },
  { skillClass: "p90", skillPercent: "90", skillName: "Adobe Illustrator" },
  { skillClass: "p75", skillPercent: "75", skillName: "FL Studio" },
  
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
