import React, { useEffect, useState, useRef } from "react";
import styles from "./employee.module.css";
import baseUrl from "../../../baseUrl.js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function EmployeeImage() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [employeeImages, setEmployeeImages] = useState([]);
  const [viewImage, setViewImage] = useState([]);
  const fileInput = useRef();

  const handleChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  const handleUpload = async () => {
    if (!selectedFiles.length) {
      toast.error("Please select at least one file.", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("profileImg", file);
    });

    try {
      const response = await fetch(`${baseUrl}/api/v1/user/employeeImage`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.status === 200) {
        setEmployeeImages(result.data.profileImg);
        setSelectedFiles([]);
        if (fileInput.current) fileInput.current.value = null;
        getEmployeeImage();

        toast.success("Image uploaded successfully", {
          position: "bottom-right",
          autoClose: 3000,
        });
      } else {
        toast.error(result.message || "Upload failed", {
          position: "bottom-right",
          autoClose: 3000,
        });
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
      const response = await axios.get(`${baseUrl}/api/v1/user/employeeDetails`);
      setViewImage(response.data.data);
    } catch (error) {
      console.log("Error fetching the data", error);
    }
  };

  const deleteEmployeeImage = async (id) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/api/v1/user/deleteProfileImage?id=${id}`
      );
      if (response.status === 200) {
        toast.success("Image deleted successfully", {
          position: "bottom-right",
          autoClose: 3000,
        });
      } else {
        toast.error("Error while deleting", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
      getEmployeeImage();
    } catch (error) {
      console.log("Error deleting Image", error);
    }
  };

  // Upload only when files are selected
  useEffect(() => {
    if (selectedFiles.length > 0) {
      handleUpload();
    }
  }, [selectedFiles]);

  useEffect(() => {
    getEmployeeImage();
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className={styles.mainOuterDiv}>
        <h2 className={styles.mainHead}>EMPLOYEE IMAGE UPLOAD</h2>
        <div className={styles.employeeUploadDiv}>
          <input
            type="file"
            multiple
            ref={fileInput}
            onChange={handleChange}
            style={{ display: "none" }}
          />

          <button
            className={styles.EmpUploadBtn}
            onClick={() => fileInput.current && fileInput.current.click()}
          >
            Upload Image
          </button>
        </div>

        <div className={styles.cardContainer}>
          {viewImage.map((item, index) => (
            <div className={styles.singleCard} key={index}>
              <div className={styles.ImgSingleCard}>
                {item.profileImg && item.profileImg.length > 0 && (
                  <img
                    src={`${baseUrl}${item.profileImg[0].path}`}
                    alt="Profile"
                    className={styles.cardImg}
                  />
                )}
              </div>
              <div className={styles.btnContainer}>
                <button
                  className={styles.deleteBtn}
                  onClick={() => deleteEmployeeImage(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmployeeImage;
