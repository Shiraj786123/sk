'use client';
import React, { useState } from "react";
import "../styles/whatsapp.css";

const WhatsappFloat = () => {

  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="whatsapp-wrapper">

      {/* MESSAGE */}
      {showMessage && (
        <div className="whatsapp-message-box">

          <div className="whatsapp-message">
            Chat on WhatsApp
          </div>

          <button
            className="whatsapp-close"
            onClick={() => setShowMessage(false)}
          >
            ×
          </button>

        </div>
      )}

      {/* ICON */}
      <a
        href="https://wa.me/94740309534"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        onMouseEnter={() => setShowMessage(true)}
      >
        <img src="/images/whatsapp-circle.png" alt="WhatsApp" className="whatsapp-icon" />
      </a>

    </div>
  );
};

export default WhatsappFloat;