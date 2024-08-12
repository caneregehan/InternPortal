import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { token, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Yüklenirken bir yüklenme mesajı gösterebiliriz
  }

  console.log(token);

  return token !== null ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
