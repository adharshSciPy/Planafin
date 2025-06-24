import React, { useState, useEffect, useRef } from "react";
import "./services.css";
import Nav from "../../components/Header/Header.jsx";
import padam from "../../assets/AdobeStock_369214822-Cropped-1024x451.jpg";
import padam2 from "../../assets/Anaplan.jpg";
import Footer from "../../components/Footer/Footer.jsx";
import padam3 from "../.././assets/dice.jpg";
import s2 from "../.././assets/s2.png";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../baseUrl.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Services() {
  const [activeTab, setActiveTab] = useState("Business Consulting");
  const [tabContent, setTabContent] = useState([]);
  const [counterData, setCounterData] = useState([]);
  const location = useLocation();
  const tabContainerRef = useRef(null);
  const myRef = useRef([]);
  const observerRef = useRef(null);
  const navigate = useNavigate();
  const [consultingData, setConsultingData] = useState([]);
  const [partners, setPartners] = useState([]); //
  const [initialActiveTab, setInitialActiveTab] = useState(null);


 const tabData = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/v1/user/servicedetails`);
    const tabs = response.data;

    setTabContent(tabs);

    // Set activeTab only if location state passed a valid one
    if (initialActiveTab) {
      const isValid = tabs.some((tab) => tab.key === initialActiveTab);
      if (isValid) {
        setActiveTab(initialActiveTab);
      }
    } else {
      setActiveTab(tabs[0]?.key || ""); // Fallback to first tab
    }
  } catch (error) {
    console.log(error);
  }
};

  const getDataConsulting = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/v1/user/getPlanafinConsultation`
      );
      setConsultingData(response.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    tabData();
  }, []);

  useEffect(() => {
  if (location.state?.activeTab) {
    setInitialActiveTab(location.state.activeTab);
  }
}, [location.state]);


  useEffect(() => {
    if (location.state && location.state.scrollToTabs) {
      tabContainerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        window.scrollBy({
          top: -700,
          behavior: "smooth",
        });
      }, 300);
    }
  }, [location.state]);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animateIn");
          }
        });
      });
    }

    myRef.current.forEach((el) => {
      if (el && observerRef.current) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const setElementRef = (index) => (el) => {
    if (el) {
      myRef.current[index] = el;
      if (observerRef.current) observerRef.current.observe(el);
    }
  };

  const consultationBtn = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const consultationNav = () => {
    navigate("/consultation");
    window.scrollTo(0, 0);
  };
  const getCounterData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/v1/user/getSolutionCounter`
      );
      setCounterData(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getCounterData();
    getDataConsulting();
  }, []);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/v1/user/getTechPartners`);
        console.log("helloooi", res.data.data);

        setPartners(res.data.data);
      } catch (err) {
        console.error("Failed to fetch tech partners:", err);
      }
    };
    fetchPartners();
  }, []);
  return (
    <div>
      <Nav />
      <div className="service-container">
        <h2 className="service-container2">
          Leading your{" "}
          <span style={{ color: "#f1ce3b" }}>enterprise planning </span>
          & performance <br />
          <span style={{ color: "#2d9bff" }}> management </span>
          journey
        </h2>
      </div>
      <div className="service-content1">
        More than 100+ industry-leading EPM business planning deployment
        experience
      </div>
      <div className="service-image" ref={(el) => setElementRef(-1)(el)}>
        <img src={padam} alt="" className="image-tag" />
      </div>
      <div className="increment-content">
        <div className="increment-section">
          {counterData.map((item, index) => {
            return (
              <div className="js-contents" key={index}>
                <span className="num" data-val="11">
                  {item.counter}
                </span>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="serv_sec2">
        <h1 className="sec2-hd1">Our Services</h1>
        <h3 className="sec2-hd2">
          Planafin delivers a wide range of integrated services to maximize
          benefits and returns on your investment.
        </h3>
      </div>
      <div className="tab-container">
        {/* Tabs */}
        <div className="tab-boxes">
          {tabContent.map((tab, index) => (
            <div
              key={index}
              id={`tab-${tab.key}`}
              className={`tab-box ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <h2>{tab.key.replace(/-/g, " ")}</h2>
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="tab-main">
          {/* Left Section - Yellow Box */}
          <div className="tab-content">
            {activeTab && tabContent.find((tab) => tab.key === activeTab) && (
              <section
                className="text-section"
                id={`content-${activeTab.replace(/\s/g, "-")}`}
              >
                <h4>{tabContent.find((tab) => tab.key === activeTab).title}</h4>
                <h6 className="gokuls">
                  {tabContent.find((tab) => tab.key === activeTab).subText}
                </h6>

                <ul className="ul">
                  {tabContent
                    .find((tab) => tab.key === activeTab)
                    .details?.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                </ul>

                {/* ✅ Image inside yellow box */}
                <div className="image-section">
                  <img
                    src={`${baseUrl}/uploads/${
                      tabContent.find((tab) => tab.key === activeTab)?.image
                    }`}
                    alt={
                      tabContent.find((tab) => tab.key === activeTab)?.title ||
                      "image"
                    }
                  />
                </div>
              </section>
            )}
          </div>

          {/* Right Section - Paragraphs */}
          {activeTab && (
            <div className="paragraphs">
              {tabContent
                .find((tab) => tab.key === activeTab)
                ?.description?.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
            </div>
          )}
        </div>
      </div>

      <section className="consulting-container">
        <h2 className="consultingH2">Why Planafin Consulting?</h2>
        <div className="consulting-content">
          <div className="consulting-grid">
            {consultingData.map((item, index) => (
              <div
                key={index}
                className={`consulting-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -1180 960 1060"
                    width="24px"
                    fill="#5ac2a5"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
                  </svg>
                </span>
                <p className="text-p">
                  <strong>{item.title}</strong>-{item.subtext}
                </p>
              </div>
            ))}

            <button
              className="consulting-btn"
              onClick={() => consultationBtn()}
            >
              Read more
            </button>
          </div>
        </div>
      </section>
      <div className="techpart-container">
        <h1 className="tp-head1">Our Technology Partners</h1>
        <h3 className="tp-head2">
          We have partnered with the best of the technologies in EPM space,
        </h3>

        <div className="tech-images-row">
          {partners.map((partner) => (
            <div
              key={partner._id}
              className="tech-image-wrapper"
              onClick={() => consultationNav(partner._id)}
            >
              <img
                src={`${baseUrl}/${partner.techPartnersImg}`}
                alt={partner.name}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="overlaymaindiv" ref={(el) => setElementRef(-1)(el)}>
        <div className="elementoroverlaymainbox">
          <h2 className="overlaymainheading">
            Let's talk about your next project
          </h2>
          <div className="overlaymainparadiv">
            <p className="overlaymainpara">
              Get connected to experience the connected planning and business
              transformation journey
            </p>
          </div>
          <div className="overlaymainbtndiv">
            <Link
              to={"/lets-talk"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{ textDecoration: "none" }}
            >
              <button className="overlaybutton">
                Contact Us
                <span
                  className="fas fa-arrow-right"
                  style={{
                    fontFamily: "Font Awesome 5 Free",
                    fontWeight: 900,
                    fill: "#FFFFFF",
                    color: "black",
                  }}
                ></span>
              </button>
            </Link>
          </div>
        </div>
        <div className="overlayimagemaindiv"></div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
