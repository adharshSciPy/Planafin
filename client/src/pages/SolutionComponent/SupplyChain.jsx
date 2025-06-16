import { React, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./solution.module.css";
import image from "../../assets/about.people.png";
import tickImage from "../../assets/point-tick.png";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import baseUrl from "../../baseUrl";
import { useParams } from "react-router-dom";

function SupplyChain() {
  const [supplyData, setSupplyData] = useState();
  const { id } = useParams();
  console.log(supplyData);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/v1/user/getBusinessPlanningById`
      );
      setSupplyData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(supplyData);

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
      {supplyData?.map((item, index) => (
  <div
    className={`${styles.secondContentMain} ${
      index % 2 === 0 ? styles.oddBackground : "#E8F2FC"
    }`}
    key={index}
  >
    <div className={styles.secondContentMainSub}>
      {index % 2 === 0 ? (
        <>
          <div className={styles.secondRightContainer}>
            <div className={styles.secondRightHeading}>
              <h1>{item?.contentHeading || ""}</h1>
            </div>
            <div className={styles.secondRightpara}>
              <p>{item?.description || ""}</p>
            </div>
            <div className={styles.secondContentList}>
              <div className={styles.listMain}>
                <ul className={styles.secondRightUl}>
                  {item?.contentPoints?.map((point, i) => (
                    <li className={styles.secondRightUlLi} key={i}>
                      <div className={styles.secondContentTick}>
                        <img src={tickImage} alt="" />
                      </div>
                      <div className={styles.listContent}>
                        <p>{point}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.secondLeftContainer}>
            <div className={styles.secondLeftmain}>
              <img
                src={`${baseUrl}/${item?.contentImage}`}
                alt="about"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.secondLeftContainer}>
            <div className={styles.secondLeftmain}>
              <img
                src={`${baseUrl}/${item?.contentImage}`}
                alt="about"
              />
            </div>
          </div>
          <div className={styles.secondRightContainer}>
            <div className={styles.secondRightHeading}>
              <h1>{item?.contentHeading || ""}</h1>
            </div>
            <div className={styles.secondRightpara}>
              <p>{item?.description || ""}</p>
            </div>
            <div className={styles.secondContentList}>
              <div className={styles.listMain}>
                <ul className={styles.secondRightUl}>
                  {item?.contentPoints?.map((point, i) => (
                    <li className={styles.secondRightUlLi} key={i}>
                      <div className={styles.secondContentTick}>
                        <img src={tickImage} alt="" />
                      </div>
                      <div className={styles.listContent}>
                        <p>{point}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  </div>
))}


      <Footer />
    </>
  );
}

export default SupplyChain;
