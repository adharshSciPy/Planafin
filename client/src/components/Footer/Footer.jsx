import React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/logo.png";
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
                <li className={styles.listHeading}>
                  <p>USA Office</p>
                </li>
                <li className={styles.listFontStyle}>+1 (307) 381-0718</li>
                <li className={styles.listFontStyle}>
                  30 N Gould St Ste N Sheridan
                </li>
                <li className={styles.listFontStyle}>WY 82801, USA</li>
              </ul>
            </div>
            <div className={styles.detailsContainer}>
              <ul className={styles.detailsList}>
                <li className={styles.listHeading}>
                  <p>UAE Office</p>
                </li>
                <li className={styles.listFontStyle}>+971503210586</li>
                <li className={styles.listFontStyle}>#G-035, TechnoHub,</li>
                <li className={styles.listFontStyle}>
                  Dubai Silicon Oasis, Dubai, United Arab Emirates
                </li>
              </ul>
            </div>
            <div className={styles.detailsContainer}>
              <ul className={styles.detailsList}>
                <li className={styles.listHeading}>
                  <p>India Office</p>
                </li>
                <li className={styles.listFontStyle}>+91 9886759625</li>
                <li className={styles.listFontStyle}>
                  A4, Brindavan Sapthagiri, Bellandur,
                </li>
                <li className={styles.listFontStyle}>
                  Near Trinity Meadows, Bangalore-560103
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <nav className={styles.nav}>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
              <Link to="/Services" className={styles.navLink}>
                Services
              </Link>
              <Link to="/solutions" className={styles.navLink}>
                Solution    
              </Link>
              <Link to="/aboutus" className={styles.navLink}>
                About Us
              </Link>
              <Link to="/career" className={styles.navLink}>
                Career
              </Link>

              {/* Dropdown */}
              <div className={styles.dropdown}>
                <span className={styles.navLink}>Resources</span>
                <div className={styles.dropdownContent}>
                  <Link to="/resources" className={styles.navLink}>
                    Webinar And Events
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          <div className={styles.waterMarkDesign}>
            <p>© 2025 Planafin. All rights reserved</p>
          </div>
          <div className={styles.waterMarkDesign}>
            <p>
              Designed by{" "}
              <Link
                to="https://scipytechnologies.com/"
                style={{
                  textDecoration: "none",
                  textDecorationColor: "ActiveBorder",
                }}
              >
                SciPy Technologies
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
