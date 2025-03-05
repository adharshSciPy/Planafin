import React from "react";
import styles from "./Home.module.css";
import swiperImg from "../../assets/planafin.home.swiper-slider.png";
import cardImg1 from "../../assets/card.image.1.png";
import Header from "../../components/Header/Header.jsx";
function Home() {
  return (
    <div>
      <Header/>
      <div className={styles.elementorSpaceInner}></div>
      <div className={styles.elementorElement}>
        <div className={styles.elementorWidgetContainer}>
          <h2 className={styles.elementorHeading}>
            <span style={{ color: "#2d9bff" }}>Fast Track </span>
            your business value <br />
            through <span style={{ color: "#f1ce3b" }}>Connected </span>
            planning solutions
          </h2>
          <p className={styles.elementorPara}>
            Get a holistic view of your business and make better decisions
          </p>
        </div>
        <div className={styles.swiperSliderContainer}>
          <img
            src={swiperImg}
            alt="swiperSlider"
            className={styles.swiperSliderImage}
          />
        </div>
      </div>
      <div className={styles.elementorSectionContainer}>
        <div className={styles.elementorColumnMain}>
        <div className={styles.elementorColumn}>
          <div className={styles.elementorWidgetContainerHead}>
          
            Discover next generation of business planning
          </div>
          <p className={styles.widgetContainerPara}>
          Are you ready to take your business to the next level ? We at Planafin, empower business leaders to better drive management strategies and accelerate performance with predictive insight driven business planning, intelligent forecasting and analytical solutions. Elevate the decision making capabilities with dynamic real-time future proof models tailored to specific industry best practices with advanced cloud technologies.
          </p>

        </div>
        </div>

      </div>
      <div className={styles.elementorSectionContainer}>
        <div className={styles.elementorColumnQuotes}>
        <div className={styles.elementorColumn}>
        
          <p className={styles.widgetContainerQuotesPara}>
          “Our mission is to give our customers the power to unleash their full  business potential and derive value through future proof digital solutions connecting people, process, data and technology”
          </p>

        </div>
        </div>

      </div>
      <div className={styles.elementorServiceOffering}>
        <div className={styles.serviceOfferingHeadDiv}>
          <h2 className={styles.serviceOfferingHead}>
            Our Service Offerings
          </h2>
        </div>
        <div className={styles.serviceOfferingParaDiv}>
        <p className={styles.serviceOfferingPara}>
        Planafin is recognized as a leading service provider in Enterprise Performance Management (EPM) with over hundreds of implementations across  various industries. We enable clients to meet their business objectives through integrated services including consulting, solution advisory, implementation, system integration, managed services, and solution enablement.
        </p>
        </div>
        <div className={styles.serviseOfferingInnerMain}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceCardImage}>
            <img src={cardImg1} alt="cardImg1" />
            </div>
            <div className={styles.serviceCardHeadings}>
            <h2 className={styles.cardHead}>
            Business Advisory & Consulting
            </h2>
            </div>
            <div className={styles.serviceCardReadMoreDiv}>
              <h6 className={styles.readMore}>
                Read More
              </h6>
            </div>



              
            

          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
