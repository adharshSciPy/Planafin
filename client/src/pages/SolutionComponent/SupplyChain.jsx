import React from "react";
import Header from "../../components/Header/Header";
import styles from "./solution.module.css";
import image from "../../assets/about.people.png";
import tickImage from "../../assets/point-tick.png";
import Footer from "../../components/Footer/Footer"

function SupplyChain() {
  return (
    <>
      <Header></Header>
      <div className={styles.mainContainer}>
        <div className={styles.subContainer}>
          <div className={styles.firstContentMain}>
            <div className={styles.firstContentHeading}>
              <h2>Accelerate Decision Making with Connected Planning</h2>
            </div>
            <div className={styles.firstContentpara}>
              <p>
                Gain a competitive edge by accelerating business performance
                through connected planning. The changing demands of the market
                have made connected planning more crucial than ever. Enable
                transparent cross-functional collaboration across organization
                for making rapid and efficient business decisions.{" "}
              </p>
            </div>
            <div className={styles.firstContentButton}>
              <div>
                <button className={styles.firstButton}>Get In Touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondContentMain}>
        <div className={styles.secondContentMainSub}>
          <div className={styles.secondLeftContainer}>
            <div className={styles.secondLeftmain}>
              <img src={image} alt="about" />
            </div>
          </div>
          <div className={styles.secondRightContainer}>
            <div className={styles.secondRightHeading}>
              <h1>Financial Planning & Analysis</h1>
            </div>
            <div className={styles.secondRightpara}>
              <p>
                Fuel growth, optimize costs, and mitigate risk with our
                financial planning solutions. Make proactive decisions and
                execute the right actions to optimize revenue, cost, and profit.
                Connect people, data, and plans across your organization to
                empower business growth. Deliver timely, accurate predictions,
                analyses, and management reports using automated processes and
                workflows.
              </p>
            </div>
            <div className={styles.secondContentList}>
              <div className={styles.listMain}>
                <ul className={styles.secondRightUl}>
                  <li className={styles.secondRightUlLi}>
                    <div className={styles.secondContentTick}>
                      <img src={tickImage} alt="" />
                    </div>
                    <div className={styles.listContent}>
                      <p>
                        Execute “what-if” scenario analysis and enable teams to
                        quickly see the impacts of dynamic market changes and
                        their effects on business outcomes.
                      </p>
                    </div>
                  </li>
                  <li className={styles.secondRightUlLi}>
                    <div className={styles.secondContentTick}>
                      <img src={tickImage} alt="" />
                    </div>
                    <div className={styles.listContent}>
                      <p>
                        Replace rigid applications, gain a high degree of
                        visibility and flexibility in defining driver-based
                        models for realistic predictions and orchestrating
                        business strategies.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default SupplyChain;
