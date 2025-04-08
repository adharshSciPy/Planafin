import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <div className="dashboard-container">
        <nav className="dashboard-navbar">PLANAFIN DASHBOARD SECTION</nav>

        <div className="dashboard-cards-container">
          <div className="firstrow">
            <div className="firstcard">
              <h3>Job Application</h3>
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
              <h3>Feedback application</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
