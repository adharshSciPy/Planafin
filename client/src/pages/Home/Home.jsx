import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <div className={styles.elementorSpaceInner}></div>
      <div className={styles.elementorWidgetContainer}>
        <h2 className={styles.elementorHeading}>
          <span style={{color:"#2d9bff"}}>Fast Track </span>
           your business value <br />
          through  <span style={{color:"#f1ce3b"}}>Connected </span> 
          planning solutions
        </h2>
      </div>
    </div>
  );
}

export default Home;
