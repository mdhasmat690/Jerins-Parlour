import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Allservice.css";

/* const allservice = [
   
    {"name":"Hair Color & Styleing","img":"https://i.ibb.co/yd84XDn/Group-1373.png","price":"99","desc":"Amazing flyers, social media posts and brand representations that would make your brand stand out."},
    {"name":"Eay Cream","img":"https://i.ibb.co/VCVcnyY/Shop14-1.webp","price":"120.00","desc":"Our beauty box is a set of best full-size products that are top sellers in out online shop. We want you to be able to try everything at once and make sure that our selection of"},
    {"name":"Mashcara","img":"https://i.ibb.co/cF58nmj/Shop13-1.webp","price":"120.00","desc":"Our beauty box is a set of best full-size products that are top sellers in out online shop. We want you to be able to try everything at once and make sure that our selection of"},
    {"name":"chun Hua","img":"https://i.ibb.co/54BsvDw/Shop12-1.webp","price":"120.00","desc":"Our beauty box is a set of best full-size products that are top sellers in out online shop. We want you to be able to try everything at once and make sure that our selection of"},
    {"name":"Nelpalish","img":"https://i.ibb.co/XX8t7P2/Shop11-1-600x799.png","price":"120.00","desc":"Our beauty box is a set of best full-size products that are top sellers in out online shop. We want you to be able to try everything at once and make sure that our selection of"},
    {"name":"Pure water","img":"https://i.ibb.co/9NNPHsH/Group-151-4x-1-769x1024.jpg","price":"120.00","desc":"Our beauty box is a set of best full-size products that are top sellers in out online shop. We want you to be able to try everything at once and make sure that our selection of"},
    {"name":"Selon mx","img":"https://i.ibb.co/DfQF71G/Blog-7-4x-1-769x1024.webp","price":"120.00","desc":"Our beauty box is a set of best full-size products that are top sellers in out online shop. We want you to be able to try everything at once and make sure that our selection of"}
  
] */

const AllService = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
          {service.map((services, index) => (
            <>
              <div className="col">
                <div className="card h-100 border-0 card-style">
                  <Link to={`/purches/${services._id}`}>
                    <img
                      src={services.img}
                      class="card-img-top w-75 mx-auto"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <h5
                      style={{
                        fontFamily: "Jost",
                        fontSize: "20px",
                        fontWeight: "500",
                      }}
                      className="card-title"
                    >
                      {services.name}
                    </h5>

                    <p
                      style={{
                        fontsize: "12px",
                        fontWeight: "300",
                        letterSpacing: "0.02em",
                        lineHeight: "20px",
                        textTransform: "none",
                      }}
                      className="card-text"
                    >
                      $ {services.price}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllService;
