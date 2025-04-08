import React, { useEffect, useState } from "react";
import styles from "./webinar.module.css";
import Header from "../../components/Header/Header";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import linkedin from "../../assets/MicrosoftTeams-image-7-150x150.jpg";
import Footer from "../../components/Footer/Footer";
import baseUrl from "../../baseUrl";
import { ToastContainer, toast } from "react-toastify";

function Webinarsub() {
  const [item, arrayItem] = useState({});
  const { id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/v1/user/demandCardDetails/${id}`
      );
      arrayItem(response.data.data || {});
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  },[]);

  const [formdata, setFormdata] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    companyName: "",
    designation: "",
    selectCountry: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  // const handleCheck = (e) => {
  //   setFormdata((prev) => ({ ...prev, checkBox: e.target.checked }));
  // };

  const handleSubmitform = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/user/addWatchnow`,
        formdata
      );
      if (response.status === 200) {
        toast.success("successfully submitted form data", {
          position: "bottom-right",
          autoClose: 3000,
        });
        setFormdata({
          firstName: "",
          lastName: "",
          businessEmail: "",
          companyName: "",
          designation: "",
          selectCountry: "",})
      } else {
      }
    } catch (error) {
      toast.error("Error while submitting data", {
        position: "bottom-right",
        autoClose: 3000,
      });
      console.error(
        "Submission Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <ToastContainer />
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
                    {item.title || "Loading"}
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
                <img
                  src={`${baseUrl}/${item.image}` || "Loading"}
                  alt="Webinar"
                />
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
                <p>{item.summary || "Loading"}</p>
                <p>
                  <strong>About Pigment:</strong>
                </p>
                <p>{item.pigment || "Loading"}</p>
                <p>
                  <strong>About the speaker</strong>
                </p>
                <p>{item.speaker || "Loading"}</p>
                <p>
                  <strong>Who should attend this session</strong>
                </p>

                <ul>
                  {(item.attendSession || []).map((content, index) => (
                    <li key={index} className={styles.containerTwoLi}>
                      {content}
                    </li>
                  ))}
                </ul>
                <p>
                  Get in touch to collaborate with us for your planning,
                  budgeting, and forecasting, use-cases.
                </p>
                <p>
                  Email: <Link to="/">connect@planafin.com</Link>
                </p>
                <p>
                  LinkedIn:
                  <Link to="/">
                    <img
                      src={linkedin}
                      className={styles.linkedIn}
                      alt="LinkedIn"
                    />
                  </Link>
                </p>
              </div>
            </div>
            <div className={styles.mainFirstTwoSubRight}>
              <div className={styles.twoMainRight}>
                <h3>Watch now</h3>
                <form onSubmit={handleSubmitform}>
                  <div className={styles.formDiv}>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formdata.firstName}
                      className={styles.formStyle}
                      placeholder="Full Name*"
                      onChange={handleInput}
                    />
                  </div>
                  <div className={styles.formDiv}>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formdata.lastName}
                      className={styles.formStyle}
                      placeholder="Last Name*"
                      onChange={handleInput}
                    />
                  </div>
                  <div className={styles.formDiv}>
                    <input
                      type="email"
                      name="businessEmail"
                      required
                      value={formdata.businessEmail}
                      className={styles.formStyle}
                      placeholder="Work / business email*"
                      onChange={handleInput}
                    />
                  </div>
                  <div className={styles.formDiv}>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formdata.companyName}
                      className={styles.formStyle}
                      placeholder="Company Name*"
                      onChange={handleInput}
                    />
                  </div>
                  <div className={styles.formDiv}>
                    <input
                      type="text"
                      name="designation"
                      required
                      value={formdata.designation}
                      className={styles.formStyle}
                      placeholder="Designation*"
                      onChange={handleInput}
                    />
                  </div>
                  <div className={styles.formDiv}>
                    <input
                      type="text"
                      required
                      name="selectCountry"
                      value={formdata.selectCountry}
                      className={styles.formStyle}
                      placeholder="Select Country*"
                      onChange={handleInput}
                    />
                  </div>
                  <div className={styles.formDiv}>
                    <input
                      required
                      type="checkbox"
                      className={styles.inputStyle}
                    />
                    <label>
                      By filling out this form, I consent to the collection and
                      use of my personal data by Planafin for direct marketing
                      and/or communication purposes.
                    </label>
                  </div>
                  <div className={styles.buttonTwo}>
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Webinarsub;
