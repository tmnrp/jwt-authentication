import React from "react";
import { Navigate, useLocation } from "react-router-dom";

//
interface ControlledRouteProps {
  children: JSX.Element;
}
export const ControlledRoute: React.FC<ControlledRouteProps> = ({
  children,
}) => {
  //
  const user = true;
  const location = useLocation();

  // login path redirection
  if (location.pathname === "/login") {
    return user ? <Navigate to="/app/home" replace={true} /> : children;
  } else {
    return user ? children : <Navigate to="/login" replace={true} />;
  }
};
