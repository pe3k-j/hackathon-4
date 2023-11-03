import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { key } from "../../keys";
import { TechnicalDetails } from "./TechnicalDetails";
import { ImageTags } from "./ImageTags";
import { ImageResolution } from "./ImageResolution";
import { SlugToTitle } from "./SlugToTitle";

export const Image = () => {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [isBig, setIsBig] = useState(false);

  const fetchImage = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos/${id}?client_id=${key}`
    );
    const data = await response.json();
    setImage(data);
    console.log(data);
  };

  const handleClick = () => {
    setIsBig((prev) => !prev);
  };

  useEffect(() => {
    fetchImage();
  }, [id]);

  return (
    <div className="image__detail">
      {!image ? (
        "Loading Image..."
      ) : (
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
          <TechnicalDetails dataObj={image.exif} />
          <img
            style={{ cursor: "pointer" }}
            src={isBig ? image.urls.regular : image.urls.small}
            alt={image.alt_description}
            onClick={handleClick}
          />
          <p>{"Taken on " + image.created_at + " at " + image.location.name}</p>
        </div>
      )}
    </div>
  );
};
