// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="custom-navigation-container">
      <div className="custom-h-100 custom-sidebar" id="custom-leftside-menu-container">
        {/* Sidemenu */}
        <ul className="custom-side-nav">
          {/* About */}
          <li className="custom-side-nav-item" data-tooltip="About">
            <Link to="/" className="custom-side-nav-link">
              <i className="bi bi-person-lines-fill"></i>
            </Link>
          </li>

          {/* Resume */}
          <li className="custom-side-nav-item" data-tooltip="Resume">
            <Link to="/resume" className="custom-side-nav-link">
              <i className="bi bi-file-earmark-text"></i>
            </Link>
          </li>

          {/* Portfolio */}
          <li className="custom-side-nav-item" data-tooltip="Portfolio">
            <Link to="/portfolio" className="custom-side-nav-link">
              <i className="bi bi-stack"></i>
            </Link>
          </li>

          {/* Blog */}
          <li className="custom-side-nav-item" data-tooltip="Blog">
            <Link to="/blog" className="custom-side-nav-link">
              <i className="bi bi-card-list"></i>
            </Link>
          </li>

          {/* Contact */}
          <li className="custom-side-nav-item" data-tooltip="Let's Connect">
            <Link to="/lets_connect" className="custom-side-nav-link">
              <i className="bi bi-send-fill"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
