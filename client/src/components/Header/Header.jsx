import React, { useState } from 'react'
import styles from "./header.module.css"
import navIcon from "../../assets/logo.png"
import menuPic from "../../assets/menu.png"
const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.headerContainerMain}>
        {/* Logo */}
        <div className={styles.headerLogo}>
          <div className={styles.logoContainer}>
            <a href="">
              <img src={navIcon} alt="Logo" />
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.headerItems}>
          <div className={styles.navContainer}>
            <div className={styles.navItem}><a href="">Home</a></div>
            <div className={styles.navItem}><a href="">Services</a></div>
            <div className={styles.navItem}><a href="">Solutions</a></div>
            <div className={styles.navItem}><a href="">About Us</a></div>
            <div className={styles.navItem}><a href="">Career</a></div>
            <div className={styles.navItem}>
              <a href="">Resources</a>
              <ul className={styles.subMenuNav}>
                <li><a href="">Webinars & Events</a></li>
              </ul>
            </div>
            <div className={`${styles.navItem} ${styles.lastChild}`}><a href="">Let's Talk</a></div>
          </div>
        </div>

        <div className={styles.mobileNavIcon}>
          <button className={styles.mobileNav} onClick={() => setMobileNavOpen(!isMobileNavOpen)}>
            <img src={menuPic} alt="Menu" />
          </button>
        </div>

        <div className={`${styles.mobileNavMain} ${isMobileNavOpen ? styles.active : ""}`}>
        <div class={styles.mobileNavItem}>
                    <div class={styles.mobileNavContents}>
                        <a href="">Home</a>
                    </div>
                    <div class={styles.mobileNavContents}>
                        <a href="">Services</a>
                    </div>
                    <div class={styles.mobileNavContents}>
                        <a href="">Solutions</a></div>
                    <div class={styles.mobileNavContents}>
                        <a href="">About Us </a></div>
                    <div class={styles.mobileNavContents}>
                        <a href="">Career</a></div>
                    <div class={styles.mobileNavContents}>
                        <a href="">Resources</a></div>
                    <div className={`${styles.mobileNavContents} ${styles.lastChildMob}`}>
                        <a href="">Let's Talk</a>
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Header