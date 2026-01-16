import React from "react";

const AboutCard = ({icon, title, desc}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="text-3xl text-teal-600 border border-teal-600 rounded-full p-2">
        {icon}
      </div>
      <div>
        <h4 className="page-title mb-4">{title}</h4>
        <p className="blackText__paragraph">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
