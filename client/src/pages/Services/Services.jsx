import React from "react";
import "./services.css";
import padam from "../../Assets/AdobeStock_369214822-Cropped-1024x451.jpg";
function Services() {
  return (
    <div>
      <div className="service-container">
        <h2 className="service-container2">
          <span style={{ color: "#f1ce3b" }}>
            Leading your enterprise planning{" "}
          </span>
          & performance <br />
          <span style={{ color: "#2d9bff" }}> management </span>
          journey
        </h2>
      </div>
      <div className="service-content1">
        More than 100+ industry leading EPM business planning deployment
        experience
      </div>
      <div className="service-image">
        <img src={padam} alt="t" className="image-tag" />
      </div>
      <div className="increment-content">
        <div className="increment-section">
          <div class="js-contents">
            <span class="num" data-val="11">
              110
            </span>
            <span class="span-contents">+</span>
            <p>Projects</p>
          </div>
          <div class="js-contents">
            <span class="num" data-val="180">
              65
            </span>
            <span class="span-contents">+</span>
            <p>Customers</p>
          </div>
          <div class="js-contents">
            <span class="num" data-val="3">
              100
            </span>
            <span class="span-contents">+</span>
            <p>Use Cases</p>
          </div>
          <div class="js-contents">
            <span class="num" data-val="100">
              94
            </span>
            <span class="span-contents">%</span>
            <p>CSAT Score</p>
          </div>
        </div>
      </div>

     <div className="consulting-section">
        <div className="consulting-left-section">

        </div>
        <div className="consulting-right-section">
            
        </div>
     </div>
    </div>
  );
}

export default Services;
