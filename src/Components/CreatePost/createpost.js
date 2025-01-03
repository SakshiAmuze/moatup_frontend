import React, { useState } from "react";
import "./createpost.css";
import url from '../../env';
const CreatePost = () => {
  const [content, setContent] = useState(""); // Post content (message)
  const [media, setMedia] = useState([]); // Array of selected media files (images, videos, documents)

  // Handle content change (text message)
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setMedia(e.target.files); // Store selected files in state
  };

  // Submit the post
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", content);

    // Append each file to the FormData object
    for (let i = 0; i < media.length; i++) {
      formData.append("media", media[i]);
    }

    try {
      const response = await fetch(`${url.apipath}createpost/post`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData, // Use FormData as the request body
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Post created successfully", data);
        setContent(""); // Clear the content input
        setMedia([]); // Clear the media files
      } else {
        const errorData = await response.json();
        console.error("Error creating post", errorData);
      }
    } catch (error) {
      console.error("Error creating post", error);
    }
  };
  return (
    <div className="create-post-container">
      <div className="create-post-header">
        <h3>Create Post</h3>
        <div className="audience-selector">
          <i className="fa-solid fa-earth-americas"></i>
          <span>Anyone</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>

      <textarea
        className="post-input"
        placeholder="What do you talk about?"
        value={content}
        onChange={handleContentChange}
      ></textarea>

      <div className="post-actions">
        <div className="action-item">
          <i className="fa-solid fa-image"></i>
          <span>Photos</span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="image-upload"
          />
        </div>
        <div className="action-item">
          <i className="fa-solid fa-video"></i>
          <span>Videos</span>
          <input
            type="file"
            accept="video/*"
            multiple
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="video-upload"
          />
        </div>
        <div className="action-item">
          <i className="fa-solid fa-file"></i>
          <span>Documents</span>
          <input
            type="file"
            accept=".pdf, .doc, .docx, .ppt, .txt"
            multiple
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="document-upload"
          />
        </div>
        <div className="action-item">
          <i className="fa-solid fa-calendar"></i>
          <span>Event</span>
        </div>
        <button className="post-button">Post</button>
      </div>
    </div>
  );
};

export default CreatePost;



