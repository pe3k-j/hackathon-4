import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { key } from "../../keys";
import { ImageDetail } from "./ImageDetail";

export const Image = () => {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [responseStatus, setResponseStatus] = useState(0);

  const fetchImage = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos/${id}?client_id=${key}`
    );
    setResponseStatus(response.status);
    const data = await response.json();
    setImage(data);
    console.log(response);
  };

  useEffect(() => {
    fetchImage();
  }, [id]);

  return (
    <div className="image__detail">
      {responseStatus > 400 && "Network Error"}
      {!image ? "Loading Image..." : <ImageDetail image={image} />}
    </div>
  );
};
