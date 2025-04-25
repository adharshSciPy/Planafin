import React from "react";
import "./dashboard.css";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/adminlogin");
  };
  return (
    <div>
      <div className="dashboard-container">
        <nav className="dashboard-navbar">PLANAFIN DASHBOARD SECTION</nav>

        <div className="dashboard-cards-container">
          <div className="firstrow">
            <div className="firstcard">
              <h3>Job Details</h3>
              <Link to="/jobdetails">
                <button className="firstcard-btn1">View</button>
              </Link>
            </div>
            <div className="secondcard">
              <h3>Job Openings</h3>
              <Link to="/jobopenings">
                <button className="secondcard-btn1">View</button>
              </Link>
            </div>
            <div className="thirdcard">
              <h3>Webinar Details</h3>
              <Link to="/webinarData">
                <button className="thirdcard-btn1">View</button>
              </Link>
            </div>
            <div className="forthcard">
              <h3>Employee Feedback </h3>
              <Link to="/feedbackdata">
                <button className="fourthcard-btn1">View</button>
              </Link>
            </div>
            <div className="fifthcard">
              <h3>Application Details</h3>
              <Link to="/applicationDetails">
                <button className="fourthcard-btn1">View</button>
              </Link>
            </div>
          </div>
          <div className="secondrow">
            <div className="fstcard">
              <h3>Our Journey</h3>
              <Link to="/ourJourneyAdmin">
                <button className="firstcard-btn2">View</button>
              </Link>
            </div>
            <div className="sndcard">
              <h3>Employee Image Upload</h3>
              <Link to="/employeeimage">
                <button className="secondcard-btn2">View</button>
              </Link>
            </div>
            <div className="trdcard">
              <h3>Client Image Upload</h3>
              <Link to="/clientList">
                <button className="thirdcard-btn2">View</button>
              </Link>
            </div>
            <div className="frthcard">
              <h3>Contact Us</h3>
              <Link to="/admincontactus">
                <button className="forthcard-btn2">View</button>
              </Link>
            </div>
            <div className="ffthcard">
              <h3>About Us Counter</h3>
              <Link to="/projectDetails">
                <button className="fifthcard-btn2">View</button>
              </Link>
            </div>
          </div>
          <div className="thirdrow">
            <div className="tfirstcard">
              <h3>Solution Accelerator</h3>
              <Link to="/accelerators">
                <button className="firstcard-btn3">View</button>
              </Link>
            </div>
            <div className="tsecondcard">
              <h3>Industry Images</h3>
              <Link to="/industryimages">
                <button className="secondcard-btn3">View</button>
              </Link>
            </div>
            <div className="tthirdcard">
              <h3>Watch Now</h3>
              <Link to="/WatchNowDetails">
                <button className="thirdcard-btn3">View</button>
              </Link>
            </div>
            <div className="tforthcard">
              <h3>Our Service</h3>
              <Link to="/ourServices">
                <button className="forthcard-btn3">View</button>
              </Link>
            </div>
            <div className="tfifthcard">
              <h3>  Service Counter</h3>
              <Link to="/Servicecounter">
                <button className="fifthcard-btn3">View</button>
              </Link>
            </div>
          </div>
          <div className="forthrow">
            <div className="ffirstcard">
              <h3>Our Solution Planning</h3>
              <Link to="/ourSolution">
                <button className="firstcard-btn4">View</button>
              </Link>
            </div>
            <div className="fsecondcard">
              <h3>PlanafinConsulting</h3>
              <Link to="/PlanafinConsulting">
                <button className="secondcard-btn4">View</button>
              </Link>
            </div>
            <div className="fthirdcard">
              <h3>Technology Partners</h3>
              <Link to="/techPartners">
                <button className="thirdcard-btn4">View</button>
              </Link>
            </div>
            <div className="tforthcard">
              <h3>Anaplan Counter</h3>
              <Link to="/anaplanCounter">
                <button className="forthcard-btn3">View</button>
              </Link>
            </div>
            <div className="tfifthcard">
              <h3>Anaplan Counter</h3>
              <Link to="/upcomingdata">
                <button className="fifthcard-btn3">View</button>
              </Link>
            </div>
          </div>
        </div>
        <button className="dashbtn" onClick={handleLogout}>
          LOG OUT
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
