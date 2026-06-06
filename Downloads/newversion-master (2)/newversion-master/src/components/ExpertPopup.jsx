'use client';
import React, { useEffect, useState, useRef } from "react";
import { 
  User, 
  Building2, 
  Phone, 
  Mail, 
  MessageSquare, 
  HelpCircle,
  Bot,
  TrendingUp,
  Globe,
  Clock,
  Send,
  ChevronDown
} from "lucide-react";
import "../styles/ExpertPopup.css";

const ExpertPopup = ({ open, onClose, preSelectedService }) => {
  const [budget, setBudget] = useState(500); // Maintained starting budget at $500
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    project: ""
  });

  const services = [
    "AI Automation Solutions",
    "AI Web Application Development",
    "Website Design & Development",
    "SEO & Google Ranking",
    "Ecommerce Development",
    "Website Maintenance",
    "UI/UX Design",
    "Custom Web Applications",
    "Business Automation",
    "Free Website Growth Consultation",
    "I Need Help Choosing",
    "Other"
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      if (preSelectedService) {
        setSelectedService(preSelectedService);
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open, preSelectedService]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const selectOption = (service) => {
    setSelectedService(service);
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      ...formData,
      message: formData.project,   
      service: selectedService,
      budget: budget
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setSubmitStatus("success");
      
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          project: ""
        });
        setSelectedService("");
        setBudget(500); // Maintained reset budget at $500
      
        setTimeout(() => {
          onClose();
          setSubmitStatus("");
        }, 2500);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  if (!open) return null;

  const percentage = ((budget - 500) / (65000 - 500)) * 100;
  const sliderBackground = `linear-gradient(to right, #00448f 0%, #00448f ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`;

  // Standard inline styles to guarantee visual visibility
  const inputStyle = {
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    backgroundColor: "#ffffff"
  };

  return (
    <div 
      className="popup-overlay" 
      onClick={onClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        boxSizing: "border-box"
      }}
    >
      {/* High-priority injected style sheet to force scrolling, visibility, and hover colors */}
      <style>{`
        /* Custom Dropdown Styling */
        .custom-select-options {
          display: block !important;
          max-height: 220px !important;    /* Forces height boundaries */
          height: auto !important;
          overflow-y: auto !important;     /* Forces vertical scrolling */
          background-color: #ffffff !important;
          border: 1px solid #cbd5e1 !important;
          border-radius: 8px !important;
          position: absolute !important;
          z-index: 99999 !important;       /* Prevents overlapping/clipping */
          width: 100% !important;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.05) !important;
          padding: 0 !important;
          margin: 4px 0 0 0 !important;
          list-style: none !important;
        }
        .custom-select-options li {
          padding: 10px 16px !important;
          cursor: pointer !important;
          background-color: #ffffff !important;
          color: #334155 !important;
          transition: background-color 0.15s ease, color 0.15s ease !important;
        }
        .custom-select-options li:hover {
          background-color: #00448f !important; /* Matches the Get Free Consultation button color */
          color: #ffffff !important;            /* Pure white text for high contrast readability */
        }
        .custom-select-options .placeholder-option {
          color: #94a3b8 !important;
          font-weight: 500 !important;
        }
        .custom-select-options .placeholder-option:hover {
          color: #ffffff !important;            /* Keeps placeholder readable on hover */
        }

        /* Mobile Layout & Visibility Rules */
        @media (max-width: 768px) {
          .popup-container {
            flex-direction: column !important; /* Stacks panels vertically */
            overflow-y: auto !important;       /* Enables modal scrolling on mobile */
            overflow-x: hidden !important;
            height: auto !important;
            max-height: 92vh !important;
          }
          .popup-left, 
          .popup-right {
            width: 100% !important;
            display: block !important;
            box-sizing: border-box !important;
          }
          .popup-left-top {
            display: block !important;
            visibility: visible !important;
          }
          .popup-left h3,
          .popup-left-subtext {
            display: block !important;         /* Forces the heading to remain visible */
            visibility: visible !important;
          }
        }
      `}</style>

      <div 
        className="popup-container" 
        onClick={(e) => e.stopPropagation()}
        style={{
          borderRadius: "24px",
          overflow: "hidden",
          maxHeight: "92vh",
          display: "flex"
        }}
      >
        <button className="popup-close" onClick={onClose}>×</button>

        {/* LEFT PANEL */}
        <div className="popup-left">
          <div className="popup-left-top">
            <h3>Speak to Our Experts</h3>
            <p className="popup-left-subtext">Let's create your vision together.</p>

            {/* Premium Testimonial Card */}
            <div className="popup-review" style={{ borderRadius: "12px", border: "1px solid #cbd5e1" }}>
              <span className="quote-mark">“</span>
              <p className="testimonial-text">
                ZonzocTech completely transformed our online presence. Our new website loads 
                faster, ranks better on Google, and generates significantly more leads.
              </p>
              
              <div className="testimonial-author">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="James Turner" 
                  className="author-avatar" 
                />
                <div className="author-meta">
                  <h4>James Turner</h4>
                  <p>Marketing Director, BrightPath UK</p>
                </div>
              </div>

              {/* Star Ratings */}
              <div className="google-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-text">5.0 on Google</span>
                <svg className="google-g" viewBox="0 0 24 24" width="16" height="16">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
              </div>
            </div>

            {/* Brand Checklist */}
            <div className="popup-checklist">
              <div className="checklist-item">
                <div className="icon-wrapper" style={{ borderRadius: "8px" }}><Bot size={18} /></div>
                <div className="checklist-text">
                  <h5>AI & Automation Solutions</h5>
                  <p>Smart solutions to automate and scale your business.</p>
                </div>
              </div>
              <div className="checklist-item">
                <div className="icon-wrapper" style={{ borderRadius: "8px" }}><TrendingUp size={18} /></div>
                <div className="checklist-text">
                  <h5>SEO & Growth Focused</h5>
                  <p>Rank higher, get more traffic and increase conversions.</p>
                </div>
              </div>
              <div className="checklist-item">
                <div className="icon-wrapper" style={{ borderRadius: "8px" }}><Globe size={18} /></div>
                <div className="checklist-text">
                  <h5>UK & US Clients</h5>
                  <p>Trusted by businesses across the UK, USA and worldwide.</p>
                </div>
              </div>
              <div className="checklist-item">
                <div className="icon-wrapper" style={{ borderRadius: "8px" }}><Clock size={18} /></div>
                <div className="checklist-text">
                  <h5>Fast Turnaround</h5>
                  <p>We deliver quality work on time, every time.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="popup-contact">
            <span>
              <Mail size={16} style={{ marginRight: '12px', color: '#00448f' }} />
              info@zonzoctech.com
            </span>
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" style={{ marginRight: '12px' }}>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.21 1.48 4.815 1.481 5.426 0 9.843-4.414 9.846-9.843.001-2.63-1.012-5.101-2.855-6.946C16.611 1.998 14.135 1.01 11.51 1.01c-5.43 0-9.848 4.416-9.851 9.847-.001 1.73.475 3.42 1.378 4.895l-.994 3.63 3.731-.978c1.455.85 3.014 1.29 4.603 1.29zm9.522-6.83c-.263-.131-1.554-.767-1.795-.853-.24-.087-.416-.13-.591.132-.175.263-.679.853-.831 1.029-.153.175-.306.197-.569.066-.263-.131-1.112-.41-2.119-1.31-.783-.698-1.31-1.562-1.464-1.825-.153-.263-.016-.405.115-.536.118-.118.263-.306.394-.46.131-.153.175-.263.263-.438.088-.175.044-.328-.022-.46-.066-.131-.591-1.424-.81-1.95-.213-.514-.429-.444-.591-.452-.153-.007-.328-.008-.503-.008-.175 0-.46.066-.7.328-.24.263-.92.898-.92 2.193s.941 2.544 1.072 2.72c.131.175 1.851 2.827 4.485 3.968.627.272 1.115.434 1.496.555.63.201 1.203.172 1.657.104.506-.076 1.554-.634 1.774-1.246.22-.612.22-1.138.153-1.246-.066-.109-.24-.153-.503-.284z"/>
              </svg>
              +94 74 030 9534
            </span>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="popup-right">
          <h2>Get a Free Project Consultation</h2>
          <p className="popup-subtext">
            Tell us about your project and we'll get back to you within{" "}
            <span className="highlight-text">1–3 business hours.</span>
          </p>

          {submitStatus === "success" && (
            <div className="alert alert-success">
              ✓ Message sent successfully! We'll contact you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="alert alert-error">
              ✗ Failed to send message. Please try again.
            </div>
          )}

          <form className="popup-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="popup-input-wrapper">
                <User className="input-icon" size={18} />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>

              <div className="popup-input-wrapper">
                <Building2 className="input-icon" size={18} />
                <input
                  type="text"
                  name="company"
                  placeholder="Company / Organization"
                  value={formData.company}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>

              <div className="popup-input-wrapper">
                <Phone className="input-icon" size={18} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>

              <div className="popup-input-wrapper">
                <Mail className="input-icon" size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Custom Select Dropdown that ALWAYS opens downwards */}
            <label className="select-label">Select a Service*</label>
            <div className="custom-select-container" ref={dropdownRef}>
              <div 
                className={`custom-select-trigger ${isDropdownOpen ? "open" : ""}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={inputStyle}
              >
                <HelpCircle className="input-icon" size={18} />
                <span className="selected-value">
                  {selectedService || "Select a Service"}
                </span>
                <ChevronDown size={16} className="arrow-down" />
              </div>
              
              {isDropdownOpen && (
                <ul className="custom-select-options">
                  <li className="placeholder-option" onClick={() => selectOption("")}>
                    Select a Service
                  </li>
                  {services.map((service, index) => (
                    <li key={index} onClick={() => selectOption(service)}>
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Budget Display Row */}
            <div className="budget-row">
              <span className="budget-label">Estimated Budget (USD)</span>
              <span className="budget-value">${budget.toLocaleString()}{budget >= 65000 ? "+" : ""}</span>
            </div>

            {/* Slider */}
            <input
              type="range"
              min="500"
              max="65000"
              step="500"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              style={{ background: sliderBackground }}
            />

            {/* Textarea */}
            <div className="popup-input-wrapper textarea-wrapper">
              <MessageSquare className="input-icon" size={18} />
              <textarea
                name="project"
                placeholder="Tell us about your project"
                value={formData.project}
                onChange={handleInputChange}
                required
                style={{
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  backgroundColor: "#ffffff",
                  height: "150px" /* Keeps the tall vertical size */
                }}
              />
            </div>

            <div className="popup-actions" style={{ marginTop: "25px" }}>
              <button 
                type="button" 
                className="cancel-btn" 
                onClick={onClose}
                style={{
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  backgroundColor: "#ffffff",
                  color: "#475569",
                  padding: "10px 24px",
                  fontWeight: "500",
                  cursor: "pointer"
                }}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={isSubmitting}
                style={{
                  borderRadius: "8px"
                }}
              >
                <Send size={15} className="btn-icon" />
                {isSubmitting ? "Sending..." : "Get Free Consultation"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpertPopup;