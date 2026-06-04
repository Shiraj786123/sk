'use client';
import React from "react";
import Link from "next/link";
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
    { label: "Answer Engine Optimization", path: "/seo-ai-search-optimization" },
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
                src="/zonzotech-favicon.png"
                alt="ZonzocTech Logo"
                className="footer-logo-img"
              />
            </div>
            
            <p className="footer-tagline">AI WEB DEVELOPMENT AGENCY</p>
            
            <div className="footer-contact-box">
              <h5 className="contact-heading">
                "Ready to speak with a marketing expert? Contact us via email or WhatsApp today."
              </h5>

              {/* Vertical Contact Links Container */}
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
                    <svg className="wa-svg-icon" viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.475 1.332 4.991l-1.356 4.954 5.071-1.33c1.46.797 3.102 1.218 4.78 1.218h.004c5.502 0 9.983-4.482 9.983-9.988 0-2.668-1.039-5.176-2.928-7.065C17.18 3.039 14.68 2 12.012 2zm6.056 14.502c-.266.748-1.503 1.371-2.078 1.402-.519.027-1.196.064-3.411-.853-2.836-1.173-4.634-4.062-4.776-4.25-.138-.184-1.127-1.498-1.127-2.859 0-1.361.713-2.029.967-2.299.254-.27.553-.338.739-.338h.531c.17 0 .399-.064.623.473.23.553.784 1.91.853 2.051.069.141.116.305.021.495-.094.19-.142.308-.28.469-.138.162-.292.36-.417.483-.138.138-.283.289-.122.564.161.272.715 1.177 1.531 1.905.111.099.21.191.298.271.744.664 1.348.885 1.631.989.28.104.444.025.553-.099.111-.127.473-.553.6-.744.127-.19.254-.159.427-.095.173.064 1.096.516 1.285.61.189.094.316.142.363.223.047.081.047.473-.219 1.221z"/>
                    </svg>
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
                    <svg className="mail-svg-icon" viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a1.5 1.5 0 0 1-1.544 0L1.5 8.67z"/>
                      <path fill="currentColor" d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908z"/>
                    </svg>
                  </span>
                  <span className="contact-text">info@zonzoctech.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columns */}
          <div className="footer-column">
            <h6 className="footer-column-title">Core Services</h6>
            <ul className="footer-links">
              {coreServices.map((link, index) => (
                <li key={index}><Link href={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h6 className="footer-column-title">Solutions by Need</h6>
            <ul className="footer-links">
              {solutionsLinks.map((link, index) => (
                <li key={index}><Link href={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h6 className="footer-column-title">Resources & Insights</h6>
            <ul className="footer-links">
              {resourceLinks.map((link, index) => (
                <li key={index}><Link href={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h6 className="footer-column-title">Company</h6>
            <ul className="footer-links">
              {companyLinks.map((link, index) => (
                <li key={index}><Link href={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">© 2026 ZonzocTech. All rights reserved. ✦</p>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.981 0 1.778-.773 1.778-1.729V1.729C24 .774 23.206 0 22.225 0z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;