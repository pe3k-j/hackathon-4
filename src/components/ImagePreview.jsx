import React from "react";
import { Link } from "react-router-dom";

export const ImagePreview = ({ image }) => {
	return (
		<div className="ImagePreview">
			<Link to={`/image/${image.id}`}>
				<div className="imagePart">
					<img src={image.urls.small} alt={image.alt_description} />
				</div>
			</Link>
			<Link to={`/author/${image.user.username}`}>
				<div className="authorPart">
					<span className="author__name">{image.user.name}</span>
				</div>
			</Link>
		</div>
	);
};
