import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";
import Swal from "sweetalert2";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://dry-journey-03591.herokuapp.com/services", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your new service added",
            showConfirmButton: false,
            timer: 2000,
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
      <div className="mt-5 pt-5">
        <h2>Added New Product</h2>
      </div>
        <form className="a pt-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input_style"
            {...register("name", { required: true })}
            placeholder="Service Title"
            required
          />
          <br />
          <br />
          <input
            className="input_style"
            {...register("img")}
            placeholder="Enter img_url"
            required
          />
          <br />
          <br />
          <input
            className="input_style"
            {...register("price")}
            placeholder="Enter Price"
            required
          />
          <br />
          <br />

          <textarea
            className="input_text mx-auto"
            {...register("desc")}
            placeholder="Enter Designation"
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

export default AddService;
