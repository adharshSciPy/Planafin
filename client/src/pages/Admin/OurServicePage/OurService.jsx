import React, { useState, useRef } from 'react';
import axios from 'axios';
import styles from './ourService.module.css';
import baseUrl from '../../../baseUrl';

function OurService() {
  const [formData, setFormData] = useState({
    title: '',
    subText: '',
    description: '',
  });

  const [details, setDetails] = useState([]);
  const [detailInput, setDetailInput] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDetailChange = (e) => {
    setDetailInput(e.target.value);
  };

  const handleAddDetail = () => {
    if (detailInput.trim() !== '') {
      setDetails([...details, detailInput.trim()]);
      setDetailInput('');
    }
  };

  const handleRemoveDetail = (index) => {
    const updated = [...details];
    updated.splice(index, 1);
    setDetails(updated);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    const key = 'service1';

    data.append(`${key}[title]`, formData.title);
    data.append(`${key}[subText]`, formData.subText);
    data.append(`${key}[description]`, formData.description);
    details.forEach((item, index) => {
      data.append(`${key}[details][${index}]`, item);
    });
    if (image) {
      data.append('image', image);
    }

    try {
      const res = await axios.post(`${baseUrl}/api/v1/user/createourservice`, data);
      setMessage(res.data.message);
      setFormData({ title: '', subText: '', description: '' });
      setDetails([]);
      setDetailInput('');
      setImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error submitting form');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Create a Service</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="text"
          name="subText"
          placeholder="Sub Text"
          value={formData.subText}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <div className={styles.detailInputGroup}>
          <input
            type="text"
            placeholder="Add a detail"
            value={detailInput}
            onChange={handleDetailChange}
            className={styles.input}
          />
          <button
            type="button"
            className={styles.addDetailsButton}
            onClick={handleAddDetail}
          >
            Add Detail
          </button>
        </div>

        <ul className={styles.detailList}>
          {details.map((detail, index) => (
            <li key={index} className={styles.detailItem}>
              {detail}
              <button
                type="button"
                onClick={() => handleRemoveDetail(index)}
                className={styles.removeButton}
              >
                ×
              </button>
            </li>
          ))}
        </ul>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className={styles.textarea}
        />

        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          accept="image/*"
          ref={fileInputRef}
          className={styles.input}
        />

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

export default OurService;
