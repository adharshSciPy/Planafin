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
        `${baseUrl}/api/v1/user//getBusinessPlanningById/${id}`
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
      <div className={styles.secondContentMain}>
        <div className={styles.secondContentMainSub}>
          <div className={styles.secondLeftContainer}>
            <div className={styles.secondLeftmain}>
              <img src={image} alt="about" />
            </div>
          </div>
          <div className={styles.secondRightContainer}>
            <div className={styles.secondRightHeading}>
              <h1>{supplyData?.contentHeading || ""}</h1>
            </div>
            <div className={styles.secondRightpara}>
              <p>{supplyData?.description || ""}</p>
            </div>
            <div className={styles.secondContentList}>
              <div className={styles.listMain}>
                <ul className={styles.secondRightUl}>
                  {supplyData?.contentPoints.map((item,index)=>{
                    return(
                      <li className={styles.secondRightUlLi} key={index}>
                    <div className={styles.secondContentTick} >
                      <img src={tickImage} alt="" />
                    </div>
                    <div className={styles.listContent}>
                      <p>
                        {item}
                      </p>
                    </div>
                  </li>
                    )
                  })}
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SupplyChain;
