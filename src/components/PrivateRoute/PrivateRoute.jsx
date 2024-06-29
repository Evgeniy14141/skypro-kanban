import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../hooks/userUser";

function PrivateRoute() {
  const { userData } = useUser();
  return userData ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
