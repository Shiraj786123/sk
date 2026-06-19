'use client';
import React, { useState } from "react";
import { useWhatsAppUrl } from "../hooks/useWhatsAppUrl";
import "../styles/whatsapp.css";

const WhatsappFloat = () => {

  const [showMessage, setShowMessage] = useState(false);
  const whatsappUrl = useWhatsAppUrl();

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
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        onMouseEnter={() => setShowMessage(true)}
      >
        <img src="/images/whatsapp-circle.png" alt="Chat with ZonzocTech on WhatsApp" className="whatsapp-icon" />
      </a>

    </div>
  );
};

export default WhatsappFloat;