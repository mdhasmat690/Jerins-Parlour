import React, { useEffect} from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import person from "../../Image_Icon/person-add-outline 1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import useAuth from "../../Hooks/UseAuth";
import Marquee from "react-fast-marquee";

const DashBord = () => {
  const { admin} = useAuth();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
                      ManageService
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
                  <Link
                    className="link_color"
                    style={{ textDecoration: "none" }}
                    to={`/dashBord/deleteOrder`}
                  >
                    <span>
                      <img
                        style={{ marginRight: "10px" }}
                        src={person}
                        alt=""
                      />
                      DeleteOrder
                    </span>
                  </Link>
                  <br />
                  <br />
                </div>
              )}
            </div>

            <div
              style={{ backgroundColor: "#F4F7FC" }}
              className="col-12 col-lg-10 py-2"
            >
              {!admin && (
                <Marquee style={{ color: "#1b60d3" }} speed={40}>
                  If you want to admin role, Please type Email:
                  mdhasmat690@gmail.com || Pass: 123456{" "}
                  <span style={{ color: "red" }}> " " Note " "</span> : Please
                  do not delete any product
                </Marquee>
              )}

              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBord;
