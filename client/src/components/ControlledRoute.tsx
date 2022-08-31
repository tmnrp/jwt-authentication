import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";

//
interface ControlledRouteProps {
  children: JSX.Element;
}
export const ControlledRoute: React.FC<ControlledRouteProps> = ({
  children,
}) => {
  //
  const location = useLocation();
  const { user } = useAuthStore();

  // login path redirection
  if (location.pathname === "/login") {
    return user ? <Navigate to="/app/home" replace={true} /> : children;
  } else {
    return user ? children : <Navigate to="/login" replace={true} />;
  }
};
