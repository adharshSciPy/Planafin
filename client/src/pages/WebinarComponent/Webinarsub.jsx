import React from "react";
import styles from "./webinar.module.css";
import picture from "../../assets/webinarsub.jpg";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import linkedin from "../../assets/MicrosoftTeams-image-7-150x150.jpg";
import Footer from "../../components/Footer/Footer"
function Webinarsub() {
  const arrayItem=
    {
      h1: "S&OP Series: Episode 4 – Marketing Campaigns & Promotions Planning",
      Sessionsummary:
        "This the fourth episode from our S&OP Series which demonstrates ‘Marketing Campaigns & Promotions Planning’ application built on Pigment. It showcases Marketing Expenditure, Campaigns Planning, Promotions Planning, Break-Even Analysis, Cost-Benefit Analysis, and Marketing ROI.",
        AboutPigment:"Pigment is a flexible cloud EPM platform. It is highly collaborative and adaptive with a ‘low code-no code’ interface. Businesses can own their planning processes without any coding or programming skills and zero dependency on IT. Let your CXOs set organizational targets for long term with this intuitive and next generation platform",
        Aboutthespeaker:"Kunal Jethwa is the Associate Director (SaaS EPM, Supply Chain Planning & Forecasting) of Planafin FZE. He is an experienced Demand & Supply Planning Professional with a demonstrated history of working with industries like Chemical, Medical Devices, Robotics & Health Nutrition, Nutraceuticals, SaaS Technology, and Business & IT Consulting Services.",
        src:"https://planafin.com/wp-content/uploads/2024/03/4-Campaigns-Promos-Infographics-scaled.jpg"
      }
    
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
                    {arrayItem.h1}
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
                <img src={arrayItem.src} alt="" />
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
                  {arrayItem.Sessionsummary}
                </p>
                <p>
                  <strong>About Pigment:</strong>
                </p>
                <p>
                  {arrayItem.AboutPigment}
                </p>
                <p>
                  <strong>About the speaker</strong>
                </p>
                <p>
                {arrayItem.Aboutthespeaker}
                </p>
                <p>
                  <strong>Who should attend this session</strong>
                </p>

                <ul>
                  <li className={styles.containerTwoLi}>
                    Marketing Managers / Marketing Analysts
                  </li>
                  <li className={styles.containerTwoLi}>
                    Demand Planners / Finance Controllers
                  </li>
                  <li className={styles.containerTwoLi}>
                    Planning & Forecasting Managers / Analysts
                  </li>
                  <li className={styles.containerTwoLi}>
                    Business Planners / Business Analysts
                  </li>
                  <li className={styles.containerTwoLi}>Sales Managers</li>
                  <li className={styles.containerTwoLi}>
                    Product Managers / Brand Managers
                  </li>
                  <li className={styles.containerTwoLi}>
                    Category Planners / Category Managers
                  </li>
                  <li className={styles.containerTwoLi}>
                    Product Line Management
                  </li>
                  <li className={styles.containerTwoLi}>
                    Sales Channel Management
                  </li>
                  <li className={styles.containerTwoLi}>
                    Financial Planning & Analysis Managers / Financial Analysts
                    Get in touch to collaborate with us for your planning,
                    budgeting, and forecasting, use-cases
                  </li>
                </ul>
                <p>Get in touch to collaborate with us for your planning, budgeting, and forecasting, use-cases.</p>
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
      <Footer/>
    </>
  );
}

export default Webinarsub;
