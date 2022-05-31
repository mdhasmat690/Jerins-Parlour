import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddService.css";
import Swal from "sweetalert2";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/services", {
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
    console.log(data);
  };

  return (
    <div
      className=""
      style={{ backgroundColor: "#F4F7FC", marginBottom: "150px" }}
    >
      <div className="mt-5">
        <h2>Added New Product</h2>
      </div>
      <div className="sbad" style={{ backgroundColor: "white" }}>
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
