import React from "react";
import Header from "../../components/Header/Header";
import styles from "./solution.module.css";
import image from "../../assets/about.people.png";
import tickImage from "../../assets/point-tick.png";
import honeyComb from "../../assets/Supply-Chain-Honeycomb-2.png";
import hrHoneyComb from "../../assets/HR-Honeycomb.png";
import honeyCombsales from "../../assets/Sales-Honeycomb-2.png";
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
      <div className={styles.thirdContentMain}>
        <div className={styles.secondContentMainSub}>
          <div className={styles.secondRightContainer}>
            <div className={styles.secondRightHeading}>
              <h1>Supply Chain Planning</h1>
            </div>
            <div className={styles.secondRightpara}>
              <p>
                Shift from linear supply chain planning to an integrated and
                networked approach with dynamic, collaborative, and resilient
                S&OP solutions. Leverage advanced algorithms and improve line of
                sight visibility by connecting strategic, financial, and
                operational plans. Take holistic approach in identifying future
                demand trends enabling better responses to demand and supply
                variability.
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
                        Improve forecast accuracy by applying predictive
                        intelligence, machine learning, and advanced algorithms
                        to identify real-time signals, plan promotions, new
                        product launches and adjust models as the market
                        changes.
                      </p>
                    </div>
                  </li>
                  <li className={styles.secondRightUlLi}>
                    <div className={styles.secondContentTick}>
                      <img src={tickImage} alt="" />
                    </div>
                    <div className={styles.listContent}>
                      <p>
                        Optimize inventory, manage inventory cost, assess safety
                        stock levels and improve efficiency with a comprehensive
                        outlook taking into consideration lead time, customer
                        commitments, supply reliability.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.secondLeftContainer}>
            <div className={styles.secondLeftmain}>
              <img src={honeyComb} alt="about" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondContentMain}>
        <div className={styles.secondContentMainSub}>
          <div className={styles.secondLeftContainer}>
            <div className={styles.secondLeftmain}>
              <img src={hrHoneyComb} alt="about" />
            </div>
          </div>
          <div className={styles.secondRightContainer}>
            <div className={styles.secondRightHeading}>
              <h1>Workforce Planning</h1>
            </div>
            <div className={styles.secondRightpara}>
              <p>
                With recent shift to hybrid working models, it is crucial to
                develop a dynamic workforce blueprint that enables to
                successfully align and execute business strategies and
                operations and drive cross-functional collaboration for improved
                talent and strategy to close skills gaps aligned to business
                goals and budget.
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
                        Align workforce management with shifting skillset
                        requirements, identify talent headcount and talent
                        shortages, create compensation plans and bring
                        transparency into your workforce and key metrics for
                        talent and cost optimization
                      </p>
                    </div>
                  </li>
                  <li className={styles.secondRightUlLi}>
                    <div className={styles.secondContentTick}>
                      <img src={tickImage} alt="" />
                    </div>
                    <div className={styles.listContent}>
                      <p>
                        Create a comprehensive workforce plan, gain a holistic
                        view connecting hiring plans, existing headcount,
                        succession using rich analytics and statistical
                        capabilities to examine key talent metrics and drill
                        into details to reveal meaningful insights.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thirdContentMain}>
        <div className={styles.secondContentMainSub}>
          <div className={styles.secondRightContainer}>
            <div className={styles.secondRightHeading}>
              <h1>Sales & Marketing Plan</h1>
            </div>
            <div className={styles.secondRightpara}>
              <p>
                Manage go-to-market strategy and develop an agile sales plan,
                enhance predictability, gain deeper insights, uncover hidden
                revenue opportunities, and optimize sales performance. Fill your
                pipeline with realistic, winnable opportunities and increase the
                accuracy of sales and revenue forecasts.F
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
                        Design and optimize territories, quotas and targets,
                        capacity plans and account segmentation strategies to
                        keep your team focused on securing revenue and
                        collaborate simultaneously with multiple teams.
                      </p>
                    </div>
                  </li>
                  <li className={styles.secondRightUlLi}>
                    <div className={styles.secondContentTick}>
                      <img src={tickImage} alt="" />
                    </div>
                    <div className={styles.listContent}>
                      <p>
                        Identify realistic, winnable opportunities and increase
                        the accuracy of sales and revenue forecasts and track
                        coverage gaps, overlaps and lost opportunities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.secondLeftContainer}>
            <div className={styles.secondLeftmain}>
              <img src={honeyCombsales} alt="about" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default SupplyChain;
