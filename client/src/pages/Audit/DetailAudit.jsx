// import React, { useEffect, useState } from "react";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import styles from "./DetailAudit.module.css";
// import image from "../../assets/hero.svg";
// import { useParams } from "react-router-dom";
// import baseUrl from "../../baseUrl";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// function DetailAudit() {
//   const { id } = useParams();
//   const [auditData, setAuditData] = useState();
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const res = await axios.get(`${baseUrl}/api/v1/user/KpoById/${id}`);
//         setAuditData(res.data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getData();
//   }, []);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [pathname]);
//   console.log(auditData);

//   return (
//     <>
//       <Header></Header>
//       <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
//         <div
//           className={styles.hero}
//           style={{
//             backgroundImage: `url(${
//               auditData?.image
//                 ? `${baseUrl}${auditData.image}`
//                 : "../../assets/environmental-social-governance.jpg"
//             })`,
//           }}
//         >
//           {/* Background Image */}
//           <div className={styles.image}></div>

//           {/* Background Gradient (SVG pattern) */}
//           <div className={styles.heroBackGradient}></div>

//           {/* Content Container */}
//           <div className={styles.container}>
//             <div className={styles.heroWrapper}>
//               {/* Subheader */}
//               {/* <div className={styles.heroSubheader}>Advisory Services</div> */}

//               {/* Main Header */}
//               <h1 className={styles.heroHeader}>{auditData?.title || ""}</h1>

//               {/* Description */}
//               {/* <div className={styles.heroDescription}>
//                 Starting, maintaining and measuring a Sustainability program can
//                 be challenging. Bring clarity to your responsible business
//                 journey.
//               </div> */}

//               {/* CTA Link */}
//             </div>
//           </div>

//           {/* Front Gradient Overlay */}
//         </div>
//         <div className={styles.heroFrontGradient}>
//           <img src={image} alt="" />
//         </div>
//       </div>
//       <div className="">
//         <div className={styles.containertwo}>
//           <h1 className={styles.title}>{auditData?.title || ""}</h1>

//           <p className={styles.description}>{auditData?.description || ""}</p>

//           <h2 className={styles.subtitle}>{auditData?.subTitle || ""}</h2>

//           <ul className={styles.benefitsList}>
//             {auditData?.features.map((benefit, index) => (
//               <li key={index} className={styles.benefitItem}>
//                 <span className={styles.checkmark}>✓</span>
//                 {benefit}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <Footer></Footer>
//     </>
//   );
// }

// export default DetailAudit;
