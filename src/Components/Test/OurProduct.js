import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Text.css";

const OurProduct = () => {
  return (
    <div style={{ backgroundColor: "#f6ebe7" }}>
      <div className="container mt-5">
        <br />
        <br />
        <br />

        <Container>
          <Row className="container-width">
            <Col
              className="mb-2"
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
                  <h2 className="our_story"> Our Products</h2>
                  <p className="test_p">
                    All our products are cruelty-free, it’s a category
                    containing all cosmetics that have not been tested on
                    animals. Each cosmetic is subject to strict control by
                    independent inspection bodies chosen by the Coalition for
                    Consumer Information in Cosmetics (CCIC), which is an NGO
                    founded by 8 international animal protection groups such as:
                    American Anti-Vivisection Society, Animal Alliance of
                    Canada, Doris Day Animal League, etc.
                  </p>

                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/allservice"
                  >
                    <button className="header-btn mt-3">More Product</button>
                  </Link>

                  <br />
                  <br />
                </div>
              </div>
            </Col>

            <Col
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "right",
              }}
              xs={12}
              md={6}
              lg={6}
            >
              <img
                src="https://i.ibb.co/nr66tH6/Our-Story-3-1.webp"
                className="b-style"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>

      <br />
      <br />
    </div>
  );
};

export default OurProduct;
