import React,{useState} from 'react';
import styles from "./employee.module.css";
import padam from "../../../assets/Aarti-Ramachandran.jpg"

function EmployeeImage() {
  const employee=[
    {
      id:1,
      img:padam
    },
    {
      id:2,
      img:padam
    },
    {
      id:3,
      img:padam
    },
    {
      id:4,
      img:padam
    },{
      id:5,
      img:padam
    },
    {
      id:6,
      img:padam
    }
  ]
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [employeeImages, setEmployeeImages] = useState([]);
  const handleChange=(e)=>{
    setSelectedFiles(Array.from(e.target.files));

  }
  const handleUpload = async () => {
    if (!selectedFiles.length) {
      alert("Please select at least one file.");
      return;
    }

    const formData = new FormData();

    // Important: must match `upload.array('profileImg')`
    selectedFiles.forEach((file) => {
      formData.append("profileImg", file);
    });

    try {
      const response = await fetch("http://localhost:8000/api/v1/user/employeeImage", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.status===200) {
        console.log("Upload success:", result);
        setEmployeeImages(result.data.profileImg); 
      } else {
        console.error("Upload failed:", result.message);
      }
    } catch (err) {
      console.error("Upload error:", err.message);
    }}
  
  return (
    <div>
      <div className={styles.mainOuterDiv}>
        <h2 className={styles.mainHead}>
          EMPLOYEE IMAGE UPLOAD
        </h2>
        <div className={styles.employeeUploadDiv}>
        <input type="file" multiple onChange={handleChange} />

<button className={styles.EmpUploadBtn} onClick={handleUpload}>
  Upload Image
</button>

        </div>
        <div className={styles.cardContainer}>
          {employee.map((item,index)=>(
 <div className={styles.singleCard} key={index}>
 <div className={styles.ImgSingleCard}>
   <img src={item.img} alt="" className={styles.cardImg} />
 </div>
 <div className={styles.btnContainer}>
   <button className={styles.deleteBtn}>
     Delete
   </button>
 </div>
</div>
          ))}
         
          {/* <div className={styles.singleCard}>
            <div className={styles.ImgSingleCard}>
              <img src={padam} alt="" className={styles.cardImg} />
            </div>
            <div className={styles.btnContainer}>
              <button className={styles.deleteBtn}>
                Delete
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default EmployeeImage
