import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import engpic from "../../Image_Icon/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";

const ScrenCare = () => {
  return (
    <div style={{ backgroundColor: "#FFF8F5" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row  className="container-width">
          <Col  style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
            }} xs={12} md={6} lg={6} className="mb-2">
            <img className="b-style" src={engpic} alt="" />
          </Col>
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
                <h3 style={{ fontSize: "34px" }}>
                  Let us handle your <br /> screen{" "}
                  <span style={{ color: "#F63E7B" }}>Professionally</span>.
                </h3>
              
                <p
                className="my-3" 
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                  }}
                >
                  With well written codes, we build amazing apps for all
                  platforms, mobile and web apps in general ipsum.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Purus commodo
                  ipsum.
                </p>
               
                <button  className="header-btn my-2">Login</button>
              </div>
            </div>
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

export default ScrenCare;
