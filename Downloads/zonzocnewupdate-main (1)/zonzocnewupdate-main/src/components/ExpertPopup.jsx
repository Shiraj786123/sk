import React, { useEffect, useState, useRef } from "react";
import {
  User, Building2, Phone, Mail, MessageSquare,
  Bot, TrendingUp, Globe, Clock, Send, ChevronDown,
} from "lucide-react";
import "../styles/ExpertPopup.css";

const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.168c.969 0 1.371 1.24.588 1.81l-3.373 2.451a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.952 2.701c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.058 9.394c-.783-.57-.38-1.81.588-1.81h4.168a1 1 0 00.95-.69L9.049 2.927z"/>
  </svg>
);

const ExpertPopup = ({ open, onClose, preSelectedService }) => {
  const [budget, setBudget] = useState(500);
  const [selectedService, setSelectedService] = useState(preSelectedService ?? "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "", company: "", phone: "", email: "", project: "",
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
    "Other",
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectOption = (service) => {
    setSelectedService(service);
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData, message: formData.project, service: selectedService, budget,
        }),
      });
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", company: "", phone: "", email: "", project: "" });
        setSelectedService("");
        setBudget(500);
        setTimeout(() => { onClose(); setSubmitStatus(""); }, 2500);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  if (!open) return null;

  const percentage = ((budget - 500) / (65000 - 500)) * 100;
  const sliderBg = `linear-gradient(to right, #00448f 0%, #00448f ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`;

  return (
    <div
      className="popup-overlay"
      onClick={onClose}
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>×</button>

        {/* LEFT PANEL */}
        <div className="popup-left">
          <div className="popup-left-top">
            <h3>Speak to Our Experts</h3>
            <p className="popup-left-subtext">Let's create your vision together.</p>

            <div className="popup-review">
              <span className="quote-mark">
  <svg width="28" height="21" viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.2 0C5 3 1.1 8.2 0.4 13.9C0.1 16.3 0 18.2 0 19.5C0 22.7 2.1 24.8 5.4 24.8C9 24.8 11.5 22.3 11.5 18.9C11.5 15.5 8.9 13.2 5.6 13.2C5 13.2 4.4 13.3 3.9 13.5C4.7 9.6 7.6 6.1 11.9 3.9L11.2 0ZM32.7 0C26.5 3 22.6 8.2 21.9 13.9C21.6 16.3 21.5 18.2 21.5 19.5C21.5 22.7 23.6 24.8 26.9 24.8C30.5 24.8 33 22.3 33 18.9C33 15.5 30.4 13.2 27.1 13.2C26.5 13.2 25.9 13.3 25.4 13.5C26.2 9.6 29.1 6.1 33.4 3.9L32.7 0Z" fill="currentColor"/>
  </svg>
</span>
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
              <div className="google-rating">
                <div className="stars">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
                <span className="rating-text">5.0 on Google</span>
                <svg className="google-g" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
              </div>
            </div>

            <div className="popup-checklist">
              <div className="checklist-item">
                <div className="icon-wrapper"><Bot size={22} /></div>
                <div className="checklist-text">
                  <h5>AI &amp; Automation Solutions</h5>
                  <p>Smart solutions to automate and scale your business.</p>
                </div>
              </div>
              <div className="checklist-item">
                <div className="icon-wrapper"><TrendingUp size={22} /></div>
                <div className="checklist-text">
                  <h5>SEO &amp; Growth Focused</h5>
                  <p>Rank higher, get more traffic and increase conversions.</p>
                </div>
              </div>
              <div className="checklist-item">
                <div className="icon-wrapper"><Globe size={22} /></div>
                <div className="checklist-text">
                  <h5>UK &amp; US Clients</h5>
                  <p>Trusted by businesses across the UK, USA and worldwide.</p>
                </div>
              </div>
              <div className="checklist-item">
                <div className="icon-wrapper"><Clock size={22} /></div>
                <div className="checklist-text">
                  <h5>Fast Turnaround</h5>
                  <p>We deliver quality work on time, every time.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="popup-contact">
            <span>
              <Mail size={18} color="#00448f" />
              info@zonzoctech.com
            </span>
            <span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.21 1.48 4.815 1.481 5.426 0 9.843-4.414 9.846-9.843.001-2.63-1.012-5.101-2.855-6.946C16.611 1.998 14.135 1.01 11.51 1.01c-5.43 0-9.848 4.416-9.851 9.847-.001 1.73.475 3.42 1.378 4.895l-.994 3.63 3.731-.978z"/>
              </svg>
              +94 74 030 9534
            </span>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="popup-right">
          <h2>Get a Free Project Consultation</h2>
          <p className="popup-subtext">
            Tell us about your project and we'll get back to you within
            <span className="highlight-text">1–3 business hours.</span>
          </p>

          {submitStatus === "success" && (
            <div className="alert alert-success">✓ Message sent! We'll contact you soon.</div>
          )}
          {submitStatus === "error" && (
            <div className="alert alert-error">✗ Failed to send. Please try again.</div>
          )}

          <form className="popup-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="popup-input-wrapper">
                <User className="input-icon" size={18} />
                <input type="text" name="name" placeholder="Your Name*"
                  value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="popup-input-wrapper">
                <Building2 className="input-icon" size={18} />
                <input type="text" name="company" placeholder="Company / Organization"
                  value={formData.company} onChange={handleInputChange} />
              </div>
              <div className="popup-input-wrapper">
                <Phone className="input-icon" size={18} />
                <input type="tel" name="phone" placeholder="Phone Number*"
                  value={formData.phone} onChange={handleInputChange} required />
              </div>
              <div className="popup-input-wrapper">
                <Mail className="input-icon" size={18} />
                <input type="email" name="email" placeholder="Email*"
                  value={formData.email} onChange={handleInputChange} required />
              </div>
            </div>

            <label className="select-label">Select a Service</label>
            <div className="custom-select-container" ref={dropdownRef}>
              {/* REMOVED: <HelpCircle className="input-icon" /> is completely gone */}
              <div
                className={`custom-select-trigger ${isDropdownOpen ? "open" : ""} ${selectedService ? "has-selection" : ""}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="selected-value">{selectedService || "Select a Service"}</span>
                <ChevronDown size={18} className="arrow-down" />
              </div>
              {isDropdownOpen && (
                <ul className="custom-select-options">
                  <li className="placeholder-option" onClick={() => selectOption("")}>Select a Service</li>
                  {services.map((s, i) => (
                    <li key={i} className={selectedService === s ? "selected" : ""} onClick={() => selectOption(s)}>
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="budget-row">
              <span className="budget-label">Estimated Budget (USD)</span>
              <span className="budget-value">${budget.toLocaleString()}{budget >= 65000 ? "+" : ""}</span>
            </div>
            <input
              type="range" min="500" max="65000" step="500" value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              style={{ background: sliderBg }}
            />

            <div className="popup-input-wrapper textarea-wrapper">
              <MessageSquare className="input-icon" size={18} />
              <textarea name="project" placeholder="Tell us about your project"
                value={formData.project} onChange={handleInputChange} required />
            </div>

            <div className="popup-actions">
              <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                <Send size={16} />
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