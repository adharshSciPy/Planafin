import React, { useEffect, useRef, useState } from 'react';
import styles from './techPartners.module.css';
import axios from 'axios';
import baseUrl from '../../../baseUrl';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TechPartners() {
  const fileInputRef = useRef(null);
  const [message, setMessage] = useState('');
  const [partners, setPartners] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/user/getTechPartners`);
      setPartners(response.data.data);
    } catch (err) {
      console.error("Error fetching partners:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    if (!file) {
    //   setMessage('Please select an image file.');
    toast.error("Please select an image file.")
      return;
    }

    const formData = new FormData();
    formData.append('techPartnersImg', file);

    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/addTechPartners`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

    //   setMessage(response.data.message);
    toast.success(response.data.message);
      fileInputRef.current.value = '';
      fetchPartners();
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Upload failed');
    }
  };

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`${baseUrl}/api/v1/user/deleteTechPartners/${selectedId}`);
    //   setMessage('Partner deleted successfully');
    toast.success("Technology Partner deleted successfully")
      fetchPartners();
    } catch (err) {
      console.error("Delete error:", err);
    //   setMessage('Error deleting partner');
    toast.error("Error deleting partner")
    }
    setShowModal(false);
    setSelectedId(null);
  };

  return (
    <div>
           <ToastContainer position="bottom-right" autoClose={3000} />
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Upload Technology Partner Logo:</label>
          <input type="file" ref={fileInputRef} accept="image/*" required />
          <button type="submit" className={styles.button}>Upload</button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
      </div>

      <div className={styles.grid}>
        {partners.map((partner) => (
          <div key={partner._id} className={styles.card}>
            <img src={`${baseUrl}/${partner.techPartnersImg}`} alt="Tech Partner" />
            <button onClick={() => handleDeleteClick(partner._id)} className={styles.deleteBtn}>Delete</button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <p>Are you sure you want to delete this partner?</p>
            <div className={styles.modalActions}>
              <button onClick={confirmDelete} className={styles.confirmBtn}>Yes</button>
              <button onClick={() => setShowModal(false)} className={styles.cancelBtn}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TechPartners;
