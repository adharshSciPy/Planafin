import React from "react";
import { useState } from "react";
import "./services.css";
import Nav from "../../components/Header/Header.jsx";
import padam from "../../assets/AdobeStock_369214822-Cropped-1024x451.jpg";
import padam2 from "../../assets/Anaplan.jpg";
import Footer from "../../components/Footer/Footer.jsx";
import padam3 from "../.././assets/dice.jpg";

function Services() {
  const [activeTab, setActiveTab] = useState("Business Consulting");

  const tabContent = {
    "Business Consulting": {
      title: "Business Consulting Services",
      description: [
        "We provide the following business consulting services, partnering with you, as you start your digital EPM journey.",
      ],
      points: [
        "Roadmap definition services",
        "Business use case and user story development",
        "Platform evaluation services",
        "Proof of concept & personalized demonstrations",
        "Program management & change management strategy",
      ],
      image: { padam3 }, // Change with actual image path

      description: [
        "Our team of business experts help you adapt to constantly shifting market dynamics, align business strategy to reflect the long-term strategic vision, improve performance and address operational setbacks and challenges.",
        "We are focused on establishing sustainable solutions for continuous improvement, by seamlessly integrating our business consulting, technology, and industry practices to help organizations improve their efficiency.",
        "We bring in-depth functional expertise with a holistic perspective, capturing cross-functional value replacing the silo-based approach in organizations.",
        "Achieve quicker transformation, go from strategy to implementation, and gain efficiency with our business consulting services.",
      ],
    },
    "Solution Deployment": {
      title: "Solution Deployment Services",
      description: [
        "We provide the following solution deployment services, helping you implement EPM solutions",
      ],
      points: [
        "Model architecture & design",
        "Project execution including project management",
        "Agile implementation methodology",
        "Data integration",
        "Quality assurance",
      ],
      image: { padam3 },
    },
    "Managed Support Services": {
      title: "Managed Support Services",
      description: [
        "Our managed support services ensure smooth operation and long-term sustainability of your projects.",
      ],
      points: [
        "24/7 technical support",
        "Regular system updates",
        "Performance monitoring",
        "Issue resolution",
      ],
      image: { padam3 },
    },
    "Training & Enablement": {
      title: "Training & Enablement",
      description: [
        "Our training programs help teams gain expertise in modern technologies and business methodologies.",
      ],
      points: [
        "Hands-on workshops",
        "Online training modules",
        "Expert-led sessions",
        "Certification programs",
      ],
      image: { padam3 },
    },
  };

  return (
    <div>
      <Nav />
      <div className="service-container">
        <h2 className="service-container2">
          <span style={{ color: "#f1ce3b" }}>
            Leading your enterprise planning{" "}
          </span>
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
              className={`tab-box ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              <h2>{tab}</h2>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="tab-content">
          <div className="text-section">
            <h1>{tabContent[activeTab].title}</h1>
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
          <div className="image-section">
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
                <span>&#10004;</span> <strong>Customer centric</strong>, we
                understand every customer is unique and henceforth our services
                and solutions are catered to each customer based on their
                specific needs.
              </li>
              <li>
                <span>&#10004;</span>{" "}
                <strong>Immense industry experience</strong>, with the number of
                years of experience across various industries, our planning
                accelerators are tailored to each domain and business sector.
              </li>
              <li>
                <span>&#10004;</span> <strong>Unparalleled excellence</strong> –
                our excellence and quality of delivery is unparalleled with
                quality assurance, sustainable and future-proof solutions.
              </li>
            </ul>
            <button className="consulting-btn">Click here</button>
          </div>
          <div className="consulting-column">
            <ul>
              <li>
                <span>&#10004;</span> <strong>Integrated services</strong> – we
                provide a range of integrated services with a holistic approach
                to maximize your ROI and improve the benefits.
              </li>
              <li>
                <span>&#10004;</span> <strong>Strategy to action</strong> – our
                solutions are aligned to your overall business strategies and
                objectives, addressing the challenges and risk in executing it.
              </li>
              <li>
                <span>&#10004;</span> <strong>Global support</strong> –
                strengthened with our diverse portfolio, we provide services and
                support across multiple geographical locations.
              </li>
              <li>
                <span>&#10004;</span> <strong>Proactive Approach</strong> – we
                take a proactive approach in supporting our clients helping them
                stay ahead.
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
    </div>
  );
}

export default Services;
