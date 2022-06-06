import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Text.css";

const Test1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div style={{ backgroundColor: "#f6ebe7" }}>
      <div className="container mt-5">
        <br />
        <br />
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
              className="mb-2"
            >
              <img
                src="https://i.ibb.co/rtKF7f7/image-126-2x-1-1024x1024.webp"
                className="b-style"
                alt=""
              />
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
            >
              <div>
                <div>
                  <h2 className="our_story">Our Story</h2>
                  <p className="test_p">
                    Dear friends, I would certainly love to meet you all in
                    persone, so come and just say hi. If it’s not possible at
                    the moment, I would loke to introduce myself‚ I’m Vicky, the
                    founder of Cherie Beauty Studio. I’m certain that new
                    haircut, professional makup or just getting your nails done
                    — is a pretty easy way to make your day or week better. I
                    guarantee that you will appreciate the atmosphere of our
                    place. Looking forward to meeting you!
                  </p>

                  <h4>– Sopna Islam</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <br />
    </div>
  );
};

export default Test1;
