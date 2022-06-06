import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CustomrsReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://dry-journey-03591.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="container">
      <h3 style={{ color: "#FFAC0C" }} className="our_story">
        Customers Review
      </h3>

      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        onClickItem={true} 
      
      >
        {review.map((reviews, index) => (
          <div key={index} className="card border-0 w-50 mx-auto">
            <div style={{ textAlign: "left" }} className="card-body mx-auto">
              <h5 className="card-title">Name: {reviews.name}</h5>
              <p className="">Description: {reviews.description}</p>
              <p className="contuct_style">Designation: {reviews.designation}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <br />
      <br />
    </div>
  );
};

export default CustomrsReview;
