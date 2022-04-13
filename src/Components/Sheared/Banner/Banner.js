import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import banner from "../../../Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";

const Banner = () => {
  return (
    <div style={{backgroundColor: "#FFF8F5"}}>
      <Container>
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
      </Container>
    </div>
  );
};

export default Banner;
