import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../context/AuthContext";

const Header = () => {
  const { logout } = useAuth();
  return (
    <nav className="bg-blue-500 p-4 shadow-md flex flex-col md:flex-row justify-between items-center min-h-[10vh] mx-auto">
      <div className="flex justify-center flex-1 mb-4 md:mb-0  ">
        <ul className="flex space-x-14 ">
          <li>
            <Link
              to="/"
              className="text-white hover:text-green-200 transition-colors duration-200 "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/stocks"
              className="text-white hover:text-green-200 transition-colors duration-200"
            >
              Stocks
            </Link>
          </li>
          <li>
            <Link
              to="/knowledge"
              className="text-white hover:text-green-200 transition-colors duration-200"
            >
              Knowledge
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-green-200 transition-colors duration-200"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 ">
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
        />
        <Link
          to={"/Login"}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
        >
          Login
        </Link>
      </div>
      <div className="flex items-center space-x-4 ">
        <Link
          to={"/Login"}
          onClick={logout}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Header;
