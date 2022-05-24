import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";

const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return <>Loading</>;
  }

  if (user.email) {
    return children;
  }

  return <Navigate to="/googleLogin" state={{ from: location }} replace />;
};

export default PrivetRoute;
