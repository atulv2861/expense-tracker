import React from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Services/api";
import AuthForm from "../Components/AuthForm";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await loginUser(data);
      localStorage.setItem("authToken", response.data.token);
      toast("Login successful!");
      // navigate("/");
      window.location.href='/';
    } catch (error) {
      console.error(error);
      toast("Login failed. Check your credentials.");
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <AuthForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
