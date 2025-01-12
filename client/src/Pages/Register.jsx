import React from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Services/api";
import AuthForm from "../Components/AuthForm";
import { toast } from "react-toastify";
const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      await registerUser(data);
      toast("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast(error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <AuthForm onSubmit={handleRegister} isRegister />
    </div>
  );
};

export default Register;
