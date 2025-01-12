import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// Attach token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Expense-related APIs
export const fetchExpenses = (page) => API.get(`/api/expense/get-expenses?page=${page}`);
export const createExpense = (data) => API.post("/api/expense/create-expenses", data);
export const updateExpense = (id, data) => API.put(`/api/expense/update-expenses/${id}`, data);
export const deleteExpense = (id) => API.delete(`/api/expense/delete-expenses/${id}`);

// Auth APIs
export const registerUser = (data) => API.post("/api/user/register", data);
export const loginUser = (data) => API.post("/api/user/login", data);
