import React, { useState } from "react";
import "./adminreg.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../baseUrl";

function AdminReg() {
   const navigate=useNavigate();
  
  let field = {
    userName:"",
    email: "",
    password: "",
  };
    const [form,setForm]=useState(field);
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
     const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const response=await axios.post(`${baseUrl}/api/v1/user/register`,form);
          if(response){
            localStorage.setItem('token', response.data.token);
    localStorage.setItem('role', response.data.role);
    navigate('/adminlogin')
    
          }
        } catch (error) {
          console.log("Error Loging In",error);
          
        }
      }
       return (
        <div className="register-container">
          <h2> Admin Register</h2>
          <form onSubmit={handleSubmit} >
            <div className="input-group">
              <label>User Name</label>
              <input
                type="text"
                name="userName"
                value={form.userName}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
    
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}

                value={form.email}

                placeholder="Enter your email"
              
              />
            </div>
    
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}

                value={form.password}

                placeholder="Enter your password"
              />
            </div>
    
            <button className="last-button" type="submit">Register</button>
            <p className="login-link">
              Already have an account?
            </p>
            <Link to="adminlogin" className="link-dec">
            <h5 className="loginchey">Login</h5>
            </Link>
          </form>
        </div>
      );
    }
    
export default AdminReg