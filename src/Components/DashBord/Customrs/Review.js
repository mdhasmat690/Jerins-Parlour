import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

// import "./AddService.css";


const Review = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("New Product Added successfully");
          reset();
        }
      });
    console.log(data);
  };

  return (
    <div className="" style={{ backgroundColor: "#F4F7FC",marginBottom: '150px' }}>
      <div className="mt-5">
        <h2>Review</h2>
      </div>
      <div className="sbad" style={{ backgroundColor: "white"}}>
        
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
        <button  className="mb-5 btn_service_style">Submit Now</button>
      </form>
      </div>
    </div>
  );
};

export default Review;