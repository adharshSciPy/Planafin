import React, { useState } from "react";
import styles from "./header.module.css";
import navIcon from "../../assets/logo.png";
import menuPic from "../../assets/menu.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isResourceOpen, setResourceOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.headerContainerMain}>
        {/* Logo */}
        <div className={styles.headerLogo}>
          <div className={styles.logoContainer}>
          <Link to="/" className={styles.navLink}>
              <img src={navIcon} alt="Logo" />
          </Link>
            
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.headerItems}>
          <div className={styles.navContainer}>
            <div className={styles.navItem}>
              <Link to="/" className={styles.navLink}>Home</Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/Services" className={styles.navLink}>Services</Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/Solutions" className={styles.navLink}>Solutions</Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/AboutUs" className={styles.navLink}>About Us</Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/career" className={styles.navLink}>Career</Link>
            </div>
            <div
              className={`${styles.navItem} ${styles.dropDown}`}
              onClick={() => setResourceOpen(!isResourceOpen)}
            >
              <Link to="#" className={styles.navLink}>Resources</Link>
              <ul
                className={`${styles.subMenuNav} ${
                  isResourceOpen ? styles.active : ""
                }`}
              >
                <li>
                  <Link to="/resources" className={styles.navLink}>Webinars & Events</Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.navItem} ${styles.lastChild}`}>
              <Link to="/lets-talk" className={styles.navLink}>Let's Talk</Link>
            </div>
          </div>
        </div>

        <div className={styles.mobileNavIcon}>
          <button
            className={styles.mobileNav}
            onClick={() => setMobileNavOpen(!isMobileNavOpen)}
          >
            <img src={menuPic} alt="Menu" />
          </button>
        </div>

        <div
          className={`${styles.mobileNavMain} ${
            isMobileNavOpen ? styles.active : ""
          }`}
        >
          <div class={styles.mobileNavItem}>
            <div class={styles.mobileNavContents}>
              <Link to="/" className={styles.navLink}>Home</Link>
            </div>
            <div class={styles.mobileNavContents}>
              <Link to="/Services" className={styles.navLink}>Services</Link>
            </div>
            <div class={styles.mobileNavContents}>
              <Link to="/Solutions" className={styles.navLink}> Solutions</Link>
            </div>
            <div class={styles.mobileNavContents}>
              <Link to="/About Us" className={styles.navLink}>About Us</Link>
            </div>
            <div class={styles.mobileNavContents}>
              <Link to="/career" className={styles.navLink}>career</Link>
            </div>
            <div className={`${styles.mobileNavContents} `}>
              <Link to="/Resources" className={styles.navLink}>Resources</Link>
            </div>
            <div
              className={`${styles.mobileNavContents} ${styles.lastChildMob}`}
            >
              <Link to="/letstalk" className={styles.navLink}>Let's Talk</Link>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
