import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Rating from "react-rating";
import img6 from "../../Image_Icon/Image/Ellipse 90.png";
import img7 from "../../Image_Icon/Image/Ellipse 91.png";
import img8 from "../../Image_Icon/Image/Ellipse 92.png";
import "./Review.css";

const review = [
  {
    name: "Nash Patrik",
    img: img6,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    ratting: "5",
  },
  {
    name: "Miriam Barron",
    img: img7,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    ratting: "4",
  },
  {
    name: "Bria Malone",
    img: img8,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    ratting: "5",
  },
  {
    name: "Nash Patrik",
    img: img6,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    ratting: "3.5",
  },
  {
    name: "Miriam Barron",
    img: img7,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    ratting: "4",
  },
  {
    name: "Bria Malone",
    img: img8,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    ratting: "4",
  },
  {
    name: "Nash Patrik",
    img: img6,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    ratting: "5",
  },
  {
    name: "Miriam Barron",
    img: img7,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    ratting: "4",
  },
  {
    name: "Bria Malone",
    img: img8,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    ratting: "3",
  },
];
const Reviews = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <div style={{ backgroundColor: "#FFF8F5" }}>
      <div className="container">
        <AliceCarousel mouseTracking responsive={responsive}>
          {review.map((skin, index) => (
            <div key={skin.name}>
              <div style={{ backgroundColor: "white", marginRight: "35px" }}>
                <div
                  style={{
                    display: "flex",
                    fontSize: "23px",
                    fontWeight: "600",
                    justifyContent: "left",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      padding: "10px",
                      paddingTop: "10px",
                      marginTop: "5px",
                    }}
                  >
                    <img className="w-25" src={skin.img} alt="" />{" "}
                    <span>{skin.name}</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    color: "#707070",
                    fontSize: "17px",
                    justifyContent: "left",
                    textAlign: "left",
                  }}
                  className="card-body"
                >
                  <div>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Rating
                      initialRating={skin.ratting}
                      emptySymbol="far fa-star icon-color"
                      fullSymbol="fas fa-star icon-color"
                      readonly
                    ></Rating>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Reviews;
