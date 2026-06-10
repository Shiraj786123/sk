'use client';
import React, { useEffect, useRef } from "react";
import "../styles/publishSection.css";

const PublishSection = () => {
  const iconsRef = useRef([]);

  const icons = [
    { id: 1, src: "/images/wp.png", alt: "WordPress" },
    { id: 2, src: "/images/webflow.png", alt: "Webflow" },
    { id: 3, src: "/images/shopify.png", alt: "Shopify" },
    { id: 4, src: "/images/notion.png", alt: "Notion" },
    { id: 5, src: "/images/wix.png", alt: "Twitter" },
  ];

  useEffect(() => {
    // Oval radii
    const radiusX = 200; // horizontal radius
    const radiusY = 160; // vertical radius

    iconsRef.current.forEach((icon, index) => {
      const angle = (index / icons.length) * 2 * Math.PI; // spread evenly
      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;
      icon.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    });
  }, [icons.length]);

  return (
    <section className="publish-section">
      <div className="publish-container">
        {/* Left Side */}
        <div className="publish-left">
          <div className="plane-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </div>
          <h2 className="publish-title">Publish with just one click</h2>
          <p className="publish-desc">
            Publish articles directly to your favorite platforms including WordPress,
            Webflow, Wix, Shopify, API and Wix with just one click.
          </p>
          <button className="publish-btn">
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
            </svg>
            Rank on Google and ChatGPT
          </button>
        </div>

        {/* Right Side */}
        <div className="publish-right">
          <div className="publish-icons-container">
            <div className="orbit-oval"></div>

            {icons.map((icon, index) => (
              <div
                className={`icon-wrapper ${icon.alt.toLowerCase()}`}
                key={icon.id}
                ref={(el) => (iconsRef.current[index] = el)}
              >
                <div className={`icon-circle ${icon.alt.toLowerCase() === "twitter" ? "icon-twitter" : ""}`}>
                  <img src={icon.src} alt={icon.alt} />
                </div>
              </div>
            ))}

            {/* Center Publish Button */}
            <div className="publish-center">
              <span className="upload-icon">↑</span>
              <span className="publish-text">Publish Now</span>
              <div className="cursor-pointer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4l16 7-7 2-2 7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishSection;
