import React, { useState ,useEffect} from 'react'
import styles from "./FeedBack.module.css";
import axios from 'axios';
import baseUrl from '../../baseUrl';
// import { message } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FeedBack() {
  const [feedbacks,setFeedbacks]=useState([]);
    // const [message, setMessage] = useState('');
    const [selectedFeedbackId, setSelectedFeedbackId] = useState(null);
    const [showModal, setShowModal] = useState(false);

  
  const [form, setForm] = useState({
    name: "",
    jobPosition: "",
    message: ""
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,

    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      if (key !== "image") {
        formData.append(key, form[key]);
      }
    });

    if (form.image) {
      formData.append("image", form.image);
    } else {
      console.log("No valid file selected");
      return;
    }

    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/user/addFeedback`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // console.log("Form data submitted", response);


      setForm({
        name: "",
        jobPosition: "",
        message: "",
        image: null,
      });

      // Optional: Reset file input field (if using a file input)
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";
      fetchFeedback();
       toast.success("Form Submitted successfully");

    } catch (error) {
      console.log("Error submitting formData", error.response?.data || error);
    }
  };
 
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/v1/user/viewFeedback`);
        // console.log("feedback data", response.data.data);
        setFeedbacks(response.data.data);
      } catch (error) {
        console.error("Error fetching feedback data:", error);
      }
    };
    useEffect(() => {
fetchFeedback()
  },[])
  const confirmDelete = async () => {
    if (!selectedFeedbackId) return;
    try {
      await axios.delete(`${baseUrl}/api/v1/user/deleteFeedback/${selectedFeedbackId}`);
      fetchFeedback();
      setShowModal(false);
      setSelectedFeedbackId(null);
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };
  
  const cancelDelete = () => {
    setShowModal(false);
    setSelectedFeedbackId(null);
  };
  
  return (
<>
         <ToastContainer position="bottom-right" autoClose={3000} />

    <div className={styles.applicationFormOuter}>
      <form className={styles.applicationFormMain} onSubmit={handleSubmit}>
        {" "}
        <h2 className={styles.formTitle}>Feedback application</h2>
        <div className={styles.formContainer}>
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="Employee Name*"
              className={styles.formInput}
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Employee Position"
              className={styles.formInput}
              name="jobPosition"
              value={form.jobPosition}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formLabelWraper}>
            <label className={styles.fileLabel}>Employee Image</label>
            <input
              type="file"
              className={styles.fileInput}
              name="image"
              onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
            />



          </div>
          <div className={styles.formLabelWraper}>
            <label className={styles.fileLabel}>Additional Information</label>
            <textarea
              rows={6}
              placeholder="Add employee feedback"
              className={styles.fullWidthInput}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.subimtButtonDiv}>
          <button className={styles.subimtButton} type="submit">
            {" "}
            <span className={styles.subimtButtonSpan}>
              SUBMIT FEEDBACK
            </span>
          </button>
        </div>
      </form>


    </div>
    <div className={styles.cardContainer}>
  {feedbacks.map((feedback) => (
    <div key={feedback._id} className={styles.card}>
      <img
        src={`${baseUrl}/${feedback.image}`} 
        alt={feedback.name}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3>{feedback.name}</h3>
        <p>{feedback.jobPosition}</p>
        {/* <p>{feedbacks.message}</p> */}
        <button
          className={styles.deleteButton}
          onClick={() => {
            setSelectedFeedbackId(feedback._id);
            setShowModal(true);
          }}
        
        >
          Delete
        </button>
      </div>
    </div>
   ))} 
   {showModal && (
  <div className={styles.modalBackdrop}>
    <div className={styles.modalContent}>
      <p>Are you sure you want to delete this feedback?</p>
      <div className={styles.modalActions}>
        <button className={styles.confirmButton} onClick={confirmDelete}>Yes, Delete</button>
        <button className={styles.cancelButton} onClick={cancelDelete}>Cancel</button>
      </div>
    </div>
  </div>
)}

</div>

    </>
  )
}

export default FeedBack
