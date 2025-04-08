import React, { useState } from "react";
import "./adminreg.css";
import { Link } from "react-router-dom";

function AdminReg() {
       return (
        <div className="register-container">
          <h2> Admin Register</h2>
          <form >
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
    
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
              
              />
            </div>
    
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
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