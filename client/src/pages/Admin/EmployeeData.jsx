import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseUrl from "../../baseUrl";
import axios from "axios";
import styles from "./Employeedata.module.css";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function EmployeeData() {
  const { id } = useParams();
  const [employeeData, setEmployeeState] = useState({});
  const getDataEmploye = async () => {
    try {
      const result = await axios.get(
        `${baseUrl}/api/v1/user/getemployeeData/${id}`
      );
      if (result) {
        setEmployeeState(result.data.data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("this", employeeData);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    getDataEmploye();
  }, [id]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <div className={styles.headingcontainer}>
          <h1>Employee Data </h1>
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.newContent}>
            <div className={styles.left}>Name</div>
            <div className={styles.right}>
              {`${employeeData.firstName} ${employeeData.lastName}` || "nil"}
            </div>
          </div>
          <div className={styles.newContent}>
            <div className={styles.left}>Email</div>
            <div className={styles.right}>{employeeData.email || "nil"}</div>
          </div>
          <div className={styles.newContent}>
            <div className={styles.left}>Phone</div>
            <div className={styles.right}>{employeeData.phone || "nil"}</div>
          </div>
          <div className={styles.newContent}>
            <div className={styles.left}>Company</div>
            <div className={styles.right}>{employeeData.company || "nil"}</div>
          </div>
          <div className={styles.newContent}>
            <div className={styles.left}>Current Company</div>
            <div className={styles.right}>
              {employeeData.currentCompany || "nil"}
            </div>
          </div>
          <div className={styles.newContent}>
            <div className={styles.left}>Linked In</div>
            <div className={styles.right}>{employeeData.linkedIn || "nil"}</div>
          </div>
          <div className={styles.newContent}>
            <div className={styles.left}>Github</div>
            <div className={styles.right}>{employeeData.github || "nil"}</div>
          </div>
          <div className={styles.newContent}>
            <div className={styles.left}>Job Title</div>
            <div className={styles.right}>{employeeData.jobTitle || "nil"}</div>
          </div>
          <div className={styles.newContent}>
            <div className={styles.left}>Resume</div>
            <div className={styles.right}>
            {employeeData.resume ? (
  <a
    href={`${baseUrl}/${employeeData.resume}`}
    target="_blank"
    rel="noopener noreferrer"
    download
    className={styles.downloadBtn}
  >
    Download Resume
  </a>
) : (
  <p>No resume available</p>
)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeData;
