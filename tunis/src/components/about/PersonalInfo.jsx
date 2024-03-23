import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Sheikh" },
  { meta: "last name", metaInfo: "Niloy" },
  { meta: "Age", metaInfo: "21 Years" },
  { meta: "Nationality", metaInfo: "Bangladeshi" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Dhaka, Bangladesh" },
  { meta: "phone", metaInfo: "+880 1403003558" },
  { meta: "Email", metaInfo: "ceo@idaning.com" },
  { meta: "Discord", metaInfo: "nj.niloy#4163" },
  { meta: "langages", metaInfo: "English, Bangla, Hindi" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
