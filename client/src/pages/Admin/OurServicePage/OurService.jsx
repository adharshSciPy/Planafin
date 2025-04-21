import React, { useState } from 'react';
import axios from 'axios';
import styles from './ourService.module.css';

function OurService() {
  const [formData, setFormData] = useState({
    title: '',
    subText: '',
    details: '',
    description: '',
  });

  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    for (const key in formData) {
      data.append(key, formData[key]);
    }

    if (image) {
      data.append('image', image);
    }

    try {
      const res = await axios.post('/createourservice', data);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error submitting form');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Create a Service</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subText"
          placeholder="Sub Text"
          value={formData.subText}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="details"
          placeholder="Details"
          value={formData.details}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input type="file" name="image" onChange={handleImageChange} accept="image/*" />
        <button type="submit">Submit</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

export default OurService;
