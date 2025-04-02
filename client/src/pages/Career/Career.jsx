import React, { useEffect, useState } from "react";
import styles from "./career.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import manImg from "../../assets/manwithTelescope.png";
import Flag from "../../assets/Flag.India.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import imgGrid1 from "../../assets/about.people1.png";
import imgGrid2 from "../../assets/about.people2.png";
import imgGrid3 from "../../assets/about.people3.png";
import workCulture from "../../assets/Rectangle-119.png";
import SinglePerson from "../../assets/Biju-Abraham.jpg";
import quotes from "../../assets/Quotes.png";
import usaOffice from "../../assets/usaOffice.png";
import uaeOffice from "../../assets/uaeOffice.png";
import IndianOffice from "../../assets/IndianOffice.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import baseUrl from "../../baseUrl";

function Career() {
  const [showDetails, setShowDetails] = useState(false);
  const [carouselData, setCarouselData] = useState([]);
  const [jobDetails, setJobDetails] = useState([]);
  const [jobDetailsDescription, setJobDetailsDescription] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [form, setForm] = useState({
    firstName:"",
      lastName:"",
      email:"",
      phone:"",
      jobTitle:"",
      company:"",
      currentCompany:"",
      linkedIn:"",
      xUrl:"",
      github:"",
      portfolio:"",
      information:""
  });

  const showJobDetails = (id) => {
    setSelectedJobId((prevId) => (prevId === id ? null : id));
  };
  const scrollToApplicationForm = (titile) => {
    console.log(titile);
    const element = document.querySelector(`.${styles.applicationFormOuter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    customPaging: (i) => <div className={styles.customDot}></div>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const fetchCarouselData = async (req, res) => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/user/viewFeedback`);
      console.log("Response fetched succesfully", response.data.data);
      setCarouselData(response.data.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  const fetchJobDetails = async (req, res) => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/user/joblisting`);
      console.log("Job Details", response.data.data);
      setJobDetails(response.data.data);
      setJobDetailsDescription(response.data.data.requiredSkills);
    } catch (error) {
      console.log("Error fetching Data", error);
    }
  };
  useEffect(() => {
    fetchCarouselData();
    fetchJobDetails();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
  
    Object.keys(form).forEach((key) => {
      if (key !== "resume") {
        formData.append(key, form[key]);
      }
    });
  
    if (form.resume) {
      formData.append("resume", form.resume);
    } else {
      console.log("No valid file selected");
      return;
    }
  
    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/user/jobApplication`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
  
      console.log("Form data submitted", response);
  
      // Reset the form after successful submission
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        jobTitle: "",
        company: "",
        currentCompany: "",
        linkedIn: "",
        xUrl: "",
        github: "",
        portfolio: "",
        information: "",
        resume: null, // Reset resume as well
      });
  
      // Optional: Reset file input field (if using a file input)
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";
      
    } catch (error) {
      console.log("Error submitting formData", error.response?.data || error);
    }
  };
  
  
  
  
  return (
    <div>
      <Header />
      <div className={styles.topElement}>
        <div className={styles.topElementOuter}>
          <div className={styles.topElementContentDiv}>
            <h2 className={styles.topContentDivHead}>
              Enable <span style={{ color: " #2d9bff" }}>people</span> and{" "}
              <br />
              <span style={{ color: "#f1ce3b" }}>organizations </span>
              to make better <br />{" "}
              <span style={{ color: "#5ac2a5" }}>decisions</span>
            </h2>
            <h4 className={styles.topContentDivSubHead}>
              Be a part of Planafin
            </h4>
            <div className={styles.topContentParaDiv}>
              <p className={styles.topContentParagraph}>
                Join us on our mission to enable people and businesses to <br />{" "}
                make better decisions.
              </p>
            </div>
            <div className={styles.topContentButtonDiv}>
              <button
                className={styles.topContentBtn}
                onClick={scrollToApplicationForm}
              >
                Join Us{" "}
                <span
                  className="fas fa-arrow-down"
                  style={{
                    fontFamily: "Font Awesome 5 Free",
                    fontWeight: 900,
                    fill: "#000",
                    color: "#000",
                  }}
                ></span>
              </button>
            </div>
          </div>
          <div className={styles.topElementImageDiv}>
            <div className={styles.topElementImgDisplay}>
              <img
                src={manImg}
                alt="manImg"
                className={styles.topElementImage}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.openingsDisplayOuterDiv}>
        <div className={styles.openingsDisplayInnerDiv}>
          <h2 className={styles.openingsHeading}>Open Positions</h2>
          <div className={styles.openingsContentOuterDiv}>
            {jobDetails.map((item, index) => (
              <div className={styles.singleOpeningContent} key={index}>
                <h2 className={styles.jobTitleContent}>{item.title}</h2>
                <div className={styles.jobDetailsOuterDiv}>
                  <div className={styles.companyLocation}>
                    <div className={styles.companyCountryFlag}>
                      {/* <img src={Flag} className={styles.companyFlag} alt="" /> */}
                      <p className={styles.jobType}>
                        {item.jobType} | {item.location}
                      </p>
                    </div>
                    <div className={styles.workingHours}>
                      <p className={styles.workingHoursContent}>
                        Full Time | 5 Working Days
                      </p>
                    </div>
                    <div className={styles.jobApplyDiv}>
                      <button
                        className={styles.jobApplyBtn}
                        onClick={() => scrollToApplicationForm(item.title)}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                  <div className={styles.jobMoreDetailsOuter}>
                    <div className={styles.jobMoreDetails}>
                      <button
                        className={styles.moreDetails}
                        onClick={() => showJobDetails(item._id)}
                      >
                        More Details
                        <span className={styles.arrowIcon}>
                          {selectedJobId === item._id ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </span>
                      </button>
                    </div>
                    <div
                      className={styles.jobDetailsListingDiv}
                      style={{
                        display: selectedJobId === item._id ? "block" : "none",
                      }}
                    >
                      <ul className={styles.jobDetailsList}>
                        {item.requiredSkills &&
                          item.requiredSkills.map((skill, skillIndex) => (
                            <li className={styles.jobDetails} key={skillIndex}>
                              {skill}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className={styles.positioningDiv}> */}
      <div className={styles.aboutOuterDiv}>
        <h2 className={styles.aboutMainHead}>Life at Planafin</h2>
        <div className={styles.aboutSubHeadings}>
          <h2 className={styles.aboutSubDetails}>
            Anyone can have the best ideas and we ensure that our team feels
            encouraged to speak up and be an owner of our results. We don’t take
            ourselves too seriously and believe in doing the best work possible,
            without ego or boundaries and you guessed it, full of joy!
            <br />
            If you love moving fast, working smart, and solving big challenges
            as a team, let’s chat!
          </h2>
          <div className={styles.aboutBtnDiv}>
            <button className={styles.aboutContentBtn}>
              Join Us{" "}
              <span
                style={{
                  fontFamily: "Font Awesome 5 Free",
                  fontWeight: 900,
                  fill: "#000",
                  color: "#000",
                }}
              ></span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.positionDiv}>
        <div className={styles.imageGridOuterDiv}>
          <div className={styles.GridImg1}>
            <img
              className={styles.imgGrid1}
              src={imgGrid1}
              alt="about.people"
            />
          </div>
          <div className={styles.GridImg2}>
            <img
              className={styles.imgGrid2}
              src={imgGrid3}
              alt="about.people"
            />
          </div>
          <div className={styles.GridImg3}>
            <img
              className={styles.imgGrid3}
              src={imgGrid2}
              alt="about.people"
            />
          </div>
        </div>
      </div>
      <div className={styles.workCultureOuterDiv}>
        <div className={styles.workCulture}>
          <div className={styles.workCultureImgDiv}>
            <img src={workCulture} alt="" className={styles.workCultureImg} />
          </div>
          <div className={styles.workCultureContentDiv}>
            <h6 className={styles.workCultureContentHead}>Our work culture</h6>
            <p className={styles.workCultureContentPara}>
              We place a lot of emphasis on our culture because we are both a
              team and a family. We want to create an environment that is
              friendly, warm, and exciting. We respect and value our employees
              individuality and promote a diverse and collaborative work
              environment. Our commitment to shape the world we want to live in
              takes more than an inventive mindset and progressive thinking – we
              are also empowered to grow and have the trust and courage to act.
              At Planafin, all the opinions count, and everyone's voice is heard
              as we build a culture of respect and support for the individual
              that drives daily operations. We thrive on teamwork, open dialogue
              and learning in a fast-paced environment.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.carouselOuterDiv}>
        <h2 className={styles.carouselHeading}>Employee Feedback</h2>
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {carouselData.map((item, index) => (
              <div key={index} className={styles.carouselSingleCardOuter}>
                <div className={styles.singleWrapper}>
                  <div className={styles.singleCardImageOuter}>
                    <div className={styles.singleCardPersonImage}>
                      <img
                        src={`${baseUrl}/${item.image}`}
                        alt="single.person"
                        className={styles.singlePersonImg}
                      />
                    </div>
                    <div className={styles.singleCardStaticImg}>
                      <img
                        src={quotes}
                        alt="static"
                        className={styles.singleStaticImg}
                      />
                    </div>
                  </div>
                  <div className={styles.singleCardContentDiv}>
                    <p className={styles.feedbackPara}>{item.message}</p>
                    <h6 className={styles.singleCardName}>{item.name}</h6>
                    <p className={styles.personPosition}>{item.jobPosition}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className={styles.applicationFormOuter}>
        <form className={styles.applicationFormMain} onSubmit={handleSubmit}>
          {" "}
          <h2 className={styles.formTitle}>Submit your application</h2>
          <div className={styles.formContainer}>
            <div className={styles.formRow}>
              <input
                type="text"
                placeholder="First Name*"
                className={styles.formInput}
                name="firstName"
                value={form.firstName}
                onChange={handleChange} 
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className={styles.formInput}
                name="lastName"
                value={form.lastName}
                onChange={handleChange} 
                required
              />
            </div>
            <div className={styles.formRow}>
              <input
                type="email"
                placeholder="Email*"
                className={styles.formInput}
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                placeholder="Phone*"
                className={styles.formInput}
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formRow}>
              <input
                type="text"
                placeholder="Job Title*"
                className={styles.formInput}
                name="jobTitle"
                value={form.jobTitle}
                onChange={handleChange} 
                required
              />
              <input
                type="text"
                placeholder="Company*"
                className={styles.formInput}
                name="company"
                value={form.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formLabelWraper}>
              <label className={styles.fileLabel}>Attach Your Resume</label>
              <input
  type="file"
  className={styles.fileInput}
  name="resume"
  onChange={(e) => setForm({ ...form, resume: e.target.files[0] })}
/>

            </div>
            <div className={styles.formLabelWraper}>
              <label className={styles.fileLabel}>Current Company</label>
              <input
                type="text"
                className={styles.fullWidthInput}
                name="currentCompany"
                value={form.currentCompany}
                onChange={handleChange} 
              />
            </div>
            <div className={styles.formLabelWraper}>
              <label className={styles.fileLabel}>Linkedin URL</label>
              <input
                type="text"
                className={styles.fullWidthInput}
                name="linkedIn"
                value={form.linkedIn}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formLabelWraper}>
              <label className={styles.fileLabel}>Twitter URL</label>
              <input
                type="text"
                className={styles.fullWidthInput}
                name="xUrl"
                value={form.xUrl}
                onChange={handleChange} 
                required
              />
            </div>
            <div className={styles.formLabelWraper}>
              <label className={styles.fileLabel}>GitHub URL</label>
              <input
                type="text"
                className={styles.fullWidthInput}
                name="github"
                value={form.github}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formLabelWraper}>
              <label className={styles.fileLabel}>Portfolio URL</label>
              <input
                type="text"
                className={styles.fullWidthInput}
                name="portfolio"
                value={form.portfolio}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formLabelWraper}>
              <label className={styles.fileLabel}>Additional Information</label>
              <textarea
                rows={6}
                placeholder="Add a cover letter or anything else you want to share."
                className={styles.fullWidthInput}
                name="information"
                value={form.information}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <span className={styles.formCheckboxOuter}>
            <input type="checkbox" className={styles.formCheckbox} required />{" "}

            <label className={styles.checkboxLabel}>
              Yes, Planafin can contact me about future job opportunities for up
              to 2 years
            </label>
          </span>
          <div className={styles.subimtButtonDiv}>
            <button className={styles.subimtButton} type="submit">
              {" "}
              <span className={styles.subimtButtonSpan}>
                SUBMIT APPLICATION
              </span>
            </button>
          </div>
        </form>

        {/* <Carousel options={OPTIONS} /> */}
      </div>
      <div className={styles.locationOuterDiv}>
        <div className={styles.locationInnerDiv}>
          <h2 className={styles.locationHeading}>Join one of our locations</h2>
          <div className={styles.locationImgOuter}>
            <div className={styles.locationImgSingle}>
              <div className={styles.imageSingleCard}>
                <img
                  src={usaOffice}
                  alt="usaOffice"
                  className={styles.singleImageLoc}
                />
              </div>
              <h5 className={styles.officeLocation}>USA Office</h5>
            </div>
            <div className={styles.locationImgSingle}>
              <div className={styles.imageSingleCard}>
                <img
                  src={uaeOffice}
                  alt="uaeOffice"
                  className={styles.singleImageLoc}
                />
              </div>
              <h5 className={styles.officeLocation}>UAE Office</h5>
            </div>
            <div className={styles.locationImgSingle}>
              <div className={styles.imageSingleCard}>
                <img
                  src={IndianOffice}
                  alt="IndianOffice"
                  className={styles.singleImageLoc}
                />
              </div>
              <h5 className={styles.officeLocation}>India Office</h5>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default Career;
