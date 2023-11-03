import React from "react";

export const TechnicalDetails = ({ dataObj }) => {
  return (
    <div className="photo__details">
      <ul>
        {Object.keys(dataObj).map((attribute, index) => (
          <li key={index}>
            {attribute}: {dataObj[attribute] || "Na"}
          </li>
        ))}
      </ul>
    </div>
  );
};
