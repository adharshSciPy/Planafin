import {React,useEffect,useState} from "react";
import styles from "./IndustryImageList.module.css"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import baseUrl from "../../baseUrl";



function IndustryImageList() {
  const [viewImage, setViewImage] = useState([]);
  const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
  

const getIndustryImage = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/user/industryDetails`);
      setViewImage(response.data.data);
    } catch (error) {
      console.log("Error fetching the data", error);
    }
  };
  const deleteEmployeeImage = async (id) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/api/v1/user/deleteIndustry?id=${id}`
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
      getIndustryImage();
    } catch (error) {
      console.log("Error deleting Image", error);
    }
  };
useEffect(()=>{
    getIndustryImage()
},[])
// console.log(viewImage);

  return (
    
    <div className={styles.mainOuterDiv}>
        <h1 >Solution Icons List </h1>
      <div className={styles.cardContainer}>
        {viewImage.map((item, index) => (
          <div className={styles.singleCard} key={index}>
            <div className={styles.ImgSingleCard}>
              {item.industryImage && item.industryImage.length > 0 && (
                <img
                  src={`${baseUrl}${item.industryImage[0].path}`}
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

              <button
                className={styles.cancelBtn}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default IndustryImageList;
