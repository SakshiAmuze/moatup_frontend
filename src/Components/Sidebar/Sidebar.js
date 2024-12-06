import React from "react";
import './Sidebar.css';
import "remixicon/fonts/remixicon.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="https://via.placeholder.com/100" // Replace with your image URL
          alt="Profile"
          className="profile-photo"
        />
        <div className="profile-details">
          <h2 className="profile-title">John Doe</h2>
          <p className="profile-description">Web Developer</p>
          <p className="profile-followers">
          <i className="ri-user-follow-line"></i> 1,234
          </p>       
         </div>
         </div>
      {/* Navigation Section */}
      <hr classname= "profilehr"/>
      <div className="navigation">
         
        <ul>
          <li>
            <i className="ri-mail-add-line"></i> Create Email
          </li>
          <li>
            <i className="ri-time-line"></i> Activity Log
          </li>
          <li>
            <i className="ri-calendar-check-line"></i> Scheduled
          </li>
          <li>
            <i className="ri-mail-line"></i> Inbox
          </li>
          <li>
            <i className="ri-database-2-line"></i> Infobase
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;