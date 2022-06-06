import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { BeatLoader, ScaleLoader } from "react-spinners";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  const newSTyel = {
    fontWeight: 700,
    size: "34px",
    lineHeight: "43px",
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="container"
      style={{ marginTop: "95px", backgroundColor: "#FFFFFF" }}
    >
      <h2 style={newSTyel} className="mb-5">
        Our Awesome <span style={{ color: "#F63E7B" }}>Services </span>
      </h2>

      {service?.length ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {service?.map((skin, index) => (
            <div key={index}>
              <div className="col">
                <div
                  data-aos="zoom-in-up"
                  className={
                    skin._id === "6292836f8ac1ccfc534ac6df"
                      ? "shadow-lg bg-body rounded "
                      : ""
                  }
                >
                  <Link to={`/purches/${skin._id}`}>
                    <img
                      src={skin.img}
                      className="card-img-top mt-4 w-25"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <h5
                      style={{ fontWeight: "700", fontSize: "17px" }}
                      className="card-title"
                    >
                      {skin.name}
                    </h5>
                    <span style={{ color: "#F63E7B", fontSize: "17px" }}>
                      $ {skin.price}
                    </span>
                    <p
                      style={{ fontSize: "16px", lineHeight: "28px" }}
                      className="card-text"
                    >
                      {skin.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-5">
          <BeatLoader size={15} color={"#123abc"} speedMultiplier={1.5} />
        </div>
      )}

      <Link style={{ textDecoration: "none", color: "black" }} to="/allservice">
      <button className="header-btn mt-5">More Service</button>
      </Link>
      <br />
      <br />
    </div>
  );
};

export default Services;
