/*import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="signup-page"> 
      <div className="signup-container"> 
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Signup</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;
*/
import React, { useState } from "react";
import axios from "axios";
import './Signup.css'

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!user.username || !user.email || !user.password) {
      setMessage("❌ All fields are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3003/users/signup", user);
      setMessage(response.data.message || "✅ Signup Successful!");
      setUser({ username: "", email: "", password: "" });
    } catch (error) {
      setMessage(error.response?.data?.message || "❌ Signup Failed!");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={user.username} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} required />
        </div>

        <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Signup;
