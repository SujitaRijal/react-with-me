import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="items-center justify-center min-h-screen bg-gray-100">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
