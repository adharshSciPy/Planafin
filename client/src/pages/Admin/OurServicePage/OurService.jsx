import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import styles from './ourService.module.css';
import baseUrl from '../../../baseUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OurService() {
  const [formData, setFormData] = useState({
    title: '',
    subText: '',
    
  });

  const [details, setDetails] = useState([]);
  const [detailInput, setDetailInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
const [descriptions, setDescriptions] = useState([]);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [services, setServices] = useState([]); 
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handleDescriptionInput = (e) => {
    setDescriptionInput(e.target.value);
  };
  
  const handleAddDescription = () => {
    if (descriptionInput.trim() !== '') {
      setDescriptions([...descriptions, descriptionInput.trim()]);
      setDescriptionInput('');
    }
  };
  
  const handleRemoveDescription = (index) => {
    const updated = [...descriptions];
    updated.splice(index, 1);
    setDescriptions(updated);
  };
  
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const fetchServices = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/user/servicedetails`);
      setServices(res.data);
      // console.log("fetch service",res.data);
      
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const handleDelete = async (key) => {
    try {
      await axios.delete(`${baseUrl}/api/v1/user/our-services/${key}`);
      setMessage("Service deleted successfully");
      toast.success("Service deleted successfully");
      fetchServices(); 
    } catch (err) {
      setMessage(err.response?.data?.message || "Error deleting service");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const key = formData.title;
  
    const data = new FormData();
  
    data.append(`${key}[title]`, formData.title);
    data.append(`${key}[subText]`, formData.subText);
    descriptions.forEach((desc, index) => {
        data.append(`${key}[description][${index}]`, desc);
      });
      
  
    details.forEach((item, index) => {
      data.append(`${key}[details][${index}]`, item);
    });
  
    if (image) {
      data.append('image', image);
    }
  
    try {
      const res = await axios.post(`${baseUrl}/api/v1/user/createourservice`, data);
      toast.success(res.data.message);
      setFormData({ title: '', subText: ''});
      setDetails([]);
      setDescriptions([])
      setDetailInput('');
      setImage(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      fetchServices();
    } catch (err) {
        toast.error(err.response?.data?.message || 'Error submitting form');
    }
  };
  

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
         <ToastContainer position="bottom-right" autoClose={3000} />
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

<textarea
  id="description"
  placeholder="Add a description"
  value={descriptionInput}
  onChange={handleDescriptionInput}
  className={styles.textarea}
/>
<button
  type="button"
  className={styles.addDetailsButton}
  onClick={handleAddDescription}
>
  Add Description
</button>
</div>
<ul className={styles.detailList}>
  {descriptions.map((desc, index) => (
    <li key={index} className={styles.detailItem}>
      {desc}
      <button
        type="button"
        onClick={() => handleRemoveDescription(index)}
        className={styles.removeButton}
      >
        ×
      </button>
    </li>
  ))}
</ul>
        <div className={styles.detailInputGroup}>
          <input
            type="text"
            placeholder="Add a detail"
            value={detailInput}
            onChange={handleDetailChange}
            className={styles.input}
          />
          <button type="button" className={styles.addDetailsButton} onClick={handleAddDetail}>
            Add Detail
          </button>
        </div>
        <ul className={styles.detailList}>
          {details.map((detail, index) => (
            <li key={index} className={styles.detailItem}>
              {detail}
              <button type="button" onClick={() => handleRemoveDetail(index)} className={styles.removeButton}>
                ×
              </button>
            </li>
          ))}
        </ul>
 



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

      {/* {message && <p className={styles.message}>{message}</p>} */}

  
    </div>
    <div className={styles.serviceList}>
    <h3 className={styles.subheading}>Available Services</h3>
    {services.length === 0 ? (
      <p className={styles.noServices}>No services available.</p>
    ) : (
      <div className={styles.grid}>
        {services.map((service, index) => (
  <div key={index} className={styles.card}>
    <h4 className={styles.cardTitle}>{service.title}</h4>
   

    <button
      className={styles.deleteButton}
      onClick={() => handleDelete(service.key)}
    >
      Delete
    </button>
  </div>
))}

      </div>
    )}
  </div>
  </div>
  );
}

export default OurService;
