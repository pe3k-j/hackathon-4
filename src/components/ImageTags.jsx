import React from "react";

export const ImageTags = ({ tags }) => {
  return (
    <div className="image__tags">
      {tags.map((el) => (
        <small key={el.title}>#{el.title} </small>
      ))}
    </div>
  );
};
