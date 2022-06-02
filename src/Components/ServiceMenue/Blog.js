import React from "react";

import './Blog.css'

const blogs = [
  {
    h: "HEALTH . JUNE 29, 2022",
    bname: "10 Tips for Healthy Mind and Body",
    b: "By Sopnomoy",
    p: "https://i.ibb.co/6nTXB1Q/Group-156-1.webp",
  },
  {
    h: "HEALTH . JUNE 20, 2022",
    bname: "Aroma Therapy and Aroma Massages",
    b: "By Sopnomoy",
    p: "https://i.ibb.co/jHTDFcd/Group-154-4x-1-769x1024.jpg",
  },
  {
    h: "HEALTH . JUNE 20, 2022",
    bname: "10 Ways to Spend Your Weekend Outside",
    b: "By Sopnomoy",
    p: "https://i.ibb.co/Y8tx8s9/Group-152-4x-1-769x1024.jpg",
  },
  {
    h: "WELLNESS . JUNE 20, 2022",
    bname: "From Better Sleep to Less Anxiety",
    b: "By Sopnomoy",
    p: "https://i.ibb.co/t35kqdk/Blog-8-4x-1-769x1024.jpg",
  },
  /* {
    h: "WELLNESS . JUNE 20, 2022",
    bname: "Natural Scrubs for Silky Soft Skin",
    b: "By Sopnomoy",
    p: "https://i.ibb.co/2d5kYfB/Group-151-4x-1-769x1024.jpg",
  },
  {
    h: "WELLNESS . JUNE 20, 2022",
    bname: "Beauty Trends 2020: Natural Beauty",
    b: "By Sopnomoy",
    p: "https://i.ibb.co/8N7jmcP/Mask-Group-1-5x-1.jpg",
  },
  {
    h: "WELLNESS . JUNE 20, 2022",
    bname: "Healthy Mind and Body: Destress Therapy",
    b: "By Sopnomoy",
    p: "https://i.ibb.co/bdtYC2q/Mask-Group-1-1-5x-1.jpg",
  },
  {
    h: "WELLNESS . JUNE 20, 2022",
    bname: "Coffee, Tea and Matcha Secrets",
    b: "By Sopnomoy",
    p: "https://i.ibb.co/y0Syk3W/Group-150-4x-1-769x1024.jpg",
  },

  {
    h: "WELLNESS . JUNE 20, 2022",
    bname: "Sleep Routine: Tips and Tricks for Better Relaxation",
    b: "By Sopnomoy",
    p: "https://i.ibb.co/pxwBfBD/Blog-7-4x-1-769x1024.webp",
  },
  {
    h: "WELLNESS . JUNE 20, 2022",
    bname: "Beauty Products Awards 2020: Winners",
    b: "By Sopnomoy",
    p: "https://i.ibb.co/rM8LTQs/Blog-6-4x-1-769x1024.webp",
  }, */
];

const Blog = () => {
  return (
    <div style={{ backgroundColor: "#f6ebe7" }}>
      <div className="container my-5">
        <br />
        <br />
        <h1
          style={{ fontFamily: "EB Garamond", fontsize: "42px" }}
          className="mb-5"
        >
          Blog
        </h1>

        <div className="row row-cols-1 row-cols-md-4 g-4 my-5">
          {blogs?.map((careBlog, index) => (
            <>
              <div className="col">
                <div
                  style={{ backgroundColor: "#f6ebe7" }}
                  className="card h-100 border-0"
                >
                  <img
                    src={careBlog.p}
                    class="card-img-top w-100 mx-auto"
                    alt="..."
                  />
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
            </>
          ))}
        </div>
        <button className="blog_btn">VIEW ALL POST</button>
       
      </div>
    </div>
  );
};

export default Blog;
