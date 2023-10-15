import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={<Element />} />;
};

export default ProtectedRoute;
