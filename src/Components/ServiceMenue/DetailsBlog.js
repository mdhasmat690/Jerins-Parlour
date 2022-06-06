import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "aos/dist/aos.css";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "./DetalsBlog.css";
import hh from "../../Image_Icon/Image/Group-159.webp";
import mask from "../../Image_Icon/Image/Mask-Group-1@1.webp";
import group from "../../Image_Icon/Image/Mask-Group@1.webp";

const DetailsBlog = () => {
  const { id } = useParams();

  const [blogs, setBlogs] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, [id]);
  console.log(blogs);

  return (
    <div>
      <div style={{ backgroundColor: "#FFF8F5" }}>
        <Container>
          <br />
          <Row className="">
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "left",
              }}
              xs={12}
              md={6}
              lg={6}
            >
              <div>
                <img src={blogs.p} className="w-100" alt="" />
              </div>
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
              xs={12}
              md={6}
              lg={6}
            >
              <div>
                <p className="date">{blogs.h}</p>
                <h2 className="blg_h">{blogs.bname}</h2>
                <p className="btn_p">{blogs.b}</p>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
      </div>
      <div style={{ backgroundColor: "white" }} className="w-50 mx-auto">
        <div className="mx-auto my-5">
          <p className="details_stle">
            We all have different hair typess and have to choose haircare
            products according to it. But still there are some tips that are
            applicable to all hair types. We tried to collect them all in this
            article. See below what we have found for you.
          </p>

          <p className="details_stle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>

          <img src={hh} className="w-100" alt="" />

          <p className="details_stle mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit
          </p>

          <Row className="mt-3">
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "left",
              }}
              xs={12}
              md={6}
              lg={6}
            >
              <div>
                <img src={mask} className="w-100" alt="" />
              </div>
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
              xs={12}
              md={6}
              lg={6}
            >
              <div>
                <img src={group} className="w-100" alt="" />
              </div>
            </Col>
          </Row>

          <p className="details_stle mt-3">
            We all have different hair typess and have to choose haircare
            products according to it. But still there are some tips that are
            applicable to all hair types. We tried to collect them all in this
            article. See below what we have found for you.
          </p>

          <p className="details_stle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsBlog;
