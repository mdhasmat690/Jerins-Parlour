import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";
import "./registration.css";

const Registration = () => {
  const {user,createwithUserEmail,isLoading} = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset 
  } = useForm("");

  const onSubmit = (e) => {
    // e.preventDefault();
    if (e.password !== e.password2) {
      alert("password not match");
      return;
    }

    const name = e.firstName + " " + e.lastName;
    
    createwithUserEmail(e.email, e.password, name)
    // e.target.value = " ";
    console.log(e.email, e.password,name);
    reset(); 
  };
  return (
    <div className="my-5">
      <div className="all-border mx-auto py-5">
        <h2 className="sub-tittle">Create an account</h2>
       {!isLoading && <form
          style={{ marginTop: "20px" }}
          className="reg-style"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="inStyle"
            {...register("firstName", )}
            placeholder="First Name"
            required
          />
          <br />
          <input
            className="inStyle"
            {...register("lastName")}
            placeholder="Last Name"
            required
          />

          <br />

          <input
            className="inStyle"
            {...register("email")}
            placeholder="Your Email"
            required
          />

          <br />
          <input
            className="inStyle"
            {...register("password", { required: true })}
            placeholder="Password"
            type={"password"}
            required
          />
          <br />
          <input
            className="inStyle"
            {...register("password2", { required: true })}
            placeholder="Re-type password"
            type={"password"}
            required
          />

          <input className="reg-btn" type="submit" value="Create an account" />
        </form>}

        {isLoading && <>Loading</>}
        {user?.email &&  <>User create succefully</>}

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
