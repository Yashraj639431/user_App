import React from "react";
import { Link } from "react-router-dom";
import blogImg from "../Pages/download.jpeg";

const BlogCard = (props) => {
  const { id, title, description, date, images } = props;
  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          src={blogImg}
          /*{images} */ className="img-fluid w-100"
          alt="blog"
        />
      </div>
      <div className="blog-content">
        <p className="date">{date}</p>
        <h5 className="title">{title} </h5>
        <p
          className="desc"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <Link to={`/blogs/` + id} className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
