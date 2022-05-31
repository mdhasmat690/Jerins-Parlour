import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
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
     <h2 className="mt-3">booking list</h2>
      <br />
      {orderlList.length ? <div className="row row-cols-1 row-cols-md-3 g-4 booking_style_1 mt-4 ms-3">
        {orderlList?.map((orders, index) => (
          <div key={index} className="col">
              <div className="card booking_style mx-auto mb-3">
                <div className="d-flex justify-content-between  p-4">
                  <img
                    style={{ width: "42px" }}
                    src="https://i.ibb.co/0yLvqGK/Group-1373.png"
                    className="card-img-top"
                    alt="..."
                  />

                  <h4>{orders?.status}</h4>
                </div>
                <div className="card-body ">
                  <h5 className="card-title">{orders?.productName}</h5>
                 
                  <p className="card-text my-1">
                    {orders?.price?.slice(0, 100)}
                  </p>

                  <span>Location: {orders?.location}</span>
                </div>
              </div>
              </div>
          
         
        ))}
      </div> : <div className="my-5"><BeatLoader
            size={15}
            color={"#123abc"}
            
            speedMultiplier={1.5}
          /></div>}
    </div>
  );
};

export default BookingLisht;
