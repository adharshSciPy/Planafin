import React from "react";
import "./solutions.css";
import { useState, useRef, useEffect } from "react";
import sol1 from "../../assets/sol1.png";
import sol2 from "../../assets/sol2.png";
import sol3 from "../../assets/sol3.png";
import sol4 from "../../assets/sol4.png";
import sol5 from "../../assets/sol5.png";
import sol6 from "../../assets/sol6.png";
import sol7 from "../../assets/sol7.png";
import sol8 from "../../assets/sol8.png";
import icon1 from "../../assets/icons1.png";
import icon2 from "../../assets/iconnn2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon 7.png";
import icon8 from "../../assets/icon8.png";
import icon9 from "../../assets/icons9.png";
import pad1 from "../../assets/light.png";
import baseUrl from "../../baseUrl.js";
import Nav from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Solutions() {
  const [startIndex, setStartIndex] = useState(0);
  const [cards, setCardData] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [solutionData, setSolutionData] = useState([]);
  const getCardData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/v1/user/getSolutionAccelerators`
      );
      setCardData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getIndustryData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/v1/user/industryDetails`
      );
      setIndustries(response.data.data);
    } catch (error) {
      console.error("Error fetching industries:", error);
    }
  };
  const getSolutionData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/v1/user/getBusinessPlanning`
      );
      setSolutionData(response.data.data);
      
    } catch (error) {
      console.error("Error fetching industries:", error);
    }
  };
  useEffect(() => {
    getCardData();
    getIndustryData();
    getSolutionData();
  }, []);

  const handleNext = () => {
    if (startIndex + 3 < cards.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  const myRef = useRef([]);
  const observerRef = useRef(null);
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
  const navigate = useNavigate();
  const solNav = () => {
    navigate("/lets-talk");
    window.scrollTo(0, 0);
  };
  const solNav2 = (id) => {
    navigate(`/supply-chain/${id}`);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    getCardData();
  }, []);
  
  return (
    <div>
      <Nav />
      <div className="solution-container1">
        <h1 className="solution-head1">
          Transform your business planning journey
        </h1>
        <h3 className="solution-head2">
          Enrich your planning process and experience the benefits of connected
          planning solutions, in-depth insights and plans to drive decisions and
          results.
        </h3>
        <div className="getinbtndiv" ref={(el) => setElementRef(-1)(el)}>
          <button className="getinbutton" onClick={() => solNav()}>
            Get in touch
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
      <div className="square1">
        {solutionData ? (
          solutionData.map((item, index) => {
            return(
              <div className="sqr" key={index}>
              <div className="sqr-content">
                <img src={sol1} alt="ss" className="sqrimg" />
                <h1 className="sqrh1">{item.contentHeading}</h1>
                <p className="sqrp">
                  {item.contentDescription}
                </p>
                <h2 className="sqrh2" onClick={() => solNav2(item._id)}>
                  Read More
                  <span
                    style={{
                      fontFamily: "'Font Awesome 5 Free'",
                      fontWeight: 700,
                      color: "#001e6c",
                      fontSize: 12,
                    }}
                  >
                    {" "}
                    &gt;&gt;
                  </span>
                </h2>
              </div>
            </div>
            )
          })
        ) : (
          <p>loading</p>
        )}
      </div>
      <div className="getinbtndiv" ref={(el) => setElementRef(-1)(el)}>
        <button className="getinbutton" onClick={() => solNav()}>
          Read More
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
      <div className="sol-sec3">
        <h1 className="sol-sec3h1">Why Organisations Choose Planafin</h1>
        <div className="sol-sec3_1">
          <div className="wrapper">
            <img src={sol5} alt="" className="sol-sec3-img" />
            <p className="sol-secp">
              Our solutions are delivered through Anaplan, the leading connected
              planning platform in the market​
            </p>
          </div>
          <div className="wrapper">
            <img src={sol6} alt="" className="sol-sec3-img" />
            <p className="sol-secp">
              Our team consists of subject-matter specialists with extensive
              market experience and solution expertise
            </p>
          </div>
          <div className="wrapper">
            <img src={sol7} alt="" className="sol-sec3-img" />
            <p className="sol-secp">
              We provide best-in-class solutions with outstanding quality on
              Anaplan, delivering rapid time to value
            </p>
          </div>
          <div className="wrapper">
            <img src={sol8} alt="" className="sol-sec3-img" />
            <p className="sol-secp">
              With office locations worldwide, our centralized team supports our
              customer across the globe 24/7
            </p>
          </div>
        </div>
      </div>
      <div className="sec5">
        <div className="sec5-left">
          <div className="left-content">
            <h1 className="sec5-head1">Our Solution Accelerators</h1>
            <p className="sec5-para">
              With more than 100+ industry leading EPM business process
              deployment experience, Planafin provides a number of solution
              accelerators that can fast track customer deployments and adoption
            </p>
            <img src={pad1} alt="" className="sec5-padam" />
          </div>
        </div>
        <div className="sec5-right">
          <div className="slider-container">
            <div className="cards-wrapper">
              {cards.slice(startIndex, startIndex + 3).map((card) => (
                <div key={card.id} className="card">
                  {card.title ? (
                    <h2 className="card-title">{card.title}</h2>
                  ) : null}
                  {card.features ? (
                    <ul className="card-list">
                      {card.features.map((item, index) => (
                        <li key={index}>{item.features}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{card.text}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="buttons-wrapper">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="nav-button"
              >
                ◀
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex + 3 >= cards.length}
                className="nav-button"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sol_sec4">
        <h1 className="sec4-head1">Our Industry Expertise</h1>
        <h3 className="sec4-head2">
          Our goal is to partner and help organizations attain a digitalized,
          intelligent, sustainable state of planning by effectively connecting
          business processes, leveraging the best in class technology, that is
          easy to adopt and business owned.
        </h3>
      </div>
      <div className="sec4-icons">
        {industries.length > 0 ? (
         
            industries.map((industry, index) => (
              <div key={index} className="wrapper2">
                <img src={`${baseUrl}${industry.industryImage[0].path}`} alt={industry.heading} className="sec4-image" />
                <h1 className="sec4-h1">{industry.heading}</h1>
              </div>
            ))
        ) : (
          <p style={{ textAlign: "center", color: "gray" }}>Loading industries...</p>
        )}
      </div>
      <div className="getinbtndiv" ref={(el) => setElementRef(-1)(el)}>
        <button className="getinbutton" onClick={() => solNav()}>
          Know More
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
      <Footer />
    </div>
  );
}

export default Solutions;
