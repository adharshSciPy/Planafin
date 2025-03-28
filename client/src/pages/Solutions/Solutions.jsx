import React from "react";
import "./solutions.css";
import { useState,useRef,useEffect } from "react";
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

import Nav from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import {useNavigate} from "react-router-dom"
const cards = [
  {
    id: 1,
    title: "Manufacturing S&OP Planning",
    items: [
      "Optimize inventory cost",
      "Inbound & outbound logistics",
      "S&OP demand supply analysis",
    ],
  },

  {
    id: 2,
    title: "Healthcare Planning",
    items: ["Patient forecast", "Per patient cost", "Doctor incentive"],
  },

  {
    id: 3,
    title: "E-Commerce Revenue Forecasting",
    items: [
      "Retail & marketplace revenue",
      "Identify visitor conversion & buying patterns",
      "Manage shipping & logistics",
    ],
  },

  {
    id: 4,
    title: "Open To Buy",
    items: [
      "Predict sales demand",
      "Open to buy planning",
      "Seasonality trend",
    ],
  },

  {
    id: 5,
    title: "Real Estate Planning",
    items: [
      "Project feasibility analysis",
      "Project spend",
      "Asset management",
    ],
  },

  {
    id: 6,
    title: "Workforce Optimization",
    items: [
      "Align hiring strategy",
      "Identify talent gaps",
      "Optimize workforce",
    ],
  },

  {
    id: 7,
    title: "Aviation Financial",
    items: [
      "Passenger & cargo revenue",
      "Direct operating cost optimization",
      "Aircraft lease & funding",
    ],
  },
];

function Solutions() {
  const [startIndex, setStartIndex] = useState(0);

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
     useEffect(()=>{
        if(!observerRef.current){
          observerRef.current=new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
              if(entry.isIntersecting){
                entry.target.classList.add("animateIn");
    
              }
            })
          })
        }
      
        myRef.current.forEach((el) => {
          if (el && observerRef.current) observerRef.current.observe(el);
        });
        
        return () => {
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        };
        
      },[]);
      const setElementRef = (index) => (el) => {
        if (el) {
          myRef.current[index] = el;
          if (observerRef.current) observerRef.current.observe(el);
        }
      };
    const navigate=useNavigate();
    const solNav=()=>{
      navigate('/lets-talk');
      window.scrollTo(0,0)
    }
const solNav2=()=>{
  navigate('/supply-chain');
  window.scrollTo(0,0)


}
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
        <div className="getinbtndiv"ref={(el) => setElementRef(-1)(el)}>
          <button className="getinbutton"onClick={()=>solNav()}>
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
        <div className="sqr">
          <div className="sqr-content">
            <img src={sol1} alt="ss" className="sqrimg" />
            <h1 className="sqrh1">Supply Chain</h1>
            <p className="sqrp">
              Adapt a more collaborative and integrated supply chain solution in
              sync with finance and operational areas of your business. Achieve
              real-time insights, identify patterns, streamline demand and
              supply, leverage AI capabilities and cost optimization techniques.
            </p>
            <h2 className="sqrh2" onClick={()=>solNav2()}>
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
        <div className="sqr">
          <div className="sqr-content">
            <img src={sol2} alt="ss" className="sqrimg" />
            <h1 className="sqrh1">Finance</h1>
            <p className="sqrp">
              Automate financial planning, budgeting and reporting process, gain
              transparency and fast track the business performance, execute
              strategic and quick scenario modelling, improve decision making
              and exercise better control of funds.
            </p>
            <h2 className="sqrh2" onClick={()=>solNav2()}>
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
      </div>
      <div className="square2">
        <div className="sqr">
          <div className="sqr-content">
            <img src={sol3} alt="ss" className="sqrimg" />
            <h1 className="sqrh1">HR & Workforce</h1>
            <p className="sqrp">
              Empower and optimize existing workforce, dynamic headcount
              planning, identify skill gaps, manage risks, better compensation
              plans, succession planning, monitor hiring and framework
              recruitment strategies.
            </p>
            <h2 className="sqrh2"  onClick={()=>solNav2()}>
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
        <div className="sqr">
          <div className="sqr-content">
            <img src={sol4} alt="ss" className="sqrimg" />
            <h1 className="sqrh1">Sales & Marketing</h1>
            <p className="sqrp">
              Connect sales planning to sales performance, manage go-to-market
              strategy, enhance predictability, design and optimize territories,
              account segmentation, manage incentive plans and gain a
              competitive advantage.
            </p>
            <h2 className="sqrh2" onClick={()=>solNav2()}>
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
      </div>
      <div className="getinbtndiv" ref={(el) => setElementRef(-1)(el)}>
        <button className="getinbutton" onClick={()=>solNav()}>
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
                  {card.items ? (
                    <ul className="card-list">
                      {card.items.map((item, index) => (
                        <li key={index}>{item}</li>
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
        {/* <div className="sec4-1"> */}
        <div className="wrapper2">
          <img src={icon1} alt="" className="sec4-img" />
          <h1 className="sec4-h1">Mining & Metals</h1>
          {/* </div> */}
          <div className="wrapper2">
            <img src={icon4} alt="" className="sec4-img" />
            <h1 className="sec4-h1">Healthcare</h1>
          </div>
          <div className="wrapper2">
            <img src={icon7} alt="" className="sec4-img" />
            <h1 className="sec4-h1">Real Estate</h1>
          </div>
        </div>
        {/* <div className="sec4-2"> */}
        <div className="wrapper2">
          <img src={icon2} alt="" className="sec4-img" />
          <h1 className="sec4-h1">Manufactuaring</h1>
          {/* </div> */}
          <div className="wrapper2">
            <img src={icon5} alt="" className="sec4-img" />
            <h1 className="sec4-h1">Technology</h1>
          </div>
          <div className="wrapper2">
            <img src={icon6} alt="" className="sec4-img" />
            <h1 className="sec4-h1">Oil and Gas</h1>
          </div>
        </div>
        {/* <div className="sec4-3"> */}
        <div className="wrapper2">
          <img src={icon3} alt="" className="sec4-img" />
          <h1 className="sec4-h1">Aviation</h1>

          {/* </div> */}
          <div className="wrapper2">
            <img src={icon8} alt="" className="sec4-img" />
            <h1 className="sec4-h1">Retail</h1>
          </div>
          <div className="wrapper2">
            <img src={icon9} alt="" className="sec4-img" />
            <h1 className="sec4-h1">E-Commerce</h1>
          </div>
        </div>
      </div>
      <div className="getinbtndiv" ref={(el) => setElementRef(-1)(el)}>
        <button className="getinbutton" onClick={()=>solNav()}>
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
