import axios from "axios";
import React, { useState, } from "react";
import baseUrl from "../../baseUrl";
import { useNavigate,Link} from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import "./adminlogin.css";

function Adminlogin() {
  let field = {
    email: "",
    password: "",
  };
 const navigate=useNavigate();
  const [form,setForm]=useState(field);
  const [showPassword,setShowPassword]=useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  
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
    if (isSendingEmail) return;
  
    setIsSendingEmail(true);
    const toastId = toast.loading("Sending password reset email...");
  
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/forgotPassword`);
      toast.update(toastId, {
        render: response.data.message,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      toast.update(toastId, {
        render: error.response?.data?.message || "Something went wrong.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setIsSendingEmail(false);
    }
  };
  

  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

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
        <p
  className="forgot-password-link"
  onClick={handleForgotPassword}
  style={{
    cursor: isSendingEmail ? 'not-allowed' : 'pointer',
    color: isSendingEmail ? 'gray' : 'blue',
    marginTop: '10px',
    pointerEvents: isSendingEmail ? 'none' : 'auto',
  }}
>
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