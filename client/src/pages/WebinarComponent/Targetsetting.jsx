import React from "react";
import styles from "./webinar.module.css";
import picture from "../../assets/1_-_Infograph1-scaled.jpg";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import linkedin from "../../assets/MicrosoftTeams-image-7-150x150.jpg";
import Footer from "../../components/Footer/Footer";

function Targetsetting() {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.mainFirstLeft}>
          <div className={styles.firstContent}>
            <div className={styles.firstLeft}>
              <div className={styles.leftMain}>
                <div className={styles.onDemand}>
                  <p className={styles.firstContentP}>ON-DEMAND EVENT</p>
                </div>
                <div className={styles.heading}>
                  <h2 className={styles.firstContentH}>
                    S&OP Series: Episode 1 – Target Setting
                  </h2>
                </div>
                <div>
                  <button className={styles.buttonContainer}>
                    Watch Now
                    <i className={styles.buttonArrow}></i>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.firstRight}>
              <div className={styles.rightMain}>
                <img src={picture} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainContainerTwo}>
        <div className={styles.mainFirstTwo}>
          <div className={styles.mainFirstTwoSub}>
            <div className={styles.mainFirstTwoSubLeft}>
              <div className={styles.twoMainLeft}>
                <p>
                  <strong>Session summary:</strong>
                </p>
                <p>
                  This use case is specially curated by Planafin’s experienced
                  techno-functional consultants and domain experts. It is the
                  first episode from our S&OP Series which demonstrates ‘Target
                  Setting’ application built on Pigment. With every episode, we
                  will continue to showcase important components of an
                  end-to-end ‘Sales and Operations Planning’ application built
                  on Pigment. This video provides a detailed demonstration of
                  step-by-step planning tasks for setting business targets by
                  every department within an organization..
                </p>
                <p>
                  <strong>About Pigment:</strong>
                </p>
                <p>
                  Pigment is a flexible cloud EPM platform. It is highly
                  collaborative and adaptive with a ‘low code-no code’
                  interface. Businesses can own their planning processes without
                  any coding or programming skills and zero dependency on IT.
                  Let your CXOs set organizational targets for long term with
                  this intuitive and next generation platform.
                </p>
                <p>
                  <strong>About the speaker</strong>
                </p>
                <p>
                  Kunal Jethwa is the Associate Director (SaaS EPM, Supply Chain
                  Planning & Forecasting) of Planafin FZE. He is an experienced
                  Demand & Supply Planning Professional with a demonstrated
                  history of working with industries like Chemical, Medical
                  Devices, Robotics & Health Nutrition, Nutraceuticals, SaaS
                  Technology, and Business & IT Consulting Services.
                </p>
                <p>
                  <strong>Who should attend this session</strong>
                </p>

                <ul>
                  <li className={styles.containerTwoLi}>
                  FP&A Managers / Financial Analysts
                  </li>
                  <li className={styles.containerTwoLi}>
                  Business Planners / Business Analysts
                  </li>
                  <li className={styles.containerTwoLi}>
                  Sales Managers
                  </li>
                  <li className={styles.containerTwoLi}>Category Planners / Category Managers</li>
                  <li className={styles.containerTwoLi}>
                  Product Line Management
                  </li>
                  <li className={styles.containerTwoLi}>
                  Sales Channel Management
                  </li>
                  <li className={styles.containerTwoLi}>
                  Capacity Planners
                  </li>
                  <li className={styles.containerTwoLi}>
                  Manufacturing Heads
                  </li>
                  <li className={styles.containerTwoLi}>Capacity Planners</li>
                  <li className={styles.containerTwoLi}>
                  Production Planners
                  </li>
                  <li className={styles.containerTwoLi}>
                  Material Resource Planners
                  </li>
                  <li className={styles.containerTwoLi}>Operations Manager / Operations Planners</li>
                </ul>
                <p>
                  Get in touch to collaborate with us for your planning,
                  budgeting, and forecasting, use-cases.
                </p>
                <p>
                  Email:<Link to="/">connect@planafin.com</Link>
                </p>
                <p>
                  LinkedIn:
                  <Link to="/">
                    <img src={linkedin} className={styles.linkedIn} alt="" />
                  </Link>
                </p>
              </div>
            </div>
            <div className={styles.mainFirstTwoSubRight}>
              <div className={styles.twoMainRight}>
                <h3>Watch now</h3>
                <div className={styles.formDiv}>
                  <input
                    type="text"
                    className={styles.formStyle}
                    placeholder="First Name*"
                  />
                </div>
                <div className={styles.formDiv}>
                  <input
                    type="text"
                    className={styles.formStyle}
                    placeholder="Last Name*"
                  />
                </div>
                <div className={styles.formDiv}>
                  <input
                    type="text"
                    className={styles.formStyle}
                    placeholder="Work / business email*"
                  />
                </div>
                <div className={styles.formDiv}>
                  <input
                    type="text"
                    className={styles.formStyle}
                    placeholder="Company Name*"
                  />
                </div>
                <div className={styles.formDiv}>
                  <input
                    type="text"
                    className={styles.formStyle}
                    placeholder="Designation*"
                  />
                </div>
                <div className={styles.formDiv}>
                  <input
                    type="text"
                    className={styles.formStyle}
                    placeholder="Select Country*"
                  />
                </div>
                <div className={styles.formDiv}>
                  <ul className={styles.checkboxUl}>
                    <li className={styles.checkboxUlLi}>
                      <input type="checkbox" className={styles.inputStyle} />
                      <label className={styles.formLabel}>
                        {" "}
                        By filling out this form, I consent to the collection
                        and use of my personal data by Planafin for direct
                        marketing and/or communication purposes.
                        <span style={{ color: "red" }}>*</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className={styles.buttonTwo}>
                  <button>
                    Submit
                    <i className={styles.buttonArrow}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Targetsetting;
