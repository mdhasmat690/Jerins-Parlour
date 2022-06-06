import React from "react";
import "./OurStory.css";
import Test1 from "./Test1";
import Philosophy from "./Philosophy";
import Team from "./Team";
import OurProduct from "./OurProduct";


const OurStory = () => {
  return (
    <>
      <div className="parallax">
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <div className="mt-5">
            <h1 className="our_stye mt-t">Our Story</h1>
            <p className="our_p mx-auto">
              Our main goal was to create the best beauty studio in the world.
              What could be a compromise in the best studio in the world?
            </p>
          </div>
        </div>
      </div>

      <Philosophy></Philosophy>

      <Test1></Test1>

      <Team></Team>

      <OurProduct></OurProduct> 
    </>
  );
};

export default OurStory;
