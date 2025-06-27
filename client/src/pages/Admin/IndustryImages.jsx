// src/Admin/IndustryImages.jsx

import React, { useState, useRef } from "react";
import axios from "axios";
import "../Admin/industryimages.css";
import baseUrl from "../../baseUrl";
import { useNavigate } from "react-router-dom";

function IndustryImages() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  // const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    // if (file) {
    //   setPreview(URL.createObjectURL(file));
    // }
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !image) {
      alert("Both title and image are required");
      return;
    }

    const formData = new FormData();
    formData.append("heading", title);
    formData.append("industryImage", image);

    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/user/industryImage`,
        formData
      );

      // console.log("Upload success:", response);
      alert("Uploaded Successfully!");

      setTitle("");
      setImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      // setPreview(null);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Try again.");
    }
  };
  const handleNextpage = () => {
    navigate("/industryImageList");
  };
  return (
    <div className="mainContainerIndustry">
      <h1>Solution Icons </h1>
      <div className="buttonDivInndustry">
        <button className="buttonDivInndustryButton" onClick={handleNextpage}>
          viewAll
        </button>
      </div>
      <div className="Indupload-page">
        <form onSubmit={handleSubmit} className="Indupload-form">
          <h2 className="Indform-title">Upload Industry</h2>

          <div className="Indform-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              required
            />
          </div>

          <div className="Indform-group">
            <label>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
              ref={fileInputRef}
            />
            {/* {preview && <img src={preview} alt="Preview" className="Indimage-preview" />} */}
          </div>

          <button type="submit" className="Indsubmit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default IndustryImages;
