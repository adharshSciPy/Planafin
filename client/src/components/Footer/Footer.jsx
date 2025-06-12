import React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className={styles.footerMainContainer}>
                <div className={styles.footerLogoContainer}>
                    <div className={styles.logoMain}>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className={styles.footerDetailsContainer}>
                    <div className={styles.footerDetailsMain}>
                        <div className={styles.detailsContainer}>
                            <ul className={styles.detailsList}>
                                <li className={styles.listHeading}><p>USA Office</p></li>
                                <li className={styles.listFontStyle}>+1 (307) 381-0718</li>
                                <li className={styles.listFontStyle}>30 N Gould St Ste N Sheridan</li>
                                <li className={styles.listFontStyle}>WY 82801, USA</li>
                            </ul>
                        </div>
                        <div className={styles.detailsContainer}>
                            <ul className={styles.detailsList}>
                                <li className={styles.listHeading}><p>UAE Office</p></li>
                                <li className={styles.listFontStyle}>+971503210586</li>
                                <li className={styles.listFontStyle}>#G-035, TechnoHub,</li>
                                <li className={styles.listFontStyle}>Dubai Silicon Oasis, Dubai, United Arab Emirates</li>
                            </ul>
                        </div>
                        <div className={styles.detailsContainer}>
                            <ul className={styles.detailsList}>
                                <li className={styles.listHeading}><p>India Office</p></li>
                                <li className={styles.listFontStyle}>+91 9886759625</li>
                                <li className={styles.listFontStyle}>A4, Brindavan Sapthagiri, Bellandur,</li>
                                <li className={styles.listFontStyle}>Near Trinity Meadows, Bangalore-560103</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.waterMarkDesign}>
                    </div>
                    <div className={styles.waterMarkDesign}>
                        <p>Designed by <Link to="https://scipytechnologies.com/" style={{ textDecoration: 'none', textDecorationColor:'ActiveBorder' }}>SciPy Technologies</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
