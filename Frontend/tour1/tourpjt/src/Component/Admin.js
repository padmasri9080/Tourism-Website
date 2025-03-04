import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Admin.css";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/admin/login", {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("adminToken", response.data.token);
        navigate("/admin-dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2>Admin Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Admin;
