import React, { useState } from "react";
import styles from "./header.module.css";
import navIcon from "../../assets/logo.png";
import menuPic from "../../assets/menu.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isResourceOpen, setResourceOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

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
              <Link
                to="/"
                className={`${styles.navLink} ${
                  isActive("/") ? styles.activeLink : ""
                }`}
              >
                Home
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link
                to="/Services"
                className={`${styles.navLink} ${
                  isActive("/Services") ? styles.activeLink : ""
                }`}
              >
                Services
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link
                to="/Solutions"
                className={`${styles.navLink} ${
                  isActive("/Solutions") ? styles.activeLink : ""
                }`}
              >
                Solutions
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link
                to="/AboutUs"
                className={`${styles.navLink} ${
                  isActive("/AboutUs") ? styles.activeLink : ""
                }`}
              >
                About Us
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link
                to="/career"
                className={`${styles.navLink} ${
                  isActive("/career") ? styles.activeLink : ""
                }`}
              >
                Career
              </Link>
            </div>
            <div
              className={`${styles.navItem} ${styles.dropDown}`}
              onClick={() => setResourceOpen(!isResourceOpen)}
            >
              <Link
                to="#"
                className={`${styles.navLink} ${
                  location.pathname.startsWith("/resources")
                    ? styles.activeLink
                    : ""
                }`}
              >
                Resources
              </Link>
              <ul
                className={`${styles.subMenuNav} ${
                  isResourceOpen ? styles.active : ""
                }`}
              >
                <li>
                  <Link
                    to="/resources"
                    className={`${styles.navLink} ${
                      isActive("/resources") ? styles.activeLink : ""
                    }`}
                  >
                    Webinars & Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.navItem} ${styles.lastChild}`}>
              <Link
                to="/lets-talk"
                className={`${styles.navLink} ${
                  isActive("/lets-talk") ? styles.activeLink : ""
                }`}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
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
          <div className={styles.mobileNavItem}>
            <div className={styles.mobileNavContents}>
              <Link
                to="/"
                className={`${styles.navLink} ${
                  isActive("/") ? styles.activeLink : ""
                }`}
              >
                Home
              </Link>
            </div>
            <div className={styles.mobileNavContents}>
              <Link
                to="/Services"
                className={`${styles.navLink} ${
                  isActive("/Services") ? styles.activeLink : ""
                }`}
              >
                Services
              </Link>
            </div>
            <div className={styles.mobileNavContents}>
              <Link
                to="/Solutions"
                className={`${styles.navLink} ${
                  isActive("/Solutions") ? styles.activeLink : ""
                }`}
              >
                Solutions
              </Link>
            </div>
            <div className={styles.mobileNavContents}>
              <Link
                to="/AboutUs"
                className={`${styles.navLink} ${
                  isActive("/AboutUs") ? styles.activeLink : ""
                }`}
              >
                About Us
              </Link>
            </div>
            <div className={styles.mobileNavContents}>
              <Link
                to="/career"
                className={`${styles.navLink} ${
                  isActive("/career") ? styles.activeLink : ""
                }`}
              >
                Career
              </Link>
            </div>
            <div className={styles.mobileNavContents}>
              <Link
                to="/resources"
                className={`${styles.navLink} ${
                  location.pathname.startsWith("/resources")
                    ? styles.activeLink
                    : ""
                }`}
              >
                Resources
              </Link>
            </div>
            <div className={`${styles.mobileNavContents} ${styles.lastChildMob}`}>
              <Link
                to="/lets-talk"
                className={`${styles.navLink} ${
                  isActive("/lets-talk") ? styles.activeLink : ""
                }`}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
