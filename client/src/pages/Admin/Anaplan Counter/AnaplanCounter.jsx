import React, { useState } from 'react';
import styles from "./anaplanCounter.module.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import baseUrl from '../../../baseUrl';

function AnaplanCounter() {
  const [counter, setCounter] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/addAnaplanCounter`, { counter, title });
    //   setMessage(response.data.message);
    toast.success(response.data.message)
      setCounter('');
      setTitle('');
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div>

   
     <ToastContainer position="bottom-right" autoClose={3000} />
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter counter title"
            required
          />
        </div>

        <div className={styles.field}>
          <label>Counter:</label>
          <input
            type="number"
            value={counter}
            onChange={(e) => setCounter(e.target.value)}
            placeholder="Enter counter value"
            required
          />
        </div>

        <button type="submit" className={styles.button}>Add Counter</button>
      </form>

      {/* {message && <p className={styles.message}>{message}</p>} */}
    </div>
    </div>
  );
}

export default AnaplanCounter;
