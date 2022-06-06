import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faShoppingCart,faWhatsapp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#F63E7B" }}>
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-md-4 justify-content-center footer-style">
            <p>
              H#000 (0th Floor), Road #00, <br />
              New DOHS, Mohakhali, Dhaka, Bangladesh
            </p>
          </div>
          <div className="col-12 col-md-2 footer-style  footer_t">
            <h6 style={{color: 'white',fontWeight: '700'}}>Company</h6>
            <p>About</p>
            <p>Project</p>
            <p>Our Team</p>
            <p>Terms Conditions</p>
            <p>Submit Listing</p>
          </div>
          <div className="col-12 col-md-2 justify-content-xl-center justify-content-xxl-center footer-style footer_t">
            <h6 style={{color: 'white',fontWeight: '700'}}>Quick Links</h6>
            <p>Rentals</p>
            <p>Sales</p>
            <p>Contact</p>
            <p>Our blog</p>
          </div>
          <div className="col-12 col-md-4 footer-style">
            <div className="w-100">
              <h6 style={{color: 'white',fontWeight: '700'}}>About us</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum duis laoreet maecenas. Feugiat{" "}
              </p>
              <FontAwesomeIcon icon={faShoppingCart} />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
