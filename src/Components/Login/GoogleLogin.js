import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/UseFirebase";
import "./google.css";

const GoogleLogin = () => {

  const {signInWithGoogle} = useFirebase()
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
    <div className="m-4">

      <div className="mb-5">
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
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9]+$/i,
              })}
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
              className="reg-btn"
              type="submit"
              value="Create an account"
            />
          </form>

          <div className="mt-2">
            <span style={{ height: "21px" }}>
              Don’t have an account?{" "}
              <Link to="/registration" style={{ textDecoration: "none" }}>
                <span style={{ color: "#F63E7B" }}>Create an account</span>
              </Link>
            </span>
          </div>


          <div className="mt-4">
          <button onClick={signInWithGoogle} className="signInStyle">
            <img
              className="googleLogo"
              src="https://i.ibb.co/SxQwGMW/Group-571.png"
              alt=""
            />
            <span className="space">continue with google</span>
          </button>
        </div>

        </div>
      </div>

     
    </div>
  );
};

export default GoogleLogin;
