import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../Image_Icon/Icon/Group 1372.png";
import img2 from "../../../Image_Icon/Icon/Group 1373.png";
import img3 from "../../../Image_Icon/Icon/Group 1374.png";

/* const skins = [
  {
    name: "Anti Age Face Treatment",
    img: "https://i.ibb.co/QbXd3CB/Group-1372.png",
    desc: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    price: "199",
  },
  {
    img: "https://i.ibb.co/yd84XDn/Group-1373.png",
    name: "Hair Color & Styleing",
    desc: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
    price: "99",
  },
  {
    img: "https://i.ibb.co/ZXQG3ns/Group-1374.png",
    name: "Skin Care Treatment",
    desc: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
    price: "299",
  },
]; */

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

  return (
    <div
      className="container"
      style={{ marginTop: "95px", backgroundColor: "#FFFFFF" }}
    >
      <h2 style={newSTyel} className="mb-5">
        Our Awesome <span style={{ color: "#F63E7B" }}>Services </span>
      </h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {service?.map((skin, index) => (
          <div key={index}>
            <div className="col">
              <div
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

      <button className="header-btn mt-5">More Service</button>
    </div>
  );
};

export default Services;
