import React from "react";

export const ImagePreview = ({ image }) => {
  return (
    <div className="ImagePreview">
      <div className="imagePart">
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
      <div className="authorPart">
        <span className="author__name">{image.user.name}</span>
      </div>
    </div>
  );
};
