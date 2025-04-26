import axios from "axios";
import React, { useState, } from "react";
import baseUrl from "../../baseUrl";
import { useNavigate,Link} from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';


import "./adminlogin.css";

function Adminlogin() {
  let field = {
    email: "",
    password: "",
  };
 const navigate=useNavigate();
  const [form,setForm]=useState(field);
  const [showPassword,setShowPassword]=useState(false);
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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
  const passwordToggle=()=>{
    setShowPassword(prev => !prev);
  }
  const handleForgotPassword = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/forgotPassword`);
      alert(response.data.message);
    } catch (error) {
      console.error("Forgot Password Error:", error);
      alert(error.response?.data?.message || "Something went wrong.");
    }
  };
  

  return (
    <div>
       <div className="admlogin-container">
      <h2>Admin Login</h2>
     

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
          <div className="input-span-btn23">
          <input
           type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            
          />
          <span onClick={passwordToggle} className="eyebtn"> {showPassword?<Eye size={25} />:<EyeOff size={25}/>} </span>
          </div>

        </div>

        <button className="admbtn" type="submit">Login</button>
        <p className="forgot-password-link" onClick={handleForgotPassword} style={{cursor: 'pointer', color: 'blue', marginTop: '10px'}}>
  Forgot Password?
</p>
        {/* <p className="admsignup-link">
          Don't have an account? <Link to={'/adminReg'}>Sign up</Link>
        </p> */}
      </form>
        </div>
    </div>
  )
}

export default Adminlogin