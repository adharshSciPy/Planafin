import React, { useEffect, useState, useRef } from "react";
import styles from "./client.module.css";
import baseUrl from "../../../baseUrl.js";
import axios from "axios";

function Clientimage() {
    const [selectedFiles, setSelectedFiles] = useState([]);
      // const [employeeImages, setEmployeeImages] = useState([]);
      const[viewImage,setViewImage]=useState([]);
      const fileInput=useRef();
      const [previewImages, setPreviewImages] = useState([]);
      const handleChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
      
        if (files.length > 0) {
          // Upload immediately
          handleUpload(files);
        }
      };
      const handleUpload = async (files) => {
        const formData = new FormData();
        files.forEach((file) => {
          formData.append("imageCustomer", file);
        });
      
        try {
          const response = await fetch(`${baseUrl}/api/v1/user/customerImage`, {
            method: "POST",
            body: formData,
          });
      
          const result = await response.json();
      
          if (response.status === 200) {
            console.log("Upload success:", result);
            setSelectedFiles([]);
            setPreviewImages([]);
            if (fileInput.current) {
              fileInput.current.value = null;
            }
            getEmployeeImage();
          } else {
            console.error("Upload failed:", result.message);
          }
        } catch (err) {
          console.error("Upload error:", err.message);
        }
      };
      
      const getEmployeeImage=async ()=>{
        try {
         const response=await axios.get(`${baseUrl}/api/v1/user/customerDetails`) ;
         console.log("employee image",response.data.data[0].imageCustomer);
         setViewImage(response.data.data[0].imageCustomer)
        } catch (error) {
          console.log("Error fetching the data",error);
          
        }
      }
      const deleteEmployeeImage=async(id)=>{
        try {
          const response = await axios.delete(`${baseUrl}/api/v1/user/deleteProfileImage?id=${id}`);
          console.log("Image Deleted Succesfully",response);
          getEmployeeImage();
        } catch (error) {
          console.log("Error deleting Image",error);
          
        }
      }
      useEffect(()=>{
        getEmployeeImage();
      },[])
      const imageView=viewImage.map((item,index)=>{return item.path})
      
  return (
    <div>
      <div className={styles.mainOuterDiv}>
        <h2 className={styles.mainHead}>EMPLOYEE IMAGE UPLOAD</h2>
        <div className={styles.employeeUploadDiv}>
          <input type="file" multiple onChange={handleChange} />

          <button className={styles.EmpUploadBtn} onClick={handleUpload}>
            Upload Image
          </button>
        </div>
        <div className={styles.cardContainer}>
          {viewImage.map((item, index) => (
            <div className={styles.singleCard} key={index}>
              <div className={styles.ImgSingleCard}>
                {item.path && item.path.length > 0 && (
                  <img
                    src={`${baseUrl}${item.path}`}
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

export default Clientimage;
