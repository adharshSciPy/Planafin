import React, { useEffect, useState, useRef } from "react";
import styles from "./client.module.css";
import baseUrl from "../../../baseUrl.js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Clientimage() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [viewImage, setViewImage] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
  const fileInput = useRef();

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = async (files) => {
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach((file) => formData.append("imageCustomer", file));

    try {
      const response = await fetch(`${baseUrl}/api/v1/user/customerImage`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.status === 200) {
        toast.success("Image uploaded sucessfully", {
          position: "bottom-right",
          autoClose: 3000,
        });
        setSelectedFiles([]);
        fileInput.current.value = null;
        getEmployeeImage();
      } else {
        
        console.error("Upload failed:", result.message);
      }
    } catch (err) {
      toast.error("Uploading failed", {
        position: "bottom-right",
        autoClose: 3000,
      });
      console.error("Upload error:", err.message);
    }
  };

  const getEmployeeImage = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/v1/user/customerDetails`
      );
      const images = response?.data?.data || [];
      setViewImage(images);
    } catch (error) {
      console.error("Error fetching the data", error);
    }
  };

  const deleteEmployeeImage = async (id) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/api/v1/user/deleteCustomerImage?id=${id}`
      );
      if(response.status===200){
        toast.success("Image deleted sucessfully", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }else{
        toast.error("Error while deleting", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
      getEmployeeImage();
    } catch (error) {
      console.error("Error deleting image", error);
    }
  };

  useEffect(() => {
    getEmployeeImage();
  }, []);

  return (

    <div className={styles.mainOuterDiv}>
      <ToastContainer/>
      <h2 className={styles.mainHead}>CLIENT IMAGE UPLOAD</h2>

      <div className={styles.employeeUploadDiv}>
        <input type="file" multiple ref={fileInput} onChange={handleChange} />
        {selectedFiles.length > 0 && (
          <button
            className={styles.EmpUploadBtn}
            onClick={() => handleUpload(selectedFiles)}
          >
            Upload Image
          </button>
        )}
      </div>

      <div className={styles.cardContainer}>
        {viewImage.map((item, index) => (
          <div className={styles.singleCard} key={index}>
            <div className={styles.ImgSingleCard}>
              {item?.imageCustomer && (
                <img
                  src={`${baseUrl}${item.imageCustomer[0].path}`}
                  alt="Profile"
                  className={styles.cardImg}
                />
              )}
            </div>
            <div className={styles.btnContainer}>
              <button
               className={styles.deleteBtn}
                               onClick={() => {
                                 setDeleteId(item._id);
                                 setShowModal(true);
                               }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
       {showModal && (
              <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                  <h3>Confirm Deletion</h3>
                  <p>Are you sure you want to delete this image?</p>
                  <div className={styles.modalActions}>
                  <button
        className={styles.confirmBtn}
        onClick={() => {
          deleteEmployeeImage(deleteId);
          setShowModal(false);
          setDeleteId(null); 
        }}
      >
        OK
      </button>
      
                    <button className={styles.cancelBtn} onClick={() => setShowModal(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
    </div>
  );
}

export default Clientimage;
