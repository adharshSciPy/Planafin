import React, { useState } from 'react'
import styles from "./FeedBack.module.css";
import axios from 'axios';
import baseUrl from '../../baseUrl';


function FeedBack() {
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

      console.log("Form data submitted", response);


      setForm({
        name: "",
        jobPositionPosition: "",
        message: "",
        image: null,
      });

      // Optional: Reset file input field (if using a file input)
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";

    } catch (error) {
      console.log("Error submitting formData", error.response?.data || error);
    }
  };
  return (

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

  )
}

export default FeedBack
