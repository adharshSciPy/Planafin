import React, { useState } from 'react'
import styles from "../Resources/Resources.module.css"
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"

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
                    <Footer />
                </div>
            </div>
            <div className={`${styles.content} ${activeTab === "on-demand" ? styles.active : ""}`}>
                <div className={styles.ondemandContent}></div>
            </div>
        </div>
    )
}

export default Resources