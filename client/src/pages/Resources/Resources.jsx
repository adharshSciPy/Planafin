import React, { useState } from 'react'
import styles from "../Resources/Resources.module.css"
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import { Card } from "antd";
import { CaretRight } from "phosphor-react";

function Resources() {
    const [activeTab, setActiveTab] = useState("upcoming")
    return (
        <div>
            <Header />
            <div className={styles.maincontainer}>
                <h1>Webinars & Events</h1>
                <div className={styles.tabs}>
                    <h3
                        className={`${styles.tabs} ${activeTab === "upcoming" ? styles.active : ""}`}
                        onClick={() => setActiveTab("upcoming")}
                    >
                        Upcoming Webinar
                    </h3>
                    <h3
                        className={`${styles.tabs} ${activeTab === "on-demand" ? styles.active : ""}`}
                        onClick={() => setActiveTab("on-demand")}
                    >
                        On-demand Webinar
                    </h3>
                </div>
            </div>
            <div className={`${styles.content} ${activeTab === "upcoming" ? styles.active : ""}`}>
                <div className={styles.upcomingContent}>
                    <Footer className={styles.footer} />
                </div>
            </div>
            <div className={`${styles.content} ${activeTab === "on-demand" ? styles.active : ""}`}>
                <div className={styles.ondemandContent}>
                    <div className={styles.card}>
                        <div className={styles.cardone}>
                            <Card
                                hoverable
                                style={{ height: "auto", display: "flex", flexDirection: "column" }}
                                cover={
                                    <img
                                        height="213px"
                                        width="355px"
                                        alt="example"
                                        src="https://planafin.com/wp-content/uploads/2024/03/4-Campaigns-Promos-Infographics-scaled.jpg"
                                    />
                                }
                            >
                                <div className={styles.webinarContent}>
                                    <div className={styles.webinar}>WEBINAR</div>
                                    <div className={styles.webinardata}>
                                        <h3>S&OP Series: Episode 4 – Marketing Campaigns & Promotions Planning</h3>
                                        <p>This the fourth episode from our S&OP Series which demonstrates ‘Marketing Campaigns & Promotions Planning’ application built on Pigment.
                                            It showcases Marketing Expenditure, Campaigns Planning, Promotions Planning, Break-Even Analysis, Cost-Benefit Analysis, and Marketing ROI.</p>
                                        <button className={styles.button}>Watch Now <CaretRight size={30} color="#FFFFFF" /></button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className={styles.cardone}>
                            <Card
                                hoverable
                                style={{ height: "auto", display: "flex", flexDirection: "column" }}
                                cover={
                                    <img
                                        height="213px"
                                        width="355px"
                                        alt="example"
                                        src="https://planafin.com/wp-content/uploads/2024/03/3-Demand-Forecasting-Infographic-scaled.jpg"
                                    />
                                }
                            >
                                <div className={styles.webinarContent}>
                                    <div className={styles.webinar}>WEBINAR</div>
                                    <div className={styles.webinardata}>
                                        <h3>S&OP Series: Episode 3 – Demand Forecasting</h3>
                                        <p style={{lineHeight:"25px"}}>This session is our main event. It is the third episode from our S&OP Series which demonstrates ‘Demand Forecasting’ application built on Pigment.
                                            It showcases Product Lifecycle Management, Sales Collaboration, Statistical Forecasting, Demand Planning, and much more.</p>
                                        <button className={styles.button}>Watch Now <CaretRight size={30} color="#FFFFFF" /></button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className={styles.cardone}>
                            <Card
                                hoverable
                                style={{ height: "auto", display: "flex", flexDirection: "column" }}
                                cover={
                                    <img
                                        height="213px"
                                        width="355px"
                                        alt="example"
                                        src="https://planafin.com/wp-content/uploads/2024/03/2-Budgeting-Infographic-scaled.jpg"
                                    />
                                }
                            >
                                <div className={styles.webinarContent}>
                                    <div className={styles.webinar}>WEBINAR</div>
                                    <div className={styles.webinardata}>
                                        <h3>S&OP Series: Episode 2 – Budgeting</h3>
                                        <p style={{lineHeight:"32px"}}>This is the second episode from our S&OP Series which demonstrates ‘Budgeting’ application built on Pigment.
                                            It showcases Sales Budgeting, Manpower Budgeting, Operations Budgeting, and the overall Financial Budgeting.</p>
                                        <button className={styles.button}>Watch Now <CaretRight size={30} color="#FFFFFF" /></button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className={styles.cardone}>
                            <Card
                                hoverable
                                style={{ height: "auto", display: "flex", flexDirection: "column" }}
                                cover={
                                    <img
                                        height="213px"
                                        width="355px"
                                        alt="example"
                                        src="https://planafin.com/wp-content/uploads/2024/03/1_-_Infograph1-scaled.jpg"
                                    />
                                }
                            >
                                <div className={styles.webinarContent}>
                                    <div className={styles.webinar}>WEBINAR</div>
                                    <div className={styles.webinardata}>
                                        <h3>S&OP Series: Episode 1 – Target Setting</h3>
                                        <p style={{lineHeight:"32px"}}>This use case is specially curated by Planafin’s experienced techno-functional consultants and domain experts.
                                            It is the first episode from our S&OP Series which demonstrates ‘Target Setting’ application built on Pigment. </p>
                                        <button className={styles.button}>Watch Now <CaretRight size={30} color="#FFFFFF" /></button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div><Footer /></div>
                </div>
            </div>
        </div>
    )
}

export default Resources