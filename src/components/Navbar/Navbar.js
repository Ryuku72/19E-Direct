import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="h-20">
      <div className="w-full flex justify-center bg-gray-900 p-2">
        <h1 className="text-2xl font-mono text-white ml-2 ">FOREIGN TOOLKIT.<span className="text-lg text-blue-600 mx-2 ">
          EMPLOYEE//DIRECTORY</span></h1>
      </div>
      <div className="h-8 bg-gray-900 flex border-gray-600 border-b-2 text-white">
      <div className="text-left w-1/2">
        <span className="block ml-4 hover:text-orange-400 hover:underline">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/home" ? "text-red-500" : "text-white"}>Home</Link>
        </span>
      </div>
      <div className="block w-1/2 text-right mr-4">
        <Link
          to="/departments"
          className={window.location.pathname === "/departments" ? "text-red-500" : "text-white"}
        >
          <span className="mx-4 hover:text-orange-400 hover:underline">
            Departments
          </span>
        </Link>
        <Link
          to="/roles"
          className={window.location.pathname === "/roles"  ? "text-red-500" : "text-white"}
        >
          <span className="mx-4 hover:text-orange-400 hover:underline">
            Roles
          </span>
        </Link>
        <Link
          to="/employees"
          className={window.location.pathname === "/employees" ? "text-red-500" : "text-white"}
        >
          <span className="mx-4 hover:text-orange-400 hover:underline">
            Employees
          </span>
        </Link>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
