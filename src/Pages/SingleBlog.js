import React from "react";
import { Link } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "./Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"}></Meta>
      <BreadCrum title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
              </Link>
              <h3 className="title">A Beautiful Morning Renaissance</h3>
              <img
                src="/images/blog-1.jpg"
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p>
                You're only as good as your last collection which is an enormous
                pressure. I think there is something about luxury - it's not
                something people need, but it's what they want. It really pulls
                at their heart. I have a fantastic relationship with money.
                You're only as good as your last collection which is an enormous
                pressure. I think there is something about luxury - it's not
                something people need, but it's what they want. It really pulls
                at their heart. I have a fantastic relationship with money.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
