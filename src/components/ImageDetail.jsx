/* eslint-disable react/prop-types */
import { TechnicalDetails } from "./TechnicalDetails";
import { ImageTags } from "./ImageTags";
import { ImageResolution } from "./ImageResolution";
import { SlugToTitle } from "./SlugToTitle";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ImageDetail = ({ image }) => {
  const [isBig, setIsBig] = useState(false);

  const handleClick = () => {
    setIsBig((prev) => !prev);
  };
  return (
    <>
      <div className="image__container">
        <SlugToTitle slug={image.slug} />
        <div className="author">
          {image.description} by{" "}
          <Link to={"/author/" + image.user.username}>
            {image.user.first_name}
          </Link>
        </div>
        <div className="ig">
          <a
            href={"https://www.instagram.com/" + image.user.instagram_username}
            target="_blank"
          >
            IG
          </a>
        </div>
        <ImageTags tags={image.tags} />
        <p>Number of Views {image.views}</p>
        <ImageResolution width={image.width} height={image.height} />
        <TechnicalDetails dataObj={image.exif} />
        <img
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
