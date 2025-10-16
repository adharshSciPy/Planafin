import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./DetailAudit.module.css";
import image from "../../assets/hero.svg";
function DetailAudit() {
    const benefits = [
    'Knowledge of ESG materiality issues across a diverse set of industries',
    'Assess which ESG frameworks and reporting requirements apply to your business',
    'Application of financial reporting principals and controls to non-financial data',
    'Access to technology solutions to reduce the error-prone and time-consuming manual data entry process for ESG reporting'
  ];
  return (
    <>
      <Header></Header>
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <div className={styles.hero}>
          {/* Background Image */}
          <div className={styles.image}></div>

          {/* Background Gradient (SVG pattern) */}
          <div className={styles.heroBackGradient}></div>

          {/* Content Container */}
          <div className={styles.container}>
            <div className={styles.heroWrapper}>
              {/* Subheader */}
              <div className={styles.heroSubheader}>Advisory Services</div>

              {/* Main Header */}
              <h1 className={styles.heroHeader}>
                Sustainability Consulting Services
              </h1>

              {/* Description */}
              {/* <div className={styles.heroDescription}>
                Starting, maintaining and measuring a Sustainability program can
                be challenging. Bring clarity to your responsible business
                journey.
              </div> */}

              {/* CTA Link */}
            </div>
          </div>

          {/* Front Gradient Overlay */}
          
        </div>
        <div className={styles.heroFrontGradient}>
            <img src={image} alt="" />
          </div>
      </div>
      <div className="">
        <div className={styles.containertwo}>
      <h1 className={styles.title}>What is a Sustainability and ESG Consultant?</h1>
      
      <p className={styles.description}>
        A Sustainability and ESG consultant provides clarity and insights into the risks and opportunities associated with addressing Sustainability, <span className={styles.highlight}>Environmental, Social and Governance</span> issues for your business. Sustainability and ESG consultants have in-depth knowledge about <span className={styles.highlight}>ESG strategy</span>, program implementation and reporting. They also can share insights on the regulatory landscape, ESG trends and best practices.
      </p>

      <h2 className={styles.subtitle}>The key benefits and reasons to hire a Sustainability and ESG consultant include:</h2>

      <ul className={styles.benefitsList}>
        {benefits.map((benefit, index) => (
          <li key={index} className={styles.benefitItem}>
            <span className={styles.checkmark}>✓</span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default DetailAudit;
