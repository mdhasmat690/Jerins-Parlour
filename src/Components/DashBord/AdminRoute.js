
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { BarLoader} from "react-spinners";
import useAuth from "../../Hooks/UseAuth";

const AdminRoute = ({ children}) => {
  let location = useLocation();
  const { user, admin, adminLoading } = useAuth();
  if (adminLoading) {
    return <> <div className="mt-5">
    <BarLoader
      size={40}
      color={"#123abc"}
     
      speedMultiplier={1.5}
    />
  </div></>;
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
