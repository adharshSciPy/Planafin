import React, { useState } from 'react'
import styles from "./FeedBack.module.css";
import axios from 'axios';
import baseUrl from '../../baseUrl';


function FeedBack() {
      const [form, setForm] = useState({
        name:"",
        jobPosition:"",
        message:""
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
                 {/* <div className={styles.formRow}>
                   <input
                     type="email"
                     placeholder="Email*"
                     className={styles.formInput}
                     name="email"
                     value={form.email}
                     onChange={handleChange}
                     required
                   />
                   <input
                     type="tel"
                     placeholder="Phone*"
                     className={styles.formInput}
                     name="phone"
                     value={form.phone}
                     onChange={handleChange}
                     required
                   />
                 </div>
                 <div className={styles.formRow}>
                   <input
                     type="text"
                     placeholder="Job Title*"
                     className={styles.formInput}
                     name="jobTitle"
                     value={form.jobTitle}
                     onChange={handleChange} 
                     required
                   />
                   <input
                     type="text"
                     placeholder="Company*"
                     className={styles.formInput}
                     name="company"
                     value={form.company}
                     onChange={handleChange}
                     required
                   />
                 </div> */}
                 <div className={styles.formLabelWraper}>
                   <label className={styles.fileLabel}>Employee Image</label>
                   <input
  type="file"
  className={styles.fileInput}
  name="image" 
  onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
/>


     
                 </div>
                 {/* <div className={styles.formLabelWraper}>
                   <label className={styles.fileLabel}>Current Company</label>
                   <input
                     type="text"
                     className={styles.fullWidthInput}
                     name="currentCompany"
                     value={form.currentCompany}
                     onChange={handleChange} 
                   />
                 </div>
                 <div className={styles.formLabelWraper}>
                   <label className={styles.fileLabel}>Linkedin URL</label>
                   <input
                     type="text"
                     className={styles.fullWidthInput}
                     name="linkedIn"
                     value={form.linkedIn}
                     onChange={handleChange}
                     required
                   />
                 </div>
                 <div className={styles.formLabelWraper}>
                   <label className={styles.fileLabel}>Twitter URL</label>
                   <input
                     type="text"
                     className={styles.fullWidthInput}
                     name="xUrl"
                     value={form.xUrl}
                     onChange={handleChange} 
                     required
                   />
                 </div>
                 <div className={styles.formLabelWraper}>
                   <label className={styles.fileLabel}>GitHub URL</label>
                   <input
                     type="text"
                     className={styles.fullWidthInput}
                     name="github"
                     value={form.github}
                     onChange={handleChange}
                     required
                   />
                 </div>
                 <div className={styles.formLabelWraper}>
                   <label className={styles.fileLabel}>Portfolio URL</label>
                   <input
                     type="text"
                     className={styles.fullWidthInput}
                     name="portfolio"
                     value={form.portfolio}
                     onChange={handleChange}
                     required
                   />
                 </div> */}
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
               {/* <span className={styles.formCheckboxOuter}>
                 <input type="checkbox" className={styles.formCheckbox} required />{" "}
     
                 <label className={styles.checkboxLabel}>
                   Yes, Planafin can contact me about future job opportunities for up
                   to 2 years
                 </label>
               </span> */}
               <div className={styles.subimtButtonDiv}>
                 <button className={styles.subimtButton} type="submit">
                   {" "}
                   <span className={styles.subimtButtonSpan}>
                     SUBMIT FEEDBACK
                   </span>
                 </button>
               </div>
             </form>
     
             {/* <Carousel options={OPTIONS} /> */}
           </div>

  )
}

export default FeedBack
