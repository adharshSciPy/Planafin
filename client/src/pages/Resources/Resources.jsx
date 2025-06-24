import React, { useEffect, useState } from "react";
import styles from "../Resources/Resources.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Card } from "antd";
import { CaretRight } from "@phosphor-icons/react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../baseUrl";
import { useLocation } from "react-router-dom";

function Resources() {
  const [arrayItem, setArrayItem] = useState([]);
  const [uparrayItem, setUpArrayItem] = useState([]);
  const navigate=useNavigate()
    const { pathname } = useLocation();

  const getData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/user/demandDetails`);
      setArrayItem(response.data?.data || []);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const getUpData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/user/getAllUpcomingwebinar`);
      setUpArrayItem(response.data?.data || []);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUpData();
  }, []);
  const [activeTab, setActiveTab] = useState("upcoming");
    useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header />
      <div className={styles.maincontainer}>
        <h1>Webinars & Events</h1>
        <div className={styles.tabs}>
          <h3
            className={`${styles.tabs} ${
              activeTab === "upcoming" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Webinar
          </h3>
          <h3
            className={`${styles.tabs} ${
              activeTab === "on-demand" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("on-demand")}
          >
            On-demand Webinar
          </h3>
        </div>
      </div>
      <div
        className={`${styles.content} ${
          activeTab === "upcoming" ? styles.active : ""
        }`}
      >
        <div className={styles.upcomingContent}>
        <div className={styles.card}>
            {uparrayItem.map((item, i) => (
              <div className={styles.cardone} onClick={() =>{
                navigate(`/upcomingWebinar/${item._id}`)
              }}>
                <Card
                  key={i}
                  hoverable
                  style={{
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  cover={
                    <img
                      height="213px"
                      width="355px"
                      alt="example"
                      src={`${baseUrl}/${item.image}`}
                    />
                  }
                >
                  <div className={styles.webinarContent}>
                    <div className={styles.webinar}>UPCOMING WEBINAR</div>
                    <div className={styles.webinardata}>
                      <h3>{item.title}</h3>
                      <div className={styles.webinardataPara}>
                      <p>{item.summary}</p>
                      </div>
                      <button
                        className={styles.button}
                        onClick={() =>{
                          navigate(`/upcomingWebinar/${item._id}`)
                        }}
                      >
                        Watch Now <CaretRight size={30} color="#FFFFFF" />
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
      <div
        className={`${styles.content} ${
          activeTab === "on-demand" ? styles.active : ""
        }`}
      >
        <div className={styles.ondemandContent}>
          <div className={styles.card}>
            {arrayItem.map((item, i) => (
              <div className={styles.cardone} onClick={() =>{
                navigate(`/webinar/${item._id}`)
              }}>
                <Card
                  key={i}
                  hoverable
                  style={{
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  cover={
                    <img
                      height="213px"
                      width="355px"
                      alt="example"
                      src={`${baseUrl}/${item.image}`}
                    />
                  }
                >
                  <div className={styles.webinarContent}>
                    <div className={styles.webinar}>WEBINAR</div>
                    <div className={styles.webinardata}>
                      <h3>{item.title}</h3>
                      <div className={styles.webinardataPara}>
                      <p>{item.summary}</p>
                      </div>
                      <button
                        className={styles.button}
                        onClick={() =>{
                          navigate(`/webinar/${item._id}`)
                        }}
                      >
                        Watch Now <CaretRight size={30} color="#FFFFFF" />
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
