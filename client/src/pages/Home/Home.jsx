import React, { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import swiperImg from "../../assets/planafin.home.swiper-slider.png";
import cardImg1 from "../../assets/card.image.1.png";
import cardImg2 from "../../assets/card.image.2.png";
import cardImg3 from "../../assets/card.image.3.png";
import enterpriseImg from "../../assets/businesspeople-working-finance-accounting-analyze-financi-2048x1349.jpg";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import vector1 from "../../assets/Vector-1.png";
import vector2 from "../../assets/Vector-2.png";
import vector3 from "../../assets/Vector-3.png";
import frame from "../../assets/Frame.png";
import frame1 from "../../assets/Frame-1.png";
import flickeringImg from "../../assets/flickeringImg.png";
import Carousel from "../../components/Carousel/EmblaCarousel";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const readMoreNavigation = (id) => {
    navigate("/Services", { state: { activeTab: id, scrollToTabs: true } });
    // window.scrollTo(0, 0);
  };
  // contact us
  const ContactUs = () => {
    navigate("/lets-talk");
    window.scrollTo(0, 0);
  };
  // solution readmore
  const solutionReadMore = () => {
    navigate("/solutions");
    window.scrollTo(0, 0);
  };
  const OPTIONS = { loop: true };
  const myRef = useRef([]);
  const observerRef = useRef(null);
  const headingRef = useRef([]);
 
  const setElementRef = (index) => (el) => {
    if (el) {
      myRef.current[index] = el;
      if (observerRef.current) observerRef.current.observe(el);
    }
  };

  const setHeadingRef = (index) => (el) => {
    if (el) {
      headingRef.current[index] = el;
      if (observerRef.current) observerRef.current.observe(el);
    }
  };
  return (
    <div>
      <Header />

      <div className={styles.elementorSpaceInner}></div>
      <div
        className={styles.elementorElement}
        ref={(el) => setElementRef(-1)(el)}
      >
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
      <div
        className={styles.elementorSectionContainer}
        ref={(el) => setElementRef(-1)(el)}
      >
        <div className={styles.elementorColumnMain}>
          <div className={styles.elementorColumn}>
            <div className={styles.elementorWidgetContainerHead}>
              Discover next generation of business planning
            </div>
            <p className={styles.widgetContainerPara}>
              Are you ready to take your business to the next level? We at
              Planafin, empower business leaders to better drive management
              strategies and accelerate performance with predictive insight
              driven business planning, intelligent forecasting and analytical
              solutions. Elevate the decision making capabilities with dynamic
              real-time future-proof models tailored to specific industry best
              practices with advanced cloud technologies.
            </p>
          </div>
        </div>
      </div>
      <div
        className={styles.elementorSectionContainer}
        ref={(el) => setElementRef(-1)(el)}
      >
        <div className={styles.elementorColumnQuotes}>
          <div className={styles.elementorColumn}>
            <p className={styles.widgetContainerQuotesPara}>
              “Our mission is to give our customers the power to unleash their
              full business potential and derive value through future-proof
              digital solutions connecting people, process, data, and
              technology”
            </p>
          </div>
        </div>
      </div>
      <div
        className={styles.elementorServiceOffering}
        ref={(el) => setElementRef(-1)(el)}
      >
        <div className={styles.serviceOfferingHeadDiv}>
          <h2 className={styles.serviceOfferingHead}>Our Service Offerings</h2>
        </div>
        <div className={styles.serviceOfferingParaDiv}>
          <p className={styles.serviceOfferingPara}>
            Planafin is recognized as a leading service provider in Enterprise
            Performance Management (EPM) with over hundreds of implementations
            across various industries. We enable clients to meet their business
            objectives through integrated services including consulting,
            solution advisory, implementation, system integration, managed
            services, and solution enablement.
          </p>
        </div>
        <div className={styles.serviseOfferingInnerMain}>
          <div className={styles.serviceCard}>
            <div
              className={styles.serviceCardImage}
              ref={(el) => setElementRef(-1)(el)}
            >
              <img src={cardImg1} alt="cardImg1" />
            </div>
            <div className={styles.serviceCardHeadings}>
              <div className={styles.headingAndLine}>
                <h2 className={styles.cardHead}>
                  Business Advisory & Consulting
                </h2>
              </div>
            </div>
            <div className={styles.serviceCardReadMoreDiv}>
              <div className={styles.headingLine}></div>

              <h6
                className={styles.readMore}
                onClick={() => readMoreNavigation("Business-Consulting")}
              >
                Read More <span>&gt;&gt;</span>
              </h6>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <div
              className={styles.serviceCardImage}
              ref={(el) => setElementRef(-1)(el)}
            >
              <img src={cardImg2} alt="cardImg2" />
            </div>
            <div className={styles.serviceCardHeadings}>
              <div className={styles.headingAndLine}>
                <h2 className={styles.cardHead}>Solution Implementation</h2>
              </div>
            </div>
            <div className={styles.serviceCardReadMoreDiv}>
              <div className={styles.headingLine}></div>

              <h6
                className={styles.readMore}
                onClick={() => readMoreNavigation("Solution-Deployment")}
              >
                Read More <span>&gt;&gt;</span>
              </h6>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <div
              className={styles.serviceCardImage}
              ref={(el) => setElementRef(-1)(el)}
            >
              <img src={cardImg3} alt="cardImg3" />
            </div>
            <div className={styles.serviceCardHeadings}>
              <div className={styles.headingAndLine}>
                <h2 className={styles.cardHead}>
                  Managed Services & Enablement
                </h2>
              </div>
            </div>
            <div className={styles.serviceCardReadMoreDiv}>
              <div className={styles.headingLine}></div>

              <h6
                className={styles.readMore}
                onClick={() => readMoreNavigation("Managed-Support-Services")}
              >
                Read More <span>&gt;&gt;</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.enterprisePerfomanceMain}>
        <div className={styles.enterpriseContentDiv}>
          <h3 className={styles.enterpriseContentMainHead}>
            Enterprise Performance <br /> Management
          </h3>
          <h5 className={styles.enterpriseContentSubHead}>
            Leading Implementation Partner
          </h5>
          <h6 className={styles.enterpriseContentSubHead2}>
            Business Planning and Digital Transformation
          </h6>
          <div className={styles.enterpriseContentParaDiv}>
            <p className={styles.enterpriseContentParagraph}>
              Planafin has proved its excellence in architecting and delivering
              cloud based planning and analytical solutions across various
              domains and sectors. Our goal is to partner and help organizations
              attain a digitalized, intelligent, fully connected state, by
              effectively connecting business processes, leveraging the best in
              class technology, that is easy to adopt and business owned.
            </p>
          </div>
        </div>
        <div className={styles.enterpriseImageDiv}>
          <div className={styles.enterpriseImageDisplay}>
            <img
              src={enterpriseImg}
              className={styles.enterpriseImgShow}
              alt="enterpriseImg"
            />
          </div>
        </div>
      </div>

      <div
        className={styles.overlayMainDiv}
        ref={(el) => setElementRef(-1)(el)}
      >
        <div className={styles.elementorOverlayMainBox}>
          <h2 className={styles.overlayMainHeading}>
            Elevate your company's future
          </h2>
          <div className={styles.overlayMainParaDiv}>
            <p className={styles.overlayMainPara}>
              Get connected to experience the connected planning and business
              transformation journey
            </p>
          </div>
          <div
            className={styles.overlayMainBtnDiv}
            ref={(el) => setElementRef(-1)(el)}
          >
            <button
              className={styles.overlayButton}
              onClick={() => ContactUs()}
            >
              Contact us
              <span
                className="fas fa-arrow-right"
                style={{
                  fontFamily: "Font Awesome 5 Free",
                  fontWeight: 900,
                  fill: "#FFFFFF",
                  color: "#FFFFFF",
                }}
              ></span>
            </button>
          </div>
        </div>
        <div className={styles.overlayImageMainDiv}></div>
      </div>
      <div className={styles.expertiseMainDiv}>
        <h2 className={styles.expertiseHeading}>Our Expertise and Solutions</h2>
        <div className={styles.expertiseParaDiv}>
          <p className={styles.expertiseParagraph}>
            Planafin has expertise in providing business process-oriented
            planning solutions in finance, workforce, supply chain, sales and
            marketing, operational expenses, capital expenditure, across various
            industries such as manufacturing, healthcare, retail, aviation,
            consumer goods, shipping and logistics, oil and gas, e-commerce,
            technology, mining and metals, real estate and education.
          </p>
        </div>
        <div className={styles.expertiseGridMainDiv}>
          <div className={styles.expertiseSingleCardOuter}>
            <div
              className={styles.expertiseCardImgDiv}
              ref={(el) => setElementRef(-1)(el)}
            >
              <img src={vector1} alt="vector1" />
            </div>
            <h2 className={styles.expertiseHead}>Sales & Marketing</h2>
            <p className={styles.expertisePara}>
              Optimize and execute go-to-market strategies, drive revenue
              growth, integrate marketing goals, and build agility into the
              sales process
            </p>
          </div>
          <div className={styles.expertiseSingleCardOuter}>
            <div
              className={styles.expertiseCardImgDiv}
              ref={(el) => setElementRef(-1)(el)}
            >
              <img src={vector2} alt="vector2" />
            </div>
            <h2 className={styles.expertiseHead}>Finance & Accounting</h2>
            <p className={styles.expertisePara}>
              Advanced financial planning and automatic reporting with real-time
              scenario analysis and in-depth data insights
            </p>
          </div>
          <div className={styles.expertiseSingleCardOuter}>
            <div
              className={styles.expertiseCardImgDiv}
              ref={(el) => setElementRef(-1)(el)}
            >
              <img src={vector3} alt="vector3" />
            </div>
            <h2 className={styles.expertiseHead}>Legal Consolidation</h2>
            <p className={styles.expertisePara}>
              Streamline consolidation of investments across legal entities,
              accounting structures, intercompany elimination, and currency
              translation.
            </p>
          </div>
          <div className={styles.expertiseSingleCardOuter}>
            <div
              className={styles.expertiseCardImgDiv}
              ref={(el) => setElementRef(-1)(el)}
            >
              <img src={frame} alt="frame" />
            </div>
            <h2 className={styles.expertiseHead}>HR & Workforce</h2>
            <p className={styles.expertisePara}>
              Get a holistic view of workforce operations, prioritize
              investments, optimize utilization, track metrics, and hiring
              needs.
            </p>
          </div>
          <div className={styles.expertiseSingleCardOuter}>
            <div
              className={styles.expertiseCardImgDiv}
              ref={(el) => setElementRef(-1)(el)}
            >
              <img src={frame1} alt="frame1" />
            </div>
            <h2 className={styles.expertiseHead}>Supply Chain</h2>
            <p className={styles.expertisePara}>
              Gain operational excellence and respond quickly to real-time
              shifts in supply and customer demands with integrated S&OP
              solutions.
            </p>
          </div>
          <div className={styles.expertiseSingleCardOuterSolutions}>
            <h2 className={styles.expertiseSingleCardSolutionHead}>
              Solution Accelerators
            </h2>
            <p className={styles.expertiseSingleCardSolutionPara}>
              We also offer an exclusive range of ready to use business planning
              accelerators.
            </p>
            <div
              className={styles.overlayMainBtnDiv2}
              ref={(el) => setElementRef(-1)(el)}
            >
              <button
                className={styles.overlayButton2}
                onClick={() => solutionReadMore()}
              >
                Read More
                <span
                  className="fas fa-arrow-right"
                  style={{
                    fontFamily: "Font Awesome 5 Free",
                    fontWeight: 900,
                    fill: "#FFFFFF",
                    color: "#FFFFFF",
                  }}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* carousel div incomplete */}
      <div className={styles.carouselOuterMain}>
        <h2 className={styles.carouselMainHead}>Our Customer Experience</h2>
        <p className={styles.carouselPara}>
          Global leaders across various industries have trusted Planafin
        </p>
        <Carousel options={OPTIONS} />
      </div>
      <div className={styles.flickeringImageOuter}>
        <div
          className={styles.flickeringImgInner}
          ref={(el) => setElementRef(-1)(el)}
        >
          <img
            src={flickeringImg}
            alt="flickeringImg"
            className={styles.flickeingImg}
          />
        </div>
        <div className={styles.flickeringContentDiv}>
          <h2 className={styles.flickeringContentHead}>
            Upscale your business performance <br />
            Enable faster and better decision making
          </h2>
          <div
            className={styles.overlayMainBtnDiv}
            ref={(el) => setElementRef(-1)(el)}
          >
            <button
              className={styles.overlayButton3}
              onClick={() => ContactUs()}
            >
              Request a Call Back
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
