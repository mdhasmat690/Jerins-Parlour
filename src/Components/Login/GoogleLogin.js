import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import "./google.css";

const GoogleLogin = () => {
  const { signInWithGoogle, signInPassword, authError } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()
  const redirect = location.state?.form || '/home'

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    signInPassword(e.email, e.password,location, navigate);
    console.log(e);
  };

/*  const googleLogin = () =>{
  signInWithGoogle()
  .then((result) => {
    navigate(redirect)
  })
  .catch((error) => {
    const errorMessage = error.message;
  })
  // .finally(()=>setIsLoading(false));
 } */
 
 const googleLogin = () =>{
  signInWithGoogle()
  .then((result) => {
    navigate(redirect)
  })
  .catch((error) => {
    const errorMessage = error.message;
  });
}

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

            <input className="reg-btn" type="submit" value="Login" />
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
            <button onClick={googleLogin} className="signInStyle">
              <img
                className="googleLogo"
                src="https://i.ibb.co/SxQwGMW/Group-571.png"
                alt=""
              />
              <span className="space">continue with google</span>
            </button>
            {authError && <h6 style={{ color: "red" }}>Error</h6>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleLogin;
