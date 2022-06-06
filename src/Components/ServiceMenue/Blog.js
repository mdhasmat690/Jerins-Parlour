import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://dry-journey-03591.herokuapp.com/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 4)));
  }, []);

  return (
    <div style={{ backgroundColor: "#f6ebe7" }}>
      <div className="container">
        <br />
        <br />
        <h1
          style={{ fontFamily: "EB Garamond", fontsize: "42px" }}
          className="mb-5"
        >
          Blog
        </h1>

        {blogs.length ? (
          <div className="row row-cols-1 row-cols-md-4 g-4 my-5">
            {blogs?.map((careBlog, index) => (
              <div key={index} className="col">
                <div
                  style={{ backgroundColor: "#f6ebe7" }}
                  className="card h-100 border-0"
                >
                  <Link to={`/detailsBlog/${careBlog._id}`}>
                    <img
                      style={{ cursor: "pointer" }}
                      src={careBlog.p}
                      className="card-img-top w-100 mx-auto card-style"
                      alt="..."
                    />
                  </Link>

                  <div className="card-body">
                    <p
                      style={{
                        fontsize: "12px",
                        fontWeight: "300",
                        letterSpacing: "0.02em",
                        lineHeight: "20px",
                        textTransform: "none",
                      }}
                      className="card-text"
                    >
                      {careBlog.h}
                    </p>

                    <h5
                      style={{
                        fontFamily: "Jost",
                        fontSize: "20px",
                        fontWeight: "500",
                      }}
                      className="card-title"
                    >
                      {careBlog.bname}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5">
            {" "}
            <ClipLoader size={40} color={"#123abc"} speedMultiplier={1.5} />
          </div>
        )}

        <Link style={{ textDecoration: "none", color: "black" }} to="/allBlog">
          <button className="blog_btn">VIEW ALL POST</button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
