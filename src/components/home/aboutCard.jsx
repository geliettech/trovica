import React from "react";

const AboutCard = ({icon, title, desc}) => {
  return (
    <div className="flex items-center mb-6">
      <div className="about-icon mr-3">
        {icon}
      </div>
      <div className="single-about-content">
        <h4 className="page-title">{title}</h4>
        <p className="blackText__paragraph font-normal">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
