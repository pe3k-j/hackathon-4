import React from "react";

export const TechnicalDetails = ({
  dataObj,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div
      className="photo__details"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
