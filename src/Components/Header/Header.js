import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import jerin from "../../Image_Icon/Group 33092.png";
import useAuth from "../../Hooks/UseAuth";
// import banner from "../../Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div style={{ backgroundColor: "#FFF8F5" }}>
      <>
        {/* <Link to="/login">Login</Link> */}
        <Navbar collapseOnSelect expand="lg" variant="dark">
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
                    to="/login"
                  >
                    Our Portfolio / login
                  </Link>
                  <Link
                    style={{ color: "#474747" }}
                    className="list-link"
                    to="/"
                  >
                    Our Team
                  </Link>
                  <Link
                    style={{ color: "#474747" }}
                    className="list-link"
                    to="googleLogin"
                  >
                    Contact Us
                  </Link>

                  <span style={{ color: "black" }} className="list-link">
                    {" "}
                    {user?.displayName}
                  </span>

                  {user?.email ? (
                    <button onClick={logOut}>Logout</button>
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
