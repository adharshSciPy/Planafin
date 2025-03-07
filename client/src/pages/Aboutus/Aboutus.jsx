import React from "react";
import styles from "./About.module.css";
import Header from "../../components/Header/Header";
import bgPic from "../../assets/Frame-2-1.png";
import Carousel from "../../components/Carousel/EmblaCarousel";
import "../../components/Carousel/css/embla.css";
import cardImage1 from "../../assets/cardImage1.png";
import cardImage2 from "../../assets/cardImage2.png";
import cardImage3 from "../../assets/cardImage3.png";
import cardImage4 from "../../assets/cardImage4.png";
import Footer from "../../components/Footer/Footer";
import teamImg from "../../assets/team1.png"

function Aboutus() {
  const OPTIONS = { loop: true };

  return (
    <div>
      <Header />
      <div className={styles.section}>
        <div className={styles.firstContent}>
          <div className={styles.paraOne}>
            <div className={styles.textContainer}>
              <h2 className={styles.mainHeading}>
                To make{" "}
                <span style={{ color: "#2d9bff" }}>something special</span> you
                just have to believe
                <span style={{ color: "#f1ce3b" }}> it's special</span>
              </h2>
            </div>
          </div>
          <div className={styles.paraOne}>
            <div className={styles.textContainer}>
              <p className={styles.headingPara}>
                Founded in 2015, Planafin is an independent consulting firm,
                focused on strategy, technology, implementation, deployment of
                solutions in the enterprise planning and performance management
                zone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.widgetContainer}>
          <div className={styles.imageWrapper}>
            <img src={bgPic} alt="bgpic" />
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <Carousel options={OPTIONS} />
      </div>
      <div className={styles.section}>
        <div className={styles.wrapperContainer}>
          <div className={styles.contentsContainer}>
            <div className={styles.firstContent}>
              <div className={styles.contentsHeading}>
                <h2>About Planafin</h2>
              </div>
            </div>
            <div className={styles.secondContent}>
              <p>
                With our singular and entire focus on enterprise planning and
                performance management domain, the solutions that we deploy
                globally to our customers, shall leverage the latest and best in
                a class technology platform, will empower our clients in
                attaining a system state, that is agile, scalable and fully
                sustainable, helping them not only to plan and maneuver the new
                normal quickly but also to lead the next normal.
              </p>
            </div>
            <div className={styles.thirdContent}>
              <p>
                For us, business is personal, we are extremely committed to the
                success of our customer engagements and remain a trusted partner
                to our clients, throughout the entire transformation journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.valueContent}>
          <div className={styles.valueHeading}>
            <h2>Our Values</h2>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.cardMain}>
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img src={cardImage1} alt="" />
                </div>
                <div className={styles.cardHeading}>
                  <h2>Customer Focus</h2>
                </div>
                <div className={styles.cardDescription}>
                  <p>
                    We approach every client uniquely, being part of the team
                    looking to continuously add value to improve business
                    efficiency through tailored and sustainable solutions.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img src={cardImage2} alt="" />
                </div>
                <div className={styles.cardHeading}>
                  <h2>Excellence</h2>
                </div>
                <div className={styles.cardDescription}>
                  <p>
                    We constantly thrive to deliver best quality solution for
                    every business scenario, leveraging our professional
                    expertise and knowledge gained through the number of years
                    of service.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img src={cardImage3} alt="" />
                </div>
                <div className={styles.cardHeading}>
                  <h2>Team Work</h2>
                </div>
                <div className={styles.cardDescription}>
                  <p>
                    We encourage a collaborative and supportive environment,
                    invest in our people, achieve great success through teamwork
                    and hold our strength and belief in diversity, equity, and
                    equality.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img src={cardImage4} alt="" />
                </div>
                <div className={styles.cardHeading}>
                  <h2>Innovation</h2>
                </div>
                <div className={styles.cardDescription}>
                  <p>
                    Planafin, being a leading partner requires unrivaled vision,
                    innovation and execution. We challenge our ideas of what’s
                    possible in order to better meet the needs of our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.journeyContents}>
          <div className={styles.journeyHeading}>
            <h2>Our Journey</h2>
          </div>
          <div className={styles.journeyDescriptionMain}>
            <div className={styles.leftContainer}></div>
            <div className={styles.rightContainer}>
              <div className={styles.rightMain}>
                <div className={styles.heading} style={{textAlign:"left"}}>2015</div>
                <div className={styles.heading}  style={{textAlign:"left"}}>Founded & Established</div>
                <div className={styles.journeyp}>
                  <p>
                    Founded and launched operations in the United Arab Emirates
                    and India
                    <br />
                    Established FP&A practice
                    <br />
                    Implemented for world's fourth largest tile manufacturing
                    company{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.journeyDescriptionMain}>
            <div className={styles.leftContainer}>
              <div className={styles.leftMain}>
                <div className={styles.heading}>2017</div>
                <div className={styles.heading}>
                  Leading EPM Partner of the Region
                </div>
                <div
                  className={styles.journeyp}
                  style={{ textAlign: "right " }}
                >
                  <p>
                    Industry expertise in retail, manufacturing, logistics
                    <br />
                    Implemented for Middle East's largest retail conglomerate
                    <br />
                    Implemented for seventh largest aluminum producer in the
                    world
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.rightMain}></div>
            </div>
          </div>
          <div className={styles.journeyDescriptionMain}>
            <div className={styles.leftContainer}></div>
            <div className={styles.rightContainer}>
              <div className={styles.rightMain}>
                <div className={styles.heading}  style={{textAlign:"left"}}>2019</div>
                <div className={styles.heading}  style={{textAlign:"left"}}>Global Achievement</div>
                <div className={styles.journeyp}>
                  <p>
                    Opened our office in United States
                    <br /> Established supply chain practice
                    <br /> Implemented S&OP solution for worlds largest solar
                    tracker company
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.journeyDescriptionMain}>
            <div className={styles.leftContainer}>
              <div className={styles.leftMain}>
                <div className={styles.heading}>2021</div>
                <div className={styles.heading}>Recognized Industry Expert</div>
                <div
                  className={styles.journeyp}
                  style={{ textAlign: "right " }}
                >
                  <p>
                    Expanded our operations in UK
                    <br />
                    Industry expertise in aviation, oil & gas, metal & mining
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.rightMain}></div>
            </div>
          </div>
          <div className={styles.journeyDescriptionMain}>
            <div className={styles.leftContainer}></div>
            <div className={styles.rightContainer}>
              <div className={styles.rightMain}>
                <div className={styles.heading}  style={{textAlign:"left"}}>2023</div>
                <div className={styles.heading}  style={{textAlign:"left"}}>
                  Expanded EPM Platform Partnerships
                </div>
                <div className={styles.journeyp}>
                  <p>
                    Partnership with Pigment and JustPerform
                    <br />
                    Released Planafin's Supply Chain Planning Suite of
                    Accelerators
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.journeyDescriptionMain}>
            <div className={styles.leftContainer}>
              <div className={styles.leftMain}>
                <div className={styles.heading}>2024</div>
                <div className={styles.heading}>
                  Customer base in India Expanded
                </div>
                <div
                  className={styles.journeyp}
                  style={{ textAlign: "right " }}
                >
                  <p>Industry Expertise in Telco Segment</p>
                </div>
              </div>
            </div>
            <div className={styles.lastrightContainer}>
              <div className={styles.rightMain}></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.wrapperOne}></div>
          <div className={styles.wrapperTwo}></div>
          <div className={styles.wrapperThree}>
            <div className={styles.certify}>
              <h2 className={styles.wrapperHeading}>45+</h2>
              <h2 className={styles.wrapperText}>
                Certified EPM <br />
                Consultants
              </h2>
            </div>
          </div>
          <div className={styles.wrapperFour}>
            <div className={styles.sucess}>
              <h2 className={styles.wrapperHeading}>110+</h2>
              <h2 className={styles.wrapperText}>
                Sucessfull <br />
                Projects
              </h2>
            </div>
          </div>
          <div className={styles.wrapperFive}>
            <div className={styles.business}>
              <h2 className={styles.wrapperHeading}>100+</h2>
              <h2 className={styles.wrapperText}>
                Business Use <br />
                Cases
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.planafinWrapper}>
          <div className={styles.wrapperMain}>
            <div className={styles.contentsWrapper}>
              <div className={styles.headerTextWrapper}>
                <h2>Why Planafin</h2>
              </div>
              <div className={styles.textWrapper}>
                <p>As one of the leading implementation partner, we have</p>
                <p>been involved in implementations across all industries </p>
                <p>
                  and business areas, have delivered successful targeted
                  business use case initiatives to large scale business
                  transformations.
                </p>
              </div>
              <div className={styles.textWrapperTwo}>
                <p>
                  We specialize in financial planning, supply chain, sales
                  performance management, financial consolidation, workforce
                  optimization and guide clients through their entire journey in
                  the space via our services provided on strategic advisory,
                  process optimization, system selection and implementation
                  including project management, change management, technology
                  enablement and managed services.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.teamContainer}>
          <div className={styles.teamWrapper}>
            <div className={styles.teamLeft}>
              <div className={styles.teamWidgetImg}>
                <img src={teamImg} alt="" />
              </div>
            </div>
            <div className={styles.teamRight}>
              <div className={styles.teamWidgetContent}>
                <div className={styles.teamHeading}>
                  <h2>Our Team</h2>
                </div>
                <div className={styles.teamText}>
                  <p>
                    Team Planafin comprises of practitioners, technology experts
                    including solution architects, model builders and
                    integration consultants, research and business analysts,
                    project management and change management consultants,
                    delivery and practice management heads.Team Planafin
                    comprises of practitioners, technology experts including
                    solution architects, model builders and integration
                    consultants, research and business analysts, project
                    management and change management consultants, delivery and
                    practice management heads.
                  </p>
                </div>
                <div className={styles.teamText}>
                  <p>
                    All our resources are experienced in their specific
                    functional areas and have delivered successful targeted
                    business use case initiatives to large scale business
                    transformations. We have been growing, expanding strongly
                    and has attracted functional and technology experts from
                    leading management consulting firms such as Deloitte,
                    Accenture to join us, also effectively augmenting us to
                    scale up faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
