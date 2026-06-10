import React from "react";
import {
  Globe, Users, TrendingUp, Clock, ChevronRight, CalendarDays,
} from "lucide-react";
import "../styles/footer.css";

// Renders your logo from the public directory
const LogoIcon = () => (
  <img 
    src="/logo/footerlogo.png" 
    alt="ZonzocTech Logo" 
    style={{ 
      width: "100%", 
      height: "100%", 
      objectFit: "contain" 
    }} 
  />
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// Official vector X logo
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// CHANGED: Solid filled, crisp envelope SVG icon that cannot be broken by CSS overrides
const MailIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);
const coreServices = [
  { label: "AI Web Application Development", path: "/" },
  { label: "AI Software Development", path: "/" },
  { label: "Full-Stack Web Development", path: "/" },
  { label: "AI-Powered Website Design", path: "/" },
  { label: "SEO & AI Search Optimization", path: "/" },
  { label: "E-commerce Development", path: "/" },
];

const solutionsLinks = [
  { label: "Websites That Generate Leads", path: "/" },
  { label: "AI Chatbots & Virtual Assistants", path: "/" },
  { label: "Business Process Automation", path: "/" },
  { label: "E-commerce Growth Optimization", path: "/" },
  { label: "Search Visibility & Traffic Growth", path: "/" },
];

const resourceLinks = [
  { label: "Website Growth Guides", path: "/" },
  { label: "AI for Business", path: "/" },
  { label: "Technical SEO Knowledgebase", path: "/" },
  { label: "Case Studies & Results", path: "/" },
  { label: "AI SEO Strategy", path: "/" },
  { label: "AI Automation Services", path: "/" },
  { label: "Website Performance Optimization", path: "/" },
];

const companyLinks = [
  { label: "About ZonzocTech", path: "/" },
  { label: "How We Work", path: "/" },
  { label: "Careers", path: "/" },
  { label: "Contact Us", path: "/" },
  { label: "Privacy Policy", path: "/" },
  { label: "Terms of Service", path: "/" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">

          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-text">
                <div className="footer-logo-icon">
                  <LogoIcon />
                </div>
                <div className="footer-logo-wordmark">
                  <span className="footer-logo-name">ZonzocTech</span>
                  <span className="footer-logo-tagline">AI Web Development Agency</span>
                </div>
              </div>
            </div>

            <p className="footer-description">
              Helping businesses build AI-powered websites, automation systems, and scalable digital solutions.
            </p>

            <div className="footer-contact-links">
              <a href="https://wa.me/94740309534" className="footer-contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon-circle"><WhatsAppIcon /></span>
                <span className="contact-text">WhatsApp Us</span>
              </a>
              <a href="mailto:info@zonzoctech.com" className="footer-contact-link">
                <span className="contact-icon-circle"><MailIcon /></span>
                <span className="contact-text">info@zonzoctech.com</span>
              </a>
            </div>

            {/* Brand Socials (LinkedIn, Facebook, X) */}
            <div className="footer-brand-socials">
              <a href="#" className="brand-social-link" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="#" className="brand-social-link" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" className="brand-social-link" aria-label="X"><XIcon /></a>
            </div>

            <div className="footer-highlights-list">
              <div className="highlight-row-item">
                <Globe className="highlight-row-icon" />
                <span>Remote-First Agency</span>
              </div>
              <div className="highlight-row-item">
                <Users className="highlight-row-icon" />
                <span>UK &amp; US Clients</span>
              </div>
              <div className="highlight-row-item">
                <TrendingUp className="highlight-row-icon" />
                <span>SEO &amp; AI Focused</span>
              </div>
              <div className="highlight-row-item">
                <Clock className="highlight-row-icon" />
                <span>Fast Response Time</span>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div className="footer-column">
            <h6 className="footer-column-title">Core Services</h6>
            <div className="footer-header-underline"></div>
            <ul className="footer-links">
              {coreServices.map((link, i) => (
                <li key={i}>
                  <a href={link.path} className="footer-row-link">
                    <span>{link.label}</span>
                    <ChevronRight className="link-row-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions by Need */}
          <div className="footer-column">
            <h6 className="footer-column-title">Solutions by Need</h6>
            <div className="footer-header-underline"></div>
            <ul className="footer-links">
              {solutionsLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.path} className="footer-row-link">
                    <span>{link.label}</span>
                    <ChevronRight className="link-row-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Insights */}
          <div className="footer-column">
            <h6 className="footer-column-title">Resources &amp; Insights</h6>
            <div className="footer-header-underline"></div>
            <ul className="footer-links">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.path} className="footer-row-link">
                    <span>{link.label}</span>
                    <ChevronRight className="link-row-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h6 className="footer-column-title">Company</h6>
            <div className="footer-header-underline"></div>
            <ul className="footer-links">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.path} className="footer-row-link">
                    <span>{link.label}</span>
                    <ChevronRight className="link-row-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="footer-cta-container">
          <div className="footer-cta-card">
            <div className="cta-left-content">
              <div className="cta-icon-box">
                <CalendarDays size={22} />
              </div>
              <div className="cta-text-box">
                <h4>Ready to grow your business with AI-powered digital solutions?</h4>
                <p>Get a free consultation and let's build something incredible together.</p>
              </div>
            </div>
            <div className="cta-right-content">
              <a href="/contact" className="cta-book-btn">
                <span>Book Free Consultation</span>
                <span className="cta-btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">© 2026 ZonzocTech. All rights reserved. ✦</p>
          <div className="bottom-divider"></div>
          <div className="bottom-serving-clients">
            <Globe className="serving-globe-icon" />
            <span>Serving clients across the UK, USA, Europe, and worldwide.</span>
          </div>
          <div className="bottom-divider-right"></div>
          {/* Bottom Bar Socials (LinkedIn, Facebook, X) */}
          <div className="bottom-follow-box">
            <span className="follow-us-text">Follow us:</span>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="#" className="social-icon" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" className="social-icon" aria-label="X"><XIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;