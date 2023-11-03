import { useEffect, useState } from "react";
import { key } from "../../keys.js";
import { Link, useParams } from "react-router-dom";

export const Author = () => {
  const [author, setAuthor] = useState({});
  const [pictures, setPictures] = useState(null);
  const { id } = useParams();

  const loadAuthor = async () => {
    const response = await fetch(
      "https://api.unsplash.com/users/" + id + "?client_id=" + key,
    );
    const data = await response.json();
    setAuthor(data);
  };

  const loadPictures = async () => {
    const response = await fetch(
      "https://api.unsplash.com/photos/random/?username=" +
        id +
        "&count=4&client_id=" +
        key,
    );
    const data = await response.json();
    setPictures(data);
  };

  useEffect(() => {
    loadAuthor();
    loadPictures();
  }, []);

  return (
    <div className="Author">
      <div className="author-container">
        <div className="author-info">
          <h1>{author.name}</h1>
          <a href={author.portfolio_url} target="blank">
            Full portfolio
          </a>
          <p>
            Lives in <strong>{author.location}</strong>
            <br />
            Total photos: {author.total_photos}
            <br />
            Collections: {author.total_collections}
            <br />
            Downloads: {author.downloads} <br />
            Followers: {author.followers_count} <br />
            Likes: {author.total_likes}
            <br />
          </p>
          {author.for_hire ? (
            <h4>This author is available for hire</h4>
          ) : (
            <p>Cannot be hired here</p>
          )}
          <p></p>
          <h5>Contacts:</h5>
          <div className="author-contacts">
            <a href={author?.links?.html}> {author?.links?.html}</a>
            <br />
            <span> Instagram: </span>
            <a href={"www.instagram.com/" + author.instagram_username}>
              {author.instagram_username}
            </a>
          </div>
        </div>
        <img src={author?.profile_image?.large} alt="profile_image" />
      </div>
      <div className="pictures-container">
        {pictures !== null
          ? pictures.map((picture) => (
              <Link key={picture.id} to={"/image/" + picture.id}>
                <img
                  className="picture-sample"
                  src={picture.urls.regular}
                  alt={picture.alt_description}
                />
              </Link>
            ))
          : "load"}
      </div>
    </div>
  );
};
