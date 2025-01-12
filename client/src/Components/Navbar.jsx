import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const isAuthenticated = !!localStorage.getItem("authToken");

  return (
    <nav className="bg-blue-500 p-4 flex justify-between">
      <h1 className="text-white text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        Expense Tracker
      </h1>
      <div>
        {isAuthenticated ? (
            <>
            <button
              onClick={() => navigate("/dashboard")}
              className="text-white border px-4 py-2 rounded mr-2 hover:bg-blue-600"
            >
              Dashboard
            </button>
            <button
            onClick={handleLogout}
            className="text-white border px-4 py-2 rounded hover:bg-blue-600"
          >
            Logout
          </button>
            </>          
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="text-white border px-4 py-2 rounded mr-2 hover:bg-blue-600"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="text-white border px-4 py-2 rounded hover:bg-blue-600"
            >
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
