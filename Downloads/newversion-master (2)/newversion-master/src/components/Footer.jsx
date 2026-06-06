'use client';
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faWhatsapp, 
  faLinkedinIn, 
  faFacebookF, 
  faInstagram 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faEnvelope, 
  faEarthAmericas, 
  faUsers, 
  faChartLine, 
  faClock, 
  faCalendarDays,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

import "../styles/footer.css";

const Footer = () => {

  const coreServices = [
    { label: "AI Web Application Development", path: "/ai-web-application-development" },
    { label: "AI Software Development", path: "/ai-software-development" },
    { label: "Full-Stack Web Development", path: "/full-stack-web-development" },
    { label: "AI-Powered Website Design", path: "/ai-website-design-development" },
    { label: "SEO & AI Search Optimization", path: "/seo-ai-search-optimization" },
    { label: "E-commerce Development", path: "/ecommerce-development-optimization" },
  ];

  const solutionsLinks = [
    { label: "Websites That Generate Leads", path: "/ai-web-application-development" },
    { label: "AI Chatbots & Virtual Assistants", path: "/ai-software-development" },
    { label: "Business Process Automation", path: "/ai-software-development" },
    { label: "E-commerce Growth Optimization", path: "/ecommerce-development-optimization" },
    { label: "Search Visibility & Traffic Growth", path: "/seo-services" },
  ];

  const resourceLinks = [
    { label: "Website Growth Guides", path: "/seo-services" },
    { label: "AI for Business", path: "/seo-ai-search-optimization" },
    { label: "Technical SEO Knowledgebase", path: "/seo-services" },
    { label: "Case Studies & Results", path: "/case-studies" },
    { label: "AI SEO Strategy", path: "/seo-ai-search-optimization" },
    { label: "AI Automation Services", path: "/ai-software-development" },
    { label: "Website Performance Optimization", path: "/website-maintenance-performance-security" },
  ];

  const companyLinks = [
    { label: "About ZonzocTech", path: "/about" },
    { label: "How We Work", path: "/about" },
    { label: "Careers", path: "/contact" },
    { label: "Contact Us", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms of Service", path: "/terms-conditions" },
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          
          {/* Branding Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src="/logo/logo2.png"
                alt="ZonzocTech Logo"
                className="footer-logo-img"
              />
            </div>
            
            <p className="footer-description">
              Helping businesses in the UK, USA, and worldwide build AI-powered websites, automation systems, and scalable digital growth solutions.
            </p>
            
            <div className="footer-contact-box">
              <div className="footer-contact-links">
                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/94740309534"
                  className="footer-contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact via WhatsApp"
                >
                  <span className="contact-icon-circle whatsapp-circle">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </span>
                  <span className="contact-text">WhatsApp Us</span>
                </a>

                {/* Email Link */}
                <a
                  href="mailto:info@zonzoctech.com"
                  className="footer-contact-link"
                  aria-label="Contact via Email"
                >
                  <span className="contact-icon-circle email-circle">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span className="contact-text">info@zonzoctech.com</span>
                </a>
              </div>
            </div>

            {/* Social Icons (No YouTube) */}
            <div className="footer-brand-socials">
              <a href="#" className="brand-social-link" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="brand-social-link" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="brand-social-link" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>

            {/* Highlights Checklist */}
            <div className="footer-highlights-list">
              <div className="highlight-row-item">
                <FontAwesomeIcon icon={faEarthAmericas} className="highlight-row-icon" />
                <span>Remote-First Agency</span>
              </div>
              <div className="highlight-row-item">
                <FontAwesomeIcon icon={faUsers} className="highlight-row-icon" />
                <span>UK & US Clients</span>
              </div>
              <div className="highlight-row-item">
                <FontAwesomeIcon icon={faChartLine} className="highlight-row-icon" />
                <span>SEO & AI Focused</span>
              </div>
              <div className="highlight-row-item">
                <FontAwesomeIcon icon={faClock} className="highlight-row-icon" />
                <span>Fast Response Time</span>
              </div>
            </div>
          </div>

          {/* Core Services Column */}
          <div className="footer-column">
            <h6 className="footer-column-title">Core Services</h6>
            <div className="footer-header-underline"></div>
            <ul className="footer-links">
              {coreServices.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="footer-row-link">
                    <span>{link.label}</span>
                    <FontAwesomeIcon icon={faChevronRight} className="link-row-arrow" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="footer-column">
            <h6 className="footer-column-title">Solutions by Need</h6>
            <div className="footer-header-underline"></div>
            <ul className="footer-links">
              {solutionsLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="footer-row-link">
                    <span>{link.label}</span>
                    <FontAwesomeIcon icon={faChevronRight} className="link-row-arrow" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-column">
            <h6 className="footer-column-title">Resources & Insights</h6>
            <div className="footer-header-underline"></div>
            <ul className="footer-links">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="footer-row-link">
                    <span>{link.label}</span>
                    <FontAwesomeIcon icon={faChevronRight} className="link-row-arrow" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h6 className="footer-column-title">Company</h6>
            <div className="footer-header-underline"></div>
            <ul className="footer-links">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="footer-row-link">
                    <span>{link.label}</span>
                    <FontAwesomeIcon icon={faChevronRight} className="link-row-arrow" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* MID-CTA BANNER CARD */}
        <div className="footer-cta-container">
          <div className="footer-cta-card">
            <div className="cta-left-content">
              <div className="cta-icon-box">
                <FontAwesomeIcon icon={faCalendarDays} />
              </div>
              <div className="cta-text-box">
                <h4>Ready to grow your business with AI-powered digital solutions?</h4>
                <p>Get a free consultation and let's build something incredible together.</p>
              </div>
            </div>
            <div className="cta-right-content">
              <Link href="/contact" className="cta-book-btn">
                <span>Book Free Consultation</span>
                <span className="cta-btn-arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">© 2026 ZonzocTech. All rights reserved. ✦</p>
          
          <div className="bottom-serving-clients">
            <FontAwesomeIcon icon={faEarthAmericas} className="serving-globe-icon" />
            <span>Serving clients across the UK, USA, Europe, and worldwide.</span>
          </div>

          <div className="bottom-follow-box">
            <span className="follow-us-text">Follow us:</span>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} style={{ width: "14px", height: "14px" }} />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} style={{ width: "12px", height: "12px" }} />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} style={{ width: "14px", height: "14px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;