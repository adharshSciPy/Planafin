import React from 'react'
import "../Admin/industryimages.css"

function IndustryImages() {
    return (
        <div className="Indupload-page">
          <form className="Indupload-form">
            <h2 className="Indform-title">Upload</h2>
    
            <div className="Indform-group">
              <label htmlFor="title">Title</label>
              <input
                type="text" 
                id="title"
                name="title"
                placeholder="Enter title"
                required
              />
            </div>
    
            <div className="Indform-group">
              <label htmlFor="image">Upload Image</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                required
              />
            </div>
    
            <button type="submit" className="Indsubmit-button">
              Submit
            </button>
          </form>
        </div>
      );
}

export default IndustryImages