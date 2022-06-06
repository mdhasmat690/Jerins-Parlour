import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";
import "./registration.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { ClockLoader } from "react-spinners";

const Registration = () => {
  const {user,createwithUserEmail,isLoading,authError} = useAuth()

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
    if (e.password !== e.password2) {
      alert("password not match");
      return;
    }

    const name = e.firstName + " " + e.lastName;
    
    createwithUserEmail(e.email, e.password, name, location, navigate)
    reset(); 
  };


  if(user.email){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Login Successfully'
    })
  }


  if(authError){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      
    })
  }

  useEffect(() => {
    AOS.init({ duration: 100 });
  }, []);

  return (
    <div className="my-5">
      <div data-aos="zoom-in" className="all-border mx-auto py-5">
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

        {isLoading && <div className="my-5">
          
          <ClockLoader
            size={40}
            color={"#123abc"}
            speedMultiplier={1.5}
          />
          
          </div>}
        

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
