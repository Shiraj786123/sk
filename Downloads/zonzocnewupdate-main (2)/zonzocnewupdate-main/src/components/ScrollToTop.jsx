'use client';

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Adjusted offsets to shift the button safely above the WhatsApp text box badge
  const buttonStyle = {
    position: "fixed",
    bottom: isMobile ? "145px" : "155px", /* Safely clears the text popout module layer */
    right: isMobile ? "24px" : "34px",   /* Perfectly aligns with the WhatsApp circle away from screen edges */
    zIndex: 10000,                       /* Forces priority stacking rules above other container wrappers */
    
    /* Permanent White Background Box */
    width: isMobile ? "40px" : "46px",
    height: isMobile ? "40px" : "46px",
    borderRadius: "50%",
    background: "#ffffff", 
    border: "1px solid rgba(56, 189, 248, 0.3)",
    
    /* Original Brand Blue Arrow Color Remains Static */
    color: "#00bcff", 
    
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: 0,
    
    /* Elegant dropshadow for legibility on white site areas */
    boxShadow: isHovered 
      ? "0 10px 20px rgba(15, 23, 42, 0.15)" 
      : "0 4px 12px rgba(15, 23, 42, 0.1)", 
    
    /* ONLY ZOOM EFFECT ON HOVER (No colors fluctuate) */
    transform: isHovered ? "scale(1.12)" : "scale(1)",
    transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease",
  };

  const iconStyle = {
    fontSize: isMobile ? "1rem" : "1.15rem",
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={buttonStyle}
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faChevronUp} style={iconStyle} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;