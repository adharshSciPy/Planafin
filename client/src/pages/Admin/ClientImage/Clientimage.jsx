// import React, { useEffect, useState, useRef } from "react";
// import styles from "./employee.module.css";
// import baseUrl from "../../../baseUrl.js";
// import axios from "axios";

// function Clientimage() {
//   return (
//     <div>
//       <div className={styles.mainOuterDiv}>
//         <h2 className={styles.mainHead}>EMPLOYEE IMAGE UPLOAD</h2>
//         <div className={styles.employeeUploadDiv}>
//           <input type="file" multiple onChange={handleChange} />

//           <button className={styles.EmpUploadBtn} onClick={handleUpload}>
//             Upload Image
//           </button>
//         </div>
//         <div className={styles.cardContainer}>
//           {viewImage.map((item, index) => (
//             <div className={styles.singleCard} key={index}>
//               <div className={styles.ImgSingleCard}>
//                 {item.profileImg && item.profileImg.length > 0 && (
//                   <img
//                     src={`${baseUrl}${item.profileImg[0].path}`}
//                     alt="Profile"
//                     className={styles.cardImg}
//                   />
//                 )}
//               </div>
//               <div className={styles.btnContainer}>
//                 <button
//                   className={styles.deleteBtn}
//                   onClick={() => deleteEmployeeImage(item._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* <div className={styles.singleCard}>
//             <div className={styles.ImgSingleCard}>
//               <img src={padam} alt="" className={styles.cardImg} />
//             </div>
//             <div className={styles.btnContainer}>
//               <button className={styles.deleteBtn}>
//                 Delete
//               </button>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Clientimage;
