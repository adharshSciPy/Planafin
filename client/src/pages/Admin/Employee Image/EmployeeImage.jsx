import React from 'react';
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
  return (
    <div>
      <div className={styles.mainOuterDiv}>
        <h2 className={styles.mainHead}>
          EMPLOYEE IMAGE UPLOAD
        </h2>
        <div className={styles.employeeUploadDiv}>
          <button className={styles.EmpUploadBtn}>
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
