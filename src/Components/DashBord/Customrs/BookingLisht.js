import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/UseAuth";
import "./BookingList.css";

const BookingLisht = () => {
  const [orderlList, setOrderList] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const url = `http://localhost:5000/purches/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);
  console.log(orderlList);
  return (
    <div style={{ backgroundColor: "#F4F7FC" }}>
      This is booking list
      <br />
      <div className="row row-cols-1 row-cols-md-3 g-4 booking_style_1 mt-4 ms-3">
        {orderlList?.map((orders, index) => (
          <div key={index} className="col">
              <div className="card booking_style mx-auto mb-3">
                <div className="d-flex justify-content-between  p-4">
                  <img
                    style={{ width: "42px" }}
                    src="https://i.ibb.co/0yLvqGK/Group-1373.png"
                    class="card-img-top"
                    alt="..."
                  />

                  <h4>{orders?.status}</h4>
                </div>
                <div class="card-body ">
                  <h5 class="card-title">{orders?.productName}</h5>
                 
                  <p class="card-text my-1">
                    {orders?.price?.slice(0, 100)}
                  </p>

                  <span>Location: {orders?.location}</span>
                </div>
              </div>
              </div>
          
         
        ))}
      </div>
    </div>
  );
};

export default BookingLisht;