import React from "react";
import "./OurStory.css";
import svg1 from "../../Image_Icon/svg/svgexport-1.svg";
import svg2 from "../../Image_Icon/svg/svgexport-2.svg";
import svg3 from "../../Image_Icon/svg/svgexport-3.svg";
import svg4 from "../../Image_Icon/svg/svgexport-4.svg";
import svg5 from "../../Image_Icon/svg/svgexport-5.svg";
import svg6 from "../../Image_Icon/svg/svgexport-6.svg";
import Test1 from "./Test1";
import Philosophy from "./Philosophy";
import Team from "./Team";
import OurProduct from "./OurProduct";

const philosophy = [
  {
    name: "Green Beauty",
    descrip:
      "All cosmetic forumulas are organi The majority of all ingredients is natural.",
    img: svg1,
  },
  {
    name: "Cruelty-Free",
    descrip:
      "Even nowadays some cosmetic products are tested on animals. That is not the case for us.",
    img: svg2,
  },
  {
    name: "Professional Care",
    descrip:
      "All products we use are professional and have proven effeciency. Nocompromises.",
    img: svg3,
  },
  {
    name: "Non-Toxic Formula",
    descrip: "Professional Care",
    descrip:
      "All products we use are professional and have proven effeciency. Nocompromises.",
    img: svg4,
  },
  {
    name: "Personalized Experience",
    descrip:
      "Don’t worry, all our nails polishes andother products arenon-toxic. We docare about you and our specialists.",
    img: svg5,
  },
  {
    name: "We Love What We Do",
    descrip:
      "People that you’ll meet in our studi are doing job they loCome and make sure there is a difference.",
    img: svg6,
  },
];
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
