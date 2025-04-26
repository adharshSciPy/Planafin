import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./resetPswd.module.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import the CSS
import baseUrl from "../../../baseUrl";

function ResetPassword() {
  const { userId, token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password.trim()) {
      toast.warning("Please enter a valid password");
      return;
    }

    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/user/resetPasswordUser/${userId}/${token}`,
        { password }
      );

      if (response.status === 200) {
        toast.success("Password reset successful! Redirecting to login...", {
          autoClose: 2000,
          position: "top-center",
        });
        setTimeout(() => navigate("/adminlogin"), 2000); // delay a bit more than toast
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Reset failed", {
        position: "top-center",
      });
    }
  };

  return (
    <div className={styles.resetContainer}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
      <h2>Reset Your Password</h2>
      <form onSubmit={handleSubmit} className={styles.resetForm}>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.resetButton}>
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
