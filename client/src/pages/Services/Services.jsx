import React from "react";
import { useState,useEffect,useRef } from "react";
import "./services.css";
import Nav from "../../components/Header/Header.jsx";
import padam from "../../assets/AdobeStock_369214822-Cropped-1024x451.jpg";
import padam2 from "../../assets/Anaplan.jpg";
import Footer from "../../components/Footer/Footer.jsx";
import padam3 from "../.././assets/dice.jpg";
import s2 from "../.././assets/s2.png";
import { useLocation } from "react-router-dom";

function Services() {
  const [activeTab, setActiveTab] = useState("Business-Consulting");

  const tabContent = {
    "Business-Consulting": {
      title: "Business Consulting Services",
      description: [
        "Our team of business experts help you adapt to constantly shifting market dynamics, align business strategy to reflect the long-term strategic vision, improve performance and address operational setbacks and challenges.",
        "We are focused on establishing sustainable solutions for continuous improvement, by seamlessly integrating our business consulting, technology, and industry practices to help organizations improve their efficiency.",
        "We bring in-depth functional expertise with a holistic perspective, capturing cross-functional value replacing the silo-based approach in organizations.",
        "Achieve quicker transformation, go from strategy to implementation, and gain efficiency with our business consulting services.",
      ],
      points: [
        "Roadmap definition services",
        "Business use case and user story development",
        "Platform evaluation services",
        "Proof of concept & personalized demonstrations",
        "Program management & change management strategy",
      ],
      image: padam3, // Change with actual image path
    },
    "Solution-Deployment": {
      title: "Solution Deployment Services",
      description: [
        "We provide the following solution deployment services, helping you implement EPM solutions",
        "Planafin has adopted an agile project approach, focused towards successful implementation, including scoping, sprint reviews and implementation, quality assurance and go-live with managed services.",
        "Our expert team comprising of business experts, solution architect, model builder, quality assurance analyst, project manager and change management professional work together throughout the project to not just deploy the solution but also to enable faster user adoption and prepare self sustainable internal CoE to maintain the solution in future",
      ],
      points: [
        "Model architecture & design",
        "Project execution including project management",
        "Agile implementation methodology",
        "Data integration",
        "Quality assurance",
      ],
      image: s2,
    },
    "Managed-Support-Services": {
      title: "Managed Support Services",
      description: [
        "Our managed support services ensure smooth operation and long-term sustainability of your projects.",
        "Planafin offers a range of managed services that empowers your solution, reduces risk with proactive monitoring from certified technology and functional experts that get you to benefit from all the capabilities of the platform and maximize ROI.",
        "While traditional reactive SLA based approach may still exist, it is no more meeting the expectation of current technology demands.  Avoiding delayed responses keeps you ahead while accelerating performance, bringing faster end-user adoption, and facilitating expansion to higher value-add use cases.",
        "Take advantage of our managed services, make a wise decision, and help your organization effectively maintain and enrich the planning solution in a cost-effective manner.",
      ],
      points: [
        "24/7 technical support",
        "Regular system updates",
        "Performance monitoring",
        "Issue resolution",
      ],
      image: s2,
    },
    "Training & Enablement": {
      title: "Training & Enablement Services",
      description: [
        "Our training programs help teams gain expertise in modern technologies and business methodologies.",
        "As an official training partner, our training team consists of best in class expertise. We improve user enablement from project initiation throughout the implementation for faster adoption through our customized range of training programs",
        "Our wide range of training programs include workshops for every level of skillset from beginners to advanced to enhance model building knowledge.",
        "Get trained by our experienced team of certified experts to enable faster adoption.",
      ],
      points: [
        "Hands-on workshops",
        "Online training modules",
        "Expert-led sessions",
        "Certification programs",
      ],
      image: s2,
    },
  };
  const location=useLocation()
  const tabContainerRef = useRef(null);
  useEffect(() => {
    if (location.state && location.state.activeTab) {
      const tab = location.state.activeTab;
      if (tabContent[tab]) {
        setActiveTab(tab);
      }
    }
  }, [location.state]);
  useEffect(()=>{
    if (location.state && location.state.scrollToTabs) {
      tabContainerRef.current?.scrollIntoView({ behavior: "smooth" ,block:"start"});
      
      setTimeout(() => {
        window.scrollBy({
          top: -700, 
          behavior: "smooth",
        });
      }, 300);
    }
  },[location.state])
  // useEffect(() => {
  //   console.log("Current activeTab:", activeTab);
  // }, [activeTab]);
  

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
        More than 100+ industry leading EPM business planning deployment
        experience
      </div>
      <div className="service-image">
        <img src={padam} alt="" className="image-tag" />
      </div>
      <div className="increment-content">
        <div className="increment-section">
          <div className="js-contents">
            <span className="num" data-val="11">
              110
            </span>
            <span className="span-contents">+</span>
            <p>Projects</p>
          </div>
          <div className="js-contents">
            <span className="num" data-val="180">
              65
            </span>
            <span className="span-contents">+</span>
            <p>Customers</p>
          </div>
          <div className="js-contents">
            <span className="num" data-val="3">
              100
            </span>
            <span className="span-contents">+</span>
            <p>Use Cases</p>
          </div>
          <div className="js-contents">
            <span className="num" data-val="100">
              94
            </span>
            <span className="span-contents">%</span>
            <p>CSAT Score</p>
          </div>
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
    {Object.keys(tabContent).map((tab, index) => (
      <div
        key={index}
        id={`tab-${tab}`}
        className={`tab-box ${activeTab === tab ? "active" : ""}`} // Apply active class
        onClick={() => setActiveTab(tab)} // Set active tab when clicked
      >
        <h2>{tab.replace(/-/g, ' ')}</h2>
      </div>
    ))}
  </div>

  {/* Content Section */}
  <div className="tab-content">
    <div className="text-section" id={`content-${activeTab.replace(/\s/g, '-')}`}>
   <h1>{tabContent[activeTab].title.replace(/-/g, ' ')}</h1>


      {tabContent[activeTab].description.map((desc, index) => (
        <p key={index}>{desc}</p>
      ))}
      <ul>
        {tabContent[activeTab].points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <a href="#">Know More &gt;&gt;</a>
    </div>
    <div className="image-section" id={`content-${activeTab.replace(/\s/g, '-')}`}>
      <img src={tabContent[activeTab].image} alt={activeTab} />
    </div>
  </div>
</div>



      <section className="consulting-container">
        <h2>Why Planafin Consulting?</h2>
        <div className="consulting-content">
          <div className="consulting-column">
            <ul>
              <li>
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
                </span>{" "}
                <strong>Customer centric</strong>, we understand every customer
                is unique and henceforth our services and solutions are catered
                to each customer based on their specific needs.
              </li>
              <li>
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
                </span>{" "}
                <strong>Immense industry experience</strong>, with the number of
                years of experience across various industries, our planning
                accelerators are tailored to each domain and business sector.
              </li>
              <li>
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
                </span>{" "}
                <strong>Unparalleled excellence</strong> – our excellence and
                quality of delivery is unparalleled with quality assurance,
                sustainable and future-proof solutions.
              </li>
            </ul>
            <button className="consulting-btn">Click here</button>
          </div>
          <div className="consulting-column">
            <ul>
              <li>
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
                </span>{" "}
                <strong>Integrated services</strong> – we provide a range of
                integrated services with a holistic approach to maximize your
                ROI and improve the benefits.
              </li>
              <li>
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
                </span>{" "}
                <strong>Strategy to action</strong> – our solutions are aligned
                to your overall business strategies and objectives, addressing
                the challenges and risk in executing it.
              </li>
              <li>
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
                </span>{" "}
                <strong>Global support</strong> – strengthened with our diverse
                portfolio, we provide services and support across multiple
                geographical locations.
              </li>
              <li>
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
                </span>{" "}
                <strong>Proactive Approach</strong> – we take a proactive
                approach in supporting our clients helping them stay ahead.
              </li>
            </ul>
            <button className="consulting-btn">Read more</button>
          </div>
        </div>
      </section>
      <div className="techpart-container">
        <h1 className="tp-head1">Our Technology Partners</h1>
        <h3 className="tp-head2">
          We have partnered with the best of the technologies in EPM space,
        </h3>
        <img src={padam2} alt="anaplan" />
      </div>

      <div className="overlaymaindiv">
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
          </div>
        </div>
        <div className="overlayimagemaindiv"></div>
      </div>
      <Footer />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=check_circle"
      />
    </div>
  );
}

export default Services;
