import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import useAuth from "../../../Hooks/UseAuth";

const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return <div className="mt-4 mb-5"> <ClipLoader
    size={50}
    color={"#123abc"}
   
    speedMultiplier={1.5}
  /></div>;
  }

  if (user.email) {
    return children;
  }

  return <Navigate to="/googleLogin" state={{ from: location }} replace />;
};

export default PrivetRoute;
