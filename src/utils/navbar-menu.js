"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = {
    type: "spring",
    mass: 0.1,
    damping: 9,
    stiffness: 150,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const Menu = ({ setActive, children }) => {  
  return (
    <nav  onMouseLeave={() => setActive(null)}// resets the state
          className="navbar-menu">
      {children}
    </nav>
  );
};

export const MenuItem = ({ setActive, active, item, children }) => {

  return (
    <div onMouseEnter={() => setActive(item)} 
    
         className="navbar-menu-item">
      <motion.p transition={{ duration: 0.3 }}>
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
        {active === item && (
          <div className="navbar-menu-item-motion-container">
            <motion.div
              transition={transition}
              layoutId="active" // layoutId ensures smooth animation
              className="navbar-menu-item-motion-div"
            >
              <motion.div
                layout // layout ensures smooth animation
                className="navbar-menu-item-motion-div-container"
              >
                {children}
              </motion.div>
            </motion.div>
          </div>
        )}
        </motion.div>
      )}
    </div>
  );
};

export const GridItem = ({ title, description, href, src }) => {
  return (
    <Link to={href} className="navbar-grid-item">
      <img
        src={src}
        alt={title}
        className="navbar-grid-item-img"
      />
      <div>
        <h4 className="navbar-grid-item-title">
          {title}
        </h4>
        <p className="navbar-grid-item-description">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, link, icon }) => {
  return (
    <Link to={link}
          className="navbar-menu-link">
      <span className="navbar-menu-link-icon">
        {icon}
      </span>
      <div className="navbar-menu-link-title">
        {children}
      </div>
      
    </Link>
  );
};
