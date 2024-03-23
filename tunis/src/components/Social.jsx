import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/sheikhnajmulhossainniloy/",
  },
  { iconName: "fa fa-twitter", link: "https://twitter.com/SheikhNHNiloy" },
  {
    iconName: "fa fa-github",
    link: "https://github.com/sheikh-niloy",
  },
  { iconName: "fa fa-instagram", link: "https://www.instagram.com/snh_niloy/" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
