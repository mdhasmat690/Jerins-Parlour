/* import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
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
        <h2 className="sub-tittle">Please Login In</h2>
        <form
          style={{ marginTop: "20px" }}
          className="reg-style"
          onSubmit={handleSubmit(onSubmit)}
        >
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

          <input className="reg-btn" type="submit" value="Create an account" />
        </form>

        <h6 className="alreay">
        <Link to="/registration" style={{ textDecoration: 'none' }}>
            <span style={{ color: "#F63E7B" }}>Create an account</span>
          </Link>
        </h6>
      </div>

      
    </div>
  );
};

export default Login;
 */