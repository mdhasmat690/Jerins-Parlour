import React from "react";
import {  Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import jerin from "../../Image_Icon/Group 33092.png";
import useAuth from "../../Hooks/UseAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div style={{ backgroundColor: "#FFF8F5" }}>
      <>
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Container>
            <img style={{ width: "10%" }} src={jerin} alt="" />
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <ul className="list">
                  <Link
                    style={{ color: "#474747" }}
                    className="list-link"
                    to="/home"
                  >
                    Home
                  </Link>
                  <Link
                    style={{ color: "#474747" }}
                    className="list-link"
                    to="/serviceMenue"
                  >
                    Service Menu
                  </Link>

                  <Link
                    style={{ color: "#474747" }}
                    className="list-link"
                    to="/allservice"
                  >
                    All services
                  </Link>

                  <Link
                    style={{ color: "#474747" }}
                    className="list-link"
                    to="/ourStory"
                  >
                    Our Story
                  </Link>
                  <Link
                    style={{ color: "#474747" }}
                    className="list-link"
                    to="dashBord"
                  >
                    DashBoard
                  </Link>

                  <span
                    style={{ color: "black", marginRight: "2px" }}
                    className="list-link"
                  >
                    {" "}
                    {user?.displayName}
                  </span>

                  {user?.email ? (
                    <button className="header_btn_logout" onClick={logOut}>
                      Logout
                    </button>
                  ) : (
                    <Link to="/googleLogin">
                      <button className="header-btn">Login</button>
                    </Link>
                  )}
                </ul>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
      {/* <Container>
        <Row className="container-width">
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
              <div>
                <span className="h-style">BEAUTY SALON</span>
                <br />
                <span className="h-style">FOR EVERY WOMEN</span>
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat{" "}
                </p>
                <br />
                <button className="header-btn">Login</button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <img className="b-style" src={banner} alt="" />
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Header;
