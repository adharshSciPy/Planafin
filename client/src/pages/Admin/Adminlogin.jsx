import axios from "axios";
import React, { useState, } from "react";
import baseUrl from "../../baseUrl";
import { useNavigate } from "react-router-dom";

import "./adminlogin.css";

function Adminlogin() {
  let field = {
    email: "",
    password: "",
  };
 const navigate=useNavigate();
  const [form,setForm]=useState(field);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  // };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response=await axios.post(`${baseUrl}/api/v1/user/login`,form);
      if(response){
        localStorage.setItem('token', response.data.token);
localStorage.setItem('role', response.data.role);
navigate('/admindashboard')

      }
    } catch (error) {
      console.log("Error Loging In",error);
      
    }
  }

  return (
    <div>
       <div className="admlogin-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="adminput-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="adminput-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange} 
          />
        </div>

        <button className="admbtn" type="submit">Login</button>
        <p className="admsignup-link">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
        </div>
    </div>
  )
}

export default Adminlogin