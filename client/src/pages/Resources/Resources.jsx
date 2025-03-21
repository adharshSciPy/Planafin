import React, { useState } from "react";
import styles from "../Resources/Resources.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Card } from "antd";
import { CaretRight } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

function Resources() {
  const arrayItems = [
    [
      {
        h1: "S&OP Series: Episode 4 – Marketing Campaigns & Promotions Planning",
        Sessionsummary:
          "This the fourth episode from our S&OP Series which demonstrates ‘Marketing Campaigns & Promotions Planning’ application built on Pigment. It showcases Marketing Expenditure, Campaigns Planning, Promotions Planning, Break-Even Analysis, Cost-Benefit Analysis, and Marketing ROI.",
          AboutPigment:"Pigment is a flexible cloud EPM platform. It is highly collaborative and adaptive with a ‘low code-no code’ interface. Businesses can own their planning processes without any coding or programming skills and zero dependency on IT. Let your CXOs set organizational targets for long term with this intuitive and next generation platform",
          Aboutthespeaker:"Kunal Jethwa is the Associate Director (SaaS EPM, Supply Chain Planning & Forecasting) of Planafin FZE. He is an experienced Demand & Supply Planning Professional with a demonstrated history of working with industries like Chemical, Medical Devices, Robotics & Health Nutrition, Nutraceuticals, SaaS Technology, and Business & IT Consulting Services.",
          src:"https://planafin.com/wp-content/uploads/2024/03/4-Campaigns-Promos-Infographics-scaled.jpg"
        },
      ],
    [{
      h1: "S&OP Series: Episode 4 – Marketing Campaigns & Promotions Planning",
      Sessionsummary:
        "This the fourth episode from our S&OP Series which demonstrates ‘Marketing Campaigns & Promotions Planning’ application built on Pigment. It showcases Marketing Expenditure, Campaigns Planning, Promotions Planning, Break-Even Analysis, Cost-Benefit Analysis, and Marketing ROI.",
        AboutPigment:"Pigment is a flexible cloud EPM platform. It is highly collaborative and adaptive with a ‘low code-no code’ interface. Businesses can own their planning processes without any coding or programming skills and zero dependency on IT. Let your CXOs set organizational targets for long term with this intuitive and next generation platform",
        Aboutthespeaker:"Kunal Jethwa is the Associate Director (SaaS EPM, Supply Chain Planning & Forecasting) of Planafin FZE. He is an experienced Demand & Supply Planning Professional with a demonstrated history of working with industries like Chemical, Medical Devices, Robotics & Health Nutrition, Nutraceuticals, SaaS Technology, and Business & IT Consulting Services.",
        src:"https://planafin.com/wp-content/uploads/2024/03/4-Campaigns-Promos-Infographics-scaled.jpg"
      },],
    [{
      id:"123456709876",
      h1: "S&OP Series: Episode 4 – Marketing Campaigns & Promotions Planning",
      Sessionsummary:
        "This the fourth episode from our S&OP Series which demonstrates ‘Marketing Campaigns & Promotions Planning’ application built on Pigment. It showcases Marketing Expenditure, Campaigns Planning, Promotions Planning, Break-Even Analysis, Cost-Benefit Analysis, and Marketing ROI.",
        AboutPigment:"Pigment is a flexible cloud EPM platform. It is highly collaborative and adaptive with a ‘low code-no code’ interface. Businesses can own their planning processes without any coding or programming skills and zero dependency on IT. Let your CXOs set organizational targets for long term with this intuitive and next generation platform",
        Aboutthespeaker:"Kunal Jethwa is the Associate Director (SaaS EPM, Supply Chain Planning & Forecasting) of Planafin FZE. He is an experienced Demand & Supply Planning Professional with a demonstrated history of working with industries like Chemical, Medical Devices, Robotics & Health Nutrition, Nutraceuticals, SaaS Technology, and Business & IT Consulting Services.",
        src:"https://planafin.com/wp-content/uploads/2024/03/4-Campaigns-Promos-Infographics-scaled.jpg"
      },],
      [
        {
          id:"123456709876",
          h1: "S&OP Series: Episode 4 – Marketing Campaigns & Promotions Planning",
          Sessionsummary:
            "This the fourth episode from our S&OP Series which demonstrates ‘Marketing Campaigns & Promotions Planning’ application built on Pigment. It showcases Marketing Expenditure, Campaigns Planning, Promotions Planning, Break-Even Analysis, Cost-Benefit Analysis, and Marketing ROI.",
            AboutPigment:"Pigment is a flexible cloud EPM platform. It is highly collaborative and adaptive with a ‘low code-no code’ interface. Businesses can own their planning processes without any coding or programming skills and zero dependency on IT. Let your CXOs set organizational targets for long term with this intuitive and next generation platform",
            Aboutthespeaker:"Kunal Jethwa is the Associate Director (SaaS EPM, Supply Chain Planning & Forecasting) of Planafin FZE. He is an experienced Demand & Supply Planning Professional with a demonstrated history of working with industries like Chemical, Medical Devices, Robotics & Health Nutrition, Nutraceuticals, SaaS Technology, and Business & IT Consulting Services.",
            src:"https://planafin.com/wp-content/uploads/2024/03/4-Campaigns-Promos-Infographics-scaled.jpg"
          },
        ],
      [{
        id:"123456709876",
        h1: "S&OP Series: Episode 4 – Marketing Campaigns & Promotions Planning",
        Sessionsummary:
          "This the fourth episode from our S&OP Series which demonstrates ‘Marketing Campaigns & Promotions Planning’ application built on Pigment. It showcases Marketing Expenditure, Campaigns Planning, Promotions Planning, Break-Even Analysis, Cost-Benefit Analysis, and Marketing ROI.",
          AboutPigment:"Pigment is a flexible cloud EPM platform. It is highly collaborative and adaptive with a ‘low code-no code’ interface. Businesses can own their planning processes without any coding or programming skills and zero dependency on IT. Let your CXOs set organizational targets for long term with this intuitive and next generation platform",
          Aboutthespeaker:"Kunal Jethwa is the Associate Director (SaaS EPM, Supply Chain Planning & Forecasting) of Planafin FZE. He is an experienced Demand & Supply Planning Professional with a demonstrated history of working with industries like Chemical, Medical Devices, Robotics & Health Nutrition, Nutraceuticals, SaaS Technology, and Business & IT Consulting Services.",
          src:"https://planafin.com/wp-content/uploads/2024/03/4-Campaigns-Promos-Infographics-scaled.jpg"
        },],
      

  ];
  const getWebinar=async(id)=>{
    if(!id){
      console.log("error fecting id")
      return
    }
    try {
      console.log(id);
      
    } catch (error) {
      
    }
  }
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upcoming");
  const onnavigate = () => {
    navigate("/webinar");
  };
  const onnavigateTwo = () => {
    navigate("/webinar-2");
  };
  const onnavigateThree = () => {
    navigate("/webinar-3");
  };
  const onnavigatefour = () => {
    navigate("/webinar-4");
  };
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
          <Footer className={styles.footer} />
        </div>
      </div>
      <div
        className={`${styles.content} ${
          activeTab === "on-demand" ? styles.active : ""
        }`}
      >
        <div className={styles.ondemandContent}>
          <div className={styles.card}>
            {arrayItems.map((innerArray,index)=>
            innerArray?(
              <div className={styles.cardone} key={index}>
                {innerArray.map((item,i)=>(
                  <Card key={i}
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
                      src={item.src}
                    />
                  }
                  >
                    <div className={styles.webinarContent}>
                  <div className={styles.webinar}>WEBINAR</div>
                  <div className={styles.webinardata}>
                    <h3>
                      {item.h1}
                    </h3>
                    <p>{item.Sessionsummary}
                    </p>
                    <button className={styles.button} onClick={()=>getWebinar(item.id)}>
                      Watch Now <CaretRight size={30} color="#FFFFFF" />
                    </button>
                  </div>
                </div>

                  </Card>
                ))}
              </div>
            ):null)
            }
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
