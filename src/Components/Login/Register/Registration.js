import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
 import "./registration.css";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="my-5">
      <div className="all-border mx-auto py-5">
        <h2 className="sub-tittle">Create an account</h2>
        <form
          style={{ marginTop: "20px" }}
          className="reg-style"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="inStyle"
            {...register("firstName", { required: true })}
            placeholder="First Name"
          />
          {errors.firstName?.type === "required" && "First name is required"}
          <br />
          <input
            className="inStyle"
            {...register("lastName", { required: true })}
            placeholder="Last Name"
          />
          {errors.lastName && "Last name is required"}

          <br />

          <input
            className="inStyle"
            {...register("email", { required: true, pattern: /^[a-z0-9]+$/i })}
            placeholder="Your Email"
          />
          {errors.firstName?.type === "required" && "First name is required"}
          <br />
          <input
            className="inStyle"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.lastName && "Last name is required"}

          <br />
          <input
            className="inStyle"
            {...register("Password2", { required: true })}
            placeholder="Confirm Password"
          />
          {errors.lastName && "Last name is required"}

          <input className="reg-btn" type="submit" value="Create an account" />
        </form>

        <h6 className="alreay">
          Already have an account ?{" "}
          <Link to="/googleLogin" style={{ textDecoration: "none" }}>
            <span style={{ color: "#F63E7B" }}>Login</span>
          </Link>
        </h6>
      </div>  
    </div>
  );
};

export default Registration;
