import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import styles from "./Audit.module.css";
import Footer from "../../components/Footer/Footer.jsx";
import axios from "axios";
import baseUrl from "../../baseUrl.js";
import { useLocation, useNavigate } from "react-router-dom";
const Audit = () => {
  const [services, setServices] = useState([]);
    const navigate=useNavigate()
  useEffect(() => {
    const getAuditData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/v1/user/kpoDetails`);
        setServices(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAuditData();
  }, []);
   const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <Header></Header>
      <div className={styles.banner}>
        <div className={styles.bannerImageWrapper}>
          <div className={styles.bannerFrontGradient}></div>
          <div className={styles.image}>
            <img
              src="data:image/svg+xml,%3Csvg class='banner-back-gradient' width='100%25' height='100%25' preserveAspectRatio='none' viewBox='0 0 1440 600' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3ClinearGradient x1='100.573144%25' y1='48.7599269%25' x2='15.0713926%25' y2='51.2104952%25' id='linearGradient-1'%3E%3Cstop stop-color='%23DFDFDF' stop-opacity='1' offset='0%25'%3E%3C/stop%3E%3Cstop stop-color='%23BBBBBB' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Rendering/Promotion/Banner-V1'%3E%3Cg id='Banner'%3E%3Cpolygon id='BG' fill='%23FFFFFF' points='1440 404.224609 1440 600 0 600'%3E%3C/polygon%3E%3Cpath d='M196.861674,573.050676 L208.036633,576.915602 C211.888361,591.342893 230.150897,598.914462 248.734154,597.105386 L1440,481.135878 L1440,481.135878 L1440,404.224609 L196.861674,573.050676 Z' id='Color-2' fill='url(%23linearGradient-1)'%3E%3C/path%3E%3Cpath d='M1193.32727,421.355789 L1440,0 L1440,0 L1440,404.224609 L0,600 L1162.74551,441.75298 C1175.53154,440.01283 L186.80798,432.491753 L193.32727,421.355789 Z' id='Color-1' fill='%23F9F9F9'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
              alt="Third Party Audit, Review & Compliance Services"
              style={{ opacity: 1 }}
            />
          </div>
        </div>

        {/* <svg
        className={styles.bannerBackGradient}
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 1440 600"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="100.573144%"
            y1="48.7599269%"
            x2="15.0713926%"
            y2="51.2104952%"
            id="linearGradient-1"
          >
            <stop
              stopColor="#DFDFDF"
              stopOpacity="0.30624453"
              offset="0%"
            ></stop>
            <stop stopColor="#BBBBBB" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g
          id="Symbols"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Rendering/Promotion/Banner-V1">
            <g id="Banner">
              <polygon
                id="BG"
                fill="#FFFFFF"
                points="1440 404.224609 1440 600 0 600"
              ></polygon>
              <path
                d="M196.861674,573.050676 L208.036633,576.915602 C211.888361,591.342893 230.150897,598.914462 248.734154,597.105386 L1440,481.135878 L1440,481.135878 L1440,404.224609 L196.861674,573.050676 Z"
                id="Color-2"
                fill="url(#linearGradient-1)"
              ></path>
              <path
                d="M1193.32727,421.355789 L1440,0 L1440,0 L1440,404.224609 L0,600 L1162.74551,441.75298 C1175.53154,440.01283 L186.80798,432.491753 L193.32727,421.355789 Z"
                id="Color-1"
                fill="#F9F9F9"
              ></path>
            </g>
          </g>
        </g>
      </svg> */}

        <div className={styles.content}>
          <h1 className={styles.title}>
            Human Resource – Consulting and Advisory Services
          </h1>
          <p className={styles.description}>
            At Planafin, we empower business leaders to focus on strategic
            growth by providing expert-driven HR solutions that efficiently
            manage and develop workforces as part of our Knowledge Process
            Outsourcing (KPO) offerings.
          </p>
        </div>
      </div>
      <div className="">
        <div className={styles.container}>
          <h1 className={styles.title}>
            Our Comprehensive HR KPO Offerings include:
          </h1>

          <div className={styles.cardsGrid}>
            {services.map((service) => (
              <div
                key={service.id}
                className={`${styles.card} ${
                  service.highlighted ? styles.highlighted : ""
                }`}
                onClick={()=>{
                    navigate(`/detail-KPO/${service._id}`)
                }}
              >
                <div className={styles.iconWrapper}>
                  <img src={`${baseUrl}${service.icon}`} alt="" className={styles.imageIcon}/>
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <button className={styles.buttonStyle}>Get In Touch</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <div className={styles.container}>
          <h1 className={styles.title}>Why Partner with Planafin?</h1>
          <div className="">
            <p className={styles.cardDescription}>
              Choosing Planafin for your HR KPO needs means leveraging our
              commitment to precision, confidentiality, and innovation. We
              combine industry best practices with advanced technology to reduce
              administrative burdens, enhance employee satisfaction, and enable
              your leadership team to focus on what matters most—accelerating
              business performance.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Audit;
