// src/Admin/IndustryImages.jsx

import React, { useState } from 'react';
import axios from 'axios';
import "../Admin/industryimages.css";

function IndustryImages() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !image) {
      alert("Both title and image are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("industryImage", image); 

    try {
      const response = await axios.post("/industryImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Upload success:", response.data);
      alert("Uploaded Successfully!");

    
      setTitle("");
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Try again.");
    }
  };

  return (
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
          />
          {preview && <img src={preview} alt="Preview" className="Indimage-preview" />}
        </div>

        <button type="submit" className="Indsubmit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default IndustryImages;
