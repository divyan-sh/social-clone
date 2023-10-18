import React from "react";
import { Navigate } from "react-router-dom";
import routes from "../utils/routes";

const RequireAuth = (props) => {
  const isLoggedIn = true;
  return isLoggedIn ? props.children : <Navigate to={routes.SIGNIN} replace />;
};

export default RequireAuth;
