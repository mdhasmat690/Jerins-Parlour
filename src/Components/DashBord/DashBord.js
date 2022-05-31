import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import person from "../../Image_Icon/person-add-outline 1.png";
import grid from "../../Image_Icon/grid-outline 1.png";
import group1 from "../../Image_Icon/Group 1343.png";
import plus from "../../Image_Icon/plus 1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import useAuth from "../../Hooks/UseAuth";

const DashBord = () => {
  const { admin, user } = useAuth();
  /* const [se,setSe] = useState(true)


  
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSe(data);
      });
  }, []); */

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  console.log("admin status", admin);

  return (
    <>
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <div style={{ width: "96%" }}>
          <div
            data-aos="zoom-in"
            style={{ backgroundColor: "#FFFFFF" }}
            className="row"
          >
            <div className="col-12 col-lg-2 ">
              {admin ? (
                <div className="new_style">
                  <br />
                  <br />
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/dashBord/service`}
                  >
                    <span className="link_color">
                      <img
                        style={{ marginRight: "10px" }}
                        src={person}
                        alt=""
                      />
                      Add service
                    </span>
                  </Link>
                  <br />
                  <br />
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/dashBord/orderList`}
                  >
                    <span className="link_color">
                      <img
                        style={{ marginRight: "10px" }}
                        src={person}
                        alt=""
                      />
                      Order list
                    </span>
                  </Link>
                  <br />
                  <br />
                  <Link
                    className="link_color"
                    style={{ textDecoration: "none" }}
                    to={`/dashBord/makeAdmin`}
                  >
                    <span>
                      <img
                        style={{ marginRight: "10px" }}
                        src={person}
                        alt=""
                      />
                      Make Adimn
                    </span>
                  </Link>
                  <br />
                  <br />
                  <Link
                    className="link_color"
                    style={{ textDecoration: "none" }}
                    to={`/dashBord/manageService`}
                  >
                    <span>
                      <img
                        style={{ marginRight: "10px" }}
                        src={person}
                        alt=""
                      />
                      manageService
                    </span>
                  </Link>
                  <br />
                  <br />
                </div>
              ) : (
                <div className="new_style">
                  {" "}
                  <br />
                  <br />
                  <Link
                    className="link_color"
                    style={{ textDecoration: "none" }}
                    to={`/dashBord/review`}
                  >
                    <span>
                      <img
                        style={{ marginRight: "10px" }}
                        src={person}
                        alt=""
                      />
                      Review
                    </span>
                  </Link>
                  <br />
                  <br />
                  <Link
                    className="link_color"
                    style={{ textDecoration: "none" }}
                    to={`/dashBord/bookingLisht`}
                  >
                    <span>
                      <img
                        style={{ marginRight: "10px" }}
                        src={person}
                        alt=""
                      />
                      Booking list
                    </span>
                  </Link>
                  <br />
                  <br />
                </div>
              )}

              {/*     */}
            </div>
            {/*  */}
            <div
              style={{ backgroundColor: "#F4F7FC" }}
              className="col-12 col-lg-10 py-2"
            >
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBord;
