import React, { useState } from "react";

const AuthForm = ({ onSubmit, isRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 w-1/3 rounded-lg">
      <h2 className="text-lg font-bold mb-4">
        {isRegister ? "Register" : "Login"}
      </h2>
      {isRegister && (
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="block w-full p-2 mb-4 border rounded"
          required
        />
      )}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        {isRegister ? "Register" : "Login"}
      </button>
    </form>
  );
};

export default AuthForm;
