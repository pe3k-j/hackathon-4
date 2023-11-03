import React from "react";

export const ImageResolution = ({ width, height }) => {
  return (
    <div className="image__resolution">
      <small>
        Image Width {width} X {height}
      </small>
    </div>
  );
};
