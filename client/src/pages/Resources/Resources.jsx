import React, { useState } from 'react'
import styles from "../Resources/Resources.module.css"
import Header from '../../components/Header/Header'

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
                        Upcoming Webinars
                    </h3>
                    <h3
                        className={`${styles.tabs} ${activeTab === "on-demand" ? styles.active : ""}`}
                        onClick={() => setActiveTab("on-demand")}
                    >
                        On-demand Webinars
                    </h3>
                </div>
            </div>
            <div className={`${styles.content} ${activeTab === "upcoming" ? styles.active : ""}`}>
                <p>List of upcoming webinars...</p>
            </div>
            <div className={`${styles.content} ${activeTab === "on-demand" ? styles.active : ""}`}>
                <p>List of on-demand webinars...</p>
            </div>
        </div>
    )
}

export default Resources