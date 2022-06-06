import React from "react";
import "./OurStory.css";
import svg1 from "../../Image_Icon/svg/svgexport-1.svg";
import svg2 from "../../Image_Icon/svg/svgexport-2.svg";
import svg3 from "../../Image_Icon/svg/svgexport-3.svg";
import svg4 from "../../Image_Icon/svg/svgexport-4.svg";
import svg5 from "../../Image_Icon/svg/svgexport-5.svg";
import svg6 from "../../Image_Icon/svg/svgexport-6.svg";
import { Link } from "react-router-dom";

const pphilosophy = [
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
const Philosophy = () => {
  return (
    <>
      <div className="container mt-5 dd">
        <h1 className="my-3" style={{ fontWeight: "400" }}>
          Philosophy
        </h1>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pphilosophy?.map((product, index) => (
            <div key={index} className="col">
              <div className="card h-100 border-0">
                <img
                  src={product.img}
                  className="card-img-top mx-auto w-25"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p style={{ color: "#878484" }} className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/allservice"
        >
          <button className="header-btn">All services</button>
        </Link>
      </div>
    </>
  );
};

export default Philosophy;
