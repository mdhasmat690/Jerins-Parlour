import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import banner from "../../../Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div style={{ backgroundColor: "#FFF8F5" }}>
      <br />

      <Container>
        <Row className="container-width">
          <Col
            data-aos="fade-right"
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
                <div>
                  <span className="h-style">BEAUTY SALON</span>
                  <br />
                  <span className="h-style">FOR EVERY WOMEN</span>
                  <br />
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus commodo ipsum duis laoreet maecenas. Feugiat{" "}
                  </p>
                  <br />
                  <button className="header-btn">Login</button>
                </div>
                <br />
              </div>
            </div>
          </Col>

          <Col
            data-aos="fade-left"
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
            }}
            xs={12}
            md={6}
            lg={6}
            className="mb-2"
          >
            <img className="b-style" src={banner} alt="" />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Banner;
