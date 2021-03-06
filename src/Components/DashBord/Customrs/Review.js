import React from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://dry-journey-03591.herokuapp.com/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your review has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };

  return (
    <div
      className=""
      style={{ backgroundColor: "#F4F7FC", marginBottom: "150px" }}
    >
      <div className="sbad" style={{ backgroundColor: "white" }}>
        <div className="mt-5">
          <br />
          <h2>Review</h2>
        </div>

        <form className="a pt-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input_style"
            {...register("name", { required: true })}
            placeholder="Your name"
            required
          />
          <br />
          <br />
          <input
            className="input_style"
            {...register("designation")}
            placeholder="Company’s name, Designation"
            required
          />
          <br />
          <br />

          <textarea
            className="input_text mx-auto"
            {...register("description")}
            placeholder="Description"
            required
          />
          <br />
          <br />
          <button className="mb-5 btn_service_style">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Review;
