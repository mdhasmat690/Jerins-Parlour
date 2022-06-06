import React from "react";
import mobile from "../../Image_Icon/svg/svgexport-6.svg";
import time from "../../Image_Icon/svg/svgexport-7.svg";
import location from "../../Image_Icon/svg/svgexport-8.svg";
import './Time.css'
const Time = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
        <div className="col">
          <div className="card border-0">
            <img
              style={{ width: "15%" }}
              src={mobile}
              className="card-img-top mx-auto"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Contact</h5>
              <p className="card-text contuct_style">
                
                  Ph: 01518458934 <br />
                  mdhasmat690@gmail.com
               
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <img
              style={{ width: "15%" }}
              src={time}
              className="card-img-top mx-auto"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Time</h5>
              <p className="card-text contuct_style">
                Mon to Fri: 7:30 am — 1:00 am
                <br />
                Sat: 9:00 am — 1:00 am
                <br />
                Sun: 9:00 am — 11:30 pm
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <img
              style={{ width: "15%" }}
              src={location}
              className="card-img-top mx-auto"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Location</h5>
              <p className="card-text contuct_style">
                105 Road, Birganj,Dinajpur;
                <br />
                Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
