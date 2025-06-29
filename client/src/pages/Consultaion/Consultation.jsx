import React, { useEffect, useState } from "react";
import styles from "./consultation.module.css";
import anaplan from "../../assets/Anaplan_logo.svg-2048x452.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import spiderWebImg from "../../assets/spiderWebOne.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import imgoverlay from "../../assets/imgoverlay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../baseUrl";
import axios from "axios";

// import { faMinus } from "@fortawesome/free-solid-svg-icons";

function Consultation() {
  const [data, setData] = useState([])
  const toggleData = [
    {
      id: 1,
      title: "Process",
      content: "The wider business process that the Anaplan model supports.",
    },
    {
      id: 2,
      title: "Data",
      content:
        "All the data components needed for the model: master, meta and transactional data.",
    },
    {
      id: 3,
      title: "Model",
      content: "The design, build and testing of the Anaplan model",
    },
    {
      id: 4,
      title: "Deployment",
      content:
        "Ensuring that the Anaplan model and the new business process are adapted in the organisation.",
    },
  ];
  const [openIndex, setOpenIndex] = useState([]);
  const handleToggle = (index) => {
    setOpenIndex((prevOpenIndex) =>
      prevOpenIndex.includes(index)
        ? prevOpenIndex.filter((i) => i !== index)
        : [...prevOpenIndex, index]
    );
  };
  const navigate = useNavigate();

  const counterdata = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/user/getAnaplanDetails`)
      // console.log("data", res.data.data)
      setData(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    counterdata()
  }, [])


  return (
    <div>
      <Header />

      <div className={styles.topElementOuterDiv}>
        <div className={styles.topElementInnerDivFirst}>
          <div className={styles.topElementImageDiv}>
            <img
              src={anaplan}
              alt="anaplan"
              className={styles.topElementImage}
            />
          </div>
        </div>
        <div className={styles.topElementInnerDivSecond}>
          <h2 className={styles.topSecondDivHead}>
            Flexible, scalable, collaborative
          </h2>
          <p className={styles.topSecondDivPara}>
            Synchronize your strategy and execution enterprise-wide using a
            trusted system of record built for agility.
          </p>
          <div className={styles.topSecondTalkBtnDiv}>
            <button className={styles.topSecondTalkButton} onClick={() => {
              navigate('/lets-talk');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              Talk to an Anaplan Expert
              <span
                className="fas fa-arrow-right"
                style={{
                  fontFamily: "Font Awesome 5 Free",
                  fontWeight: 900,
                  marginLeft: "5px",
                  fill: "#000",
                  color: "#000",
                }}
              ></span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.consultationOuterDiv}>
        <div className={styles.consultationInnerDiv}>
          <h2 className={styles.consultaionMainHead}>
            Leading Global Anaplan Partner
          </h2>
          <p className={styles.consultationParagraph}>
            Planafin is a trusted Anaplan Partner. We work with Anaplan and
            provide long term business partnerships with organizations choosing
            to implement the Anaplan platform.
          </p>
          <div className={styles.consultaionCardsOuter}>
            {data.map((item, index) => (
              <div className={styles.consultationSingleCard}>
                <>
                  <h2 className={styles.CsSingleCardHead}>{item.counter}</h2>
                  <p className={styles.CsSingleCardPara}>
                    {item.title}
                  </p>
                </>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.csPlanningOuterContainer}>
        <div className={styles.csPlanningInnerFirst}>
          <div className={styles.csPlanningImageDiv}>
            <img src={spiderWebImg} alt="" className={styles.csPlanningImg} />
          </div>
        </div>
        <div className={styles.csPlanningInnerSecond}>
          <h2 className={styles.csPlanningSecondHead}>
            Enrich your business planning experience with Anaplan
          </h2>
          <p className={styles.csPlanningSecondPara}>
            We provide the following services partnering with you, as you start
            your Anaplan journey
          </p>
          <ul className={styles.csPlanningSecondUl}>
            <li className={styles.csPlanningSecondLi}>
              Roadmap definition services
            </li>
            <li className={styles.csPlanningSecondLi}>
              Business use case and user story development
            </li>
            <li className={styles.csPlanningSecondLi}>
              Anaplan solution implementation
            </li>
            <li className={styles.csPlanningSecondLi}>
              Platform evaluation services
            </li>
            <li className={styles.csPlanningSecondLi}>
              Proof of concept & personalized demonstrations
            </li>
            <li className={styles.csPlanningSecondLi}>
              Program change management strategy and governance
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.InsightsOuterDiv}>
        <div className={styles.InsightInnerDiv}>
          <h2 className={styles.InsightInnerHead}>
            With Anaplan, move from insights to outcome
          </h2>
          <p className={styles.InsightInnerPara}>
            Anaplan connects your strategy to your outcomes and drives
            accountability connected to a single source of truth. Gartner has
            projected that by the year 2024, 70% of all enterprises will be
            planning with extended planning and analysis—Connected Planning.
            Currently most of the leading companies in the largest categories of
            business across the globe are using Anaplan to support their
            mission-critical decision making. Illuminate blind spots and hidden
            opportunities. Experience an integrated, dynamic signal set that
            incorporates internal and external factors, relationships, and
            market context across functions—all seamlessly integrated.
          </p>
          <p className={styles.InsightInnerPara}>
            Leverage state-of-the-art, hyperscale computing to better understand
            drivers of change and make accurate forecasts. Get decision-making
            clarity through line-of-sight visibility into every asset, resource,
            risk and change. Pivot from actionable scenarios to winning actions.
            Collaborate and target future financial implications and ultimate
            business outcomes. Run unlimited multi-dimensional scenarios to
            identify ideal plans of action.
          </p>
        </div>
      </div>
      <div className={styles.imgOverlayMainDiv}>
        <div className={styles.imgOverlaySecondary}>
          <div className={styles.ImgOvrContentDiv}>
            <ul className={styles.ImgOvrContentUl}>
              <li className={styles.ImgOvrContentLi}>
                <span className={styles.ImgOvrContentSpan}>
                  <i
                    class="fas fa-check"
                    aria-hidden="true"
                    style={{
                      color: "#5AC2A5",
                      fontSize: "18px",
                      width: "100%",

                    }}
                  ></i>
                </span>
                <span className={styles.ImgOvrContentSecondSpan}>
                  <b className={styles.SecondSpanBold}>Plan</b>– Embed xP&A,
                  IBP, and RevOps capabilities in your business with Connected
                  Planning.
                </span>
              </li>
              <li className={styles.ImgOvrContentLi}>
                <span className={styles.ImgOvrContentSpan}>
                  <i
                    class="fas fa-check"
                    aria-hidden="true"
                    style={{
                      color: "#5AC2A5",
                      fontSize: "18px",
                      width: "100%",
                    }}
                  ></i>
                </span>
                <span className={styles.ImgOvrContentSecondSpan}>
                  <b className={styles.SecondSpanBold}> Analyze </b>– Create
                  consistent and informed forward momentum by evaluating options
                  in real time.
                </span>
              </li>
              <li className={styles.ImgOvrContentLi}>
                <span className={styles.ImgOvrContentSpan}>
                  <i
                    class="fas fa-check"
                    aria-hidden="true"
                    style={{
                      color: "#5AC2A5",
                      fontSize: "18px",
                      width: "100%",
                    }}
                  ></i>
                </span>
                <span className={styles.ImgOvrContentSecondSpan}>
                  <b className={styles.SecondSpanBold}>Act</b>– Put the power of
                  innovation into the hands of the doers, so all business units
                  can maximize their contribution to overall results.{" "}
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.imgOvrImageDiv}>
            <div className={styles.ImageDivInner}>
              <img src={imgoverlay} alt="" className={styles.ImgDivInnerimg} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomContentWrapper}>
        <div className={styles.bottomContentInner}>
          <div className={styles.btmContentData}>
            <h2 className={styles.btmContentDataHead}>The Four Cornerstones</h2>
            <p className={styles.btmContentDataFirstPara}>
              When a customer embarks on an Anaplan journey, there needs a focus
              on the Anaplan model build. The Anaplan platform cannot be
              successfully deployed in an unstructured manner.
            </p>
            <p className={styles.btmContentDataSecondPara}>
              Like other mission-critical applications and processes, an Anaplan
              implementation and deployment needs to be planned carefully to be
              executed well. The keys are in the pre-planning, team
              collaboration and the fast, iterative execution using Agile
              implementation methodology. Once these components are in place, it
              is important to take note of the fundamentals that lead to a
              successful implementation, that are the four cornerstones of The
              Anaplan Way.
            </p>
          </div>
          <div className={styles.btmToggleOuterDiv}>
            <div className={styles.btmToggleInnerDiv}>
              {toggleData.map((item, index) => (
                <div key={item.id} className={styles.singleToggleOuter}>
                  <div
                    className={styles.singleToggleContentHeading}
                    onClick={() => handleToggle(index)}
                  >
                    <h5 className={styles.singleToggleContent}>{item.title}</h5>
                    <span className={styles.plusIconSpan}>
                      <FontAwesomeIcon
                        icon={openIndex.includes(index) ? faMinus : faPlus}
                        style={{
                          fontSize: "24px",
                          fontWeight: "900",
                          color: "#222D4E",
                        }}
                      />
                    </span>
                  </div>
                  <div
                    className={
                      openIndex.includes(index)
                        ? styles.ToggleContentOuterMainDispaly
                        : styles.ToggleContentOuterMainHide
                    }
                  >
                    <p className={styles.ToggleContentOuterPara}>
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
              {/* <div className={styles.singleToggleOuter}>
                        <div className={styles.singleToggleContentHeading}
                        onClick={()=>setIsOpen(!isOpen)}>
                            <h5 className={styles.singleToggleContent}>Process</h5>
                            <span className={styles.plusIconSpan}>
                            <FontAwesomeIcon icon={isOpen?faPlus:faMinus} style={{ fontSize: "24px", fontWeight: "900", color: "#222D4E" }} />

                            </span>
                          
                        </div>
                        <div className={isOpen?styles.ToggleContentOuterMainHide:styles.ToggleContentOuterMainDispaly}>
                            <p className={styles.ToggleContentOuterPara}>

                        The wider business process that the Anaplan model supports.
                            </p>
                                </div>
                    </div>
                    <div className={styles.singleToggleOuter}>
                        <div className={styles.singleToggleContentHeading}
                        onClick={()=>setIsOpen(!isOpen)}>
                            <h5 className={styles.singleToggleContent}>Process</h5>
                            <span className={styles.plusIconSpan}>
                            <FontAwesomeIcon icon={isOpen?faPlus:faMinus} style={{ fontSize: "24px", fontWeight: "900", color: "#222D4E" }} />

                            </span>
                          
                        </div>
                        <div className={isOpen?styles.ToggleContentOuterMainHide:styles.ToggleContentOuterMainDispaly}>
                            <p className={styles.ToggleContentOuterPara}>

                        The wider business process that the Anaplan model supports.
                            </p>
                                </div>
                    </div>
                    <div className={styles.singleToggleOuter}>
                        <div className={styles.singleToggleContentHeading}
                        onClick={()=>setIsOpen(!isOpen)}>
                            <h5 className={styles.singleToggleContent}>Process</h5>
                            <span className={styles.plusIconSpan}>
                            <FontAwesomeIcon icon={isOpen?faPlus:faMinus} style={{ fontSize: "24px", fontWeight: "900", color: "#222D4E" }} />

                            </span>
                          
                        </div>
                        <div className={isOpen?styles.ToggleContentOuterMainHide:styles.ToggleContentOuterMainDispaly}>
                            <p className={styles.ToggleContentOuterPara}>

                        The wider business process that the Anaplan model supports.
                            </p>
                                </div>
                    </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.finalContainer}>
        <div className={styles.finalInnerContainer}>
          <p className={styles.finalPara}>
            <span style={{ color: "#2d9bff" }}>The Anaplan journey</span> is
            exciting and using{" "}
            <span style={{ color: "#f1ce3b" }}>Anaplan Way</span> defines{" "}
            <span style={{ color: "#ffaa4c" }}>
              a effective and qualitative
            </span>{" "}
            approach focused on{" "}
            <span style={{ color: "#16608e" }}> customer success</span> and{" "}
            <span style={{ color: "#5ac2a5" }}>
              time to value with rapid delivery.
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Consultation;
