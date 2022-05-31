import React from "react";
import { Button } from "react-bootstrap";
import "./Messege.css";

const Appointment = () => {
  return (
    <div style={{ backgroundColor: "#FFF8F5" }}>
      
      <h2 style={{fontSize: '34px',fontWeight: '700'}}>Let us handle your<br />project, professionally.</h2>
      <br />
      <br />
      <br />
      <div data-aos="fade-up" className=" container background-style mb-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 d-flex flex-column flex-md-row my-2">
            <input
              className="input-style w-100 w-md-50 mr-10 border-style"
              style={{ height: "50px" }}
              type="text"
              placeholder="Type your name"
            />
            <input
              className="input-style w-100 w-md-50 border-style"
              style={{ height: "50px" }}
              type="email"
              name="email"
              id=""
              placeholder="enter your email"
            />
          </div>

          <div className="col-12 col-md-8 d-flex flex-column flex-md-row my1">
            <input
              className="input-style w-100 w-md-50 mr-10 border-style"
              style={{ height: "50px" }}
              type="text"
              placeholder="Date"
            />
            <input
              className="input-style w-100 w-md-50 border-style"
              style={{ height: "50px" }}
              type="email"
              name="email"
              id=""
              placeholder="Phone Number"
            />
          </div>
          <div className="col-12 col-md-8">
            <textarea
              className="w-100 mx-auto my-3 border-style"
              name="messege"
              id=""
              cols="30"
              rows="7"
              placeholder="Your messege here"
            ></textarea>
          </div>
        </div>
        <button className="mb-5 header-btn">Send Message</button>
      </div>
    </div>
  );
};

export default Appointment;
