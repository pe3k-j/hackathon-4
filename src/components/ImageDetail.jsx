/* eslint-disable react/prop-types */
import { TechnicalDetails } from "./TechnicalDetails";
import { ImageTags } from "./ImageTags";
import { ImageResolution } from "./ImageResolution";
import { SlugToTitle } from "./SlugToTitle";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ImageDetail = ({ image }) => {
  const [isBig, setIsBig] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleClick = () => {
    setIsBig((prev) => !prev);
    console.log(isBig);
    console.log(image.created_at);
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <div className="image__container">
        <SlugToTitle slug={image.slug} />
        <p>
          {image.description} by{" "}
          <Link to={"/author/" + image.user.id}>{image.user.first_name}</Link>
          <br />{" "}
          <a
            href={
              "https://www.instagram.com/discoverneom/" +
              image.user.instagram_username
            }
          >
            IG
          </a>
        </p>
        <ImageTags tags={image.tags} />
        <p>Number of Views {image.views}</p>
        <ImageResolution width={image.width} height={image.height} />
        {isHover && <TechnicalDetails dataObj={image.exif} />}
        <img
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "pointer" }}
          src={isBig ? image.urls.regular : image.urls.small}
          alt={image.alt_description}
          onClick={handleClick}
        />
        <p>
          Taken on {image.created_at || "Na"} at {image.location.name || "Na"}
        </p>
      </div>
    </>
  );
};
