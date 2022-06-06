import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HairCut from "./HairCut";
import './ServiceMenue.css'

const ServiceMenue = () => {
  return (
    <>
      <div className="service_parallax">
        <div className="container">
          <br />
          <br />
         
          <div className="mt-5">
            <h1 className="service_our_style mt-t">Service Menu</h1>
            <p className="service_our_p mx-auto">
              Our main goal was to create the best beauty studio in the world. What could
              best beauty studio in the world. What could
              <br />
              be a compromise in the best studio in the world?  best beauty s
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-5 dd">
        <HairCut></HairCut>
      </div>
      
    </>
  );
};

export default ServiceMenue;
