import React from "react";
import Navbar from "../components/Navbar";

import Login from "../pages/login";
import { Outlet } from "react-router";

const AuthLayouts = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12  mx-auto  py-4 ">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto py-5">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayouts;
