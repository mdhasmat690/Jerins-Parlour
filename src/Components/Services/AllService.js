import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  ClipLoader } from "react-spinners";
import "./Allservice.css";


const AllService = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("https://dry-journey-03591.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  return (
    <div>
      <div className="container">

      {service?.length ? (

        <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
          {service.map((services, index) => (
            <div key={services._id} className="col">
              <div className="card h-100 border-0 card-style">
                <Link to={`/purches/${services._id}`}>
                  <img
                    src={services.img}
                    className="card-img-top w-75 mx-auto"
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
          ))}
        </div>
         ) : (
          <div className="my-5">
            <ClipLoader size={35} color={"#123abc"} speedMultiplier={1.5} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllService;
