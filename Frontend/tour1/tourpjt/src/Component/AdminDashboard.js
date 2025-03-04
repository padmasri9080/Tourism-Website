import React, { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin-login");
      return;
    }

    axios
      .get("http://localhost:3000/bookings", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setBookings(response.data))
      .catch(() => alert("Error fetching bookings."));
  }, [navigate]);

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(bookings);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings");
    XLSX.writeFile(workbook, "Bookings.xlsx");
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <div className="admin-page">
      <h2>Admin - Booking Management</h2>
      <button onClick={exportToExcel} className="export-btn">Export to Excel</button>
      <button onClick={handleLogout} className="logout-btn">Logout</button>
      <table className="booking-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of Travel</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.fullName}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
              <td>{booking.dateOfTravel}</td>
              <td>{booking.destination}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
