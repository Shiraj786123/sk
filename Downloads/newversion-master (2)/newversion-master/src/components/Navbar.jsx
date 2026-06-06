'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ExpertPopup from "./ExpertPopup";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEarthAmericas,
  faEnvelope,
  faBars,
  faXmark,
  faHome,
  faChevronDown,
  faCode,
  faChartLine,
  faRobot,
  faShieldHalved,
  faBriefcase,
  faUser,
  faNewspaper,
  faLock,
  faGlobe,
  faClock,
  faWandMagicSparkles, /* Free alternative to faSparkles */
  faChevronRight,
  faCalendarDays,
  faThLarge,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

import "../styles/navbar.css";
import "../styles/topbar.css";

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSubCategoryOpen, setMobileSubCategoryOpen] = useState(null);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Handles dynamic scroll lock via safe CSS class toggle
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('menu-open-scroll-lock');
    } else {
      document.body.classList.remove('menu-open-scroll-lock');
    }
    return () => {
      document.body.classList.remove('menu-open-scroll-lock');
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.navbar');
      if (window.scrollY > 10) {
        nav?.classList.add('scrolled');
      } else {
        nav?.classList.remove('scrolled');
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileSubCategoryOpen(null);
  }, [pathname]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileSubCategoryOpen(null);
  };

  const toggleSubCategory = (category) => {
    if (mobileSubCategoryOpen === category) {
      setMobileSubCategoryOpen(null);
    } else {
      setMobileSubCategoryOpen(category);
    }
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-inner">
          
          {/* LEFT SIDE CONTENT */}
          <div className="topbar-left">
            <span className="topbar-left-main">
              <FontAwesomeIcon
                icon={faShieldHalved}
                style={{ marginRight: "6px", color: "#38bdf8", fontSize: "12px" }}
              />
              AI Web Development • SEO • Automation Solutions
            </span>
            <span className="topbar-left-extra">
              <span style={{ margin: "0 10px", opacity: 0.5 }}>|</span>
              <FontAwesomeIcon
                icon={faStar}
                style={{ marginRight: "6px", color: "#fbbf24", fontSize: "12px" }}
              />
              150+ Completed Projects
            </span>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="topbar-right">
            <a
              href="mailto:info@zonzoctech.com"
              className="topbar-link"
              title="Email Us"
            >
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "6px" }} />
              <span className="topbar-email-label">info@zonzoctech.com</span>
            </a>
            
            <span className="topbar-right-divider" style={{ margin: "0 10px", opacity: 0.5 }}>|</span>
            
            <a
              href="https://wa.me/94740309534"
              target="_blank"
              rel="noopener noreferrer"
              className="topbar-link wa-btn"
            >
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: "6px" }} />
              <span className="topbar-phone-label">WhatsApp Us</span>
            </a>
          </div>

        </div>
      </div>

      {/* NAVBAR CONTAINER */}
      <nav className="navbar">
        <div className="navbar-inner">
          
          {/* BRAND LOGO */}
          {isHomePage ? (
            <div className="navbar-logo" style={{ cursor: 'default' }}>
              <Image
                src="/logo/logo2.png"
                alt="Zonzoctech"
                width={200}
                height={60}
                priority
              />
            </div>
          ) : (
            <Link
              href="/"
              className="navbar-logo"
              onClick={closeMobile}
            >
              <Image
                src="/logo/logo2.png"
                alt="Zonzoctech"
                width={200}
                height={60}
                priority
                style={{
                  width: "200px",
                  height: "auto",
                  display: "block"
                }}
              />
            </Link>
          )}

          {/* COMPACT MOBILE ACTIONS HEADER ROW */}
          <div className="navbar-mobile-controls">
            {!mobileOpen && (
              <button
                className="get-proposal-button mobile-nav-cta"
                onClick={() => setIsPopupOpen(true)}
              >
                Get Free Proposal
              </button>
            )}

            <button
              className="hamburger"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} />
            </button>
          </div>

          {/* 1. DESKTOP ONLY NAVIGATION */}
          <div className="nav-container desktop-nav-only">
            <ul className="nav-links-list">
              <li className="nav-link desktop-only-home-link">
                {isHomePage ? (
                  <div style={{ color: '#00448f', cursor: 'default', display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon
                      icon={faHome}
                      style={{ marginRight: "6px" }}
                    />
                    Home
                  </div>
                ) : (
                  <Link href="/" onClick={closeMobile}>
                    <FontAwesomeIcon
                      icon={faHome}
                      style={{ marginRight: "6px" }}
                    />
                    Home
                  </Link>
                )}
              </li>

              {/* SERVICES DROPDOWN */}
              <li className="nav-link dropdown-parent">
                <div className="dropdown-trigger-wrapper">
                  <span>Services</span>
                  <FontAwesomeIcon icon={faChevronDown} className="arrow" />
                </div>

                <div className="mega-menu-rect">
                  <div className="mega-col">
                    <div className="mega-col-header">
                      <div className="mega-icon-box">
                        <FontAwesomeIcon icon={faCode} />
                      </div>
                      <div>
                        <h4 className="mega-heading">Web & AI Development</h4>
                        <div className="mega-header-line"></div>
                      </div>
                    </div>
                    <div className="mega-links-list">
                      <Link href="/ai-website-design-development">AI Website Design & Development</Link>
                      <Link href="/ai-web-application-development">AI Web Application Development</Link>
                      <Link href="/full-stack-web-development">Full-Stack Web Development</Link>
                      <Link href="/ai-software-development">AI Software Development</Link>
                      <Link href="/ecommerce-development-optimization">E-commerce Development</Link>
                    </div>
                  </div>

                  <div className="mega-col">
                    <div className="mega-col-header">
                      <div className="mega-icon-box">
                        <FontAwesomeIcon icon={faChartLine} />
                      </div>
                      <div>
                        <h4 className="mega-heading">SEO & Growth</h4>
                        <div className="mega-header-line"></div>
                      </div>
                    </div>
                    <div className="mega-links-list">
                      <Link href="/seo-services">SEO Services</Link>
                      <Link href="/seo-ai-search-optimization">SEO & AI Search Optimization</Link>
                      <Link href="/seo-services">Website Speed Optimization</Link>
                      <Link href="/seo-ai-search-optimization">Technical SEO</Link>
                      <Link href="/seo-services">Local SEO</Link>
                    </div>
                  </div>

                  <div className="mega-col">
                    <div className="mega-col-header">
                      <div className="mega-icon-box">
                        <FontAwesomeIcon icon={faRobot} />
                      </div>
                      <div>
                        <h4 className="mega-heading">Automation Solutions</h4>
                        <div className="mega-header-line"></div>
                      </div>
                    </div>
                    <div className="mega-links-list">
                      <Link href="/ai-software-development">Business Process Automation</Link>
                      <Link href="/ai-web-application-development">AI Chatbots & Integrations</Link>
                      <Link href="/ai-software-development">Workflow Automation</Link>
                      <Link href="/ai-software-development">CRM Automation</Link>
                      <Link href="/ai-software-development">AI & Automation Consulting</Link>
                    </div>
                  </div>

                  <div className="mega-col">
                    <div className="mega-col-header">
                      <div className="mega-icon-box">
                        <FontAwesomeIcon icon={faShieldHalved} />
                      </div>
                      <div>
                        <h4 className="mega-heading">Maintenance & Support</h4>
                        <div className="mega-header-line"></div>
                      </div>
                    </div>
                    <div className="mega-links-list">
                      <Link href="/website-maintenance-performance-security">Website Maintenance</Link>
                      <Link href="/website-maintenance-performance-security">Performance Optimization</Link>
                      <Link href="/website-maintenance-performance-security">Security Monitoring</Link>
                      <Link href="/website-maintenance-performance-security">Website Backup</Link>
                      <Link href="/website-maintenance-performance-security">Support & Updates</Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-link">
                <Link href="/case-studies">Our Work</Link>
              </li>
              <li className="nav-link">
                <Link href="/about">About</Link>
              </li>
              <li className="nav-link">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="nav-link">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* DESKTOP EXCLUSIVE ACTION BUTTON */}
          <button
            className="get-proposal-button desktop-cta"
            onClick={() => setIsPopupOpen(true)}
          >
            Get Free Proposal
          </button>

          {/* 2. MOBILE EXCLUSIVE DRAWER PANEL LAYOUT */}
          <div className={`mobile-nav-drawer ${mobileOpen ? "active" : ""}`}>
            <div className="mobile-drawer-scroll-box">
              
              {/* HOME LINK */}
              {isHomePage ? (
                <div className="mobile-drawer-item-row is-active" style={{ cursor: 'default' }}>
                  <div className="drawer-row-icon-box">
                    <FontAwesomeIcon icon={faHome} />
                  </div>
                  <span className="drawer-row-text">Home</span>
                </div>
              ) : (
                <Link href="/" className="mobile-drawer-item-row" onClick={closeMobile}>
                  <div className="drawer-row-icon-box">
                    <FontAwesomeIcon icon={faHome} />
                  </div>
                  <span className="drawer-row-text">Home</span>
                </Link>
              )}
              
              {/* SERVICES TRIGGER LINK */}
              <div 
                className={`mobile-drawer-item-row ${mobileServicesOpen ? "is-active" : ""}`} 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <div className="drawer-row-icon-box">
                  <FontAwesomeIcon icon={faThLarge} />
                </div>
                <span className="drawer-row-text">Services</span>
                <FontAwesomeIcon 
                  icon={faChevronDown} 
                  className={`mobile-arrow-icon ${mobileServicesOpen ? "rotated" : ""}`} 
                />
              </div>

              {/* SERVICES ACCORDION BODY */}
              <div className={`mobile-accordion-body ${mobileServicesOpen ? "expanded" : ""}`}>
                
                {/* SUB-CATEGORY 1: WEB & AI DEVELOPMENT */}
                <div className="mobile-drawer-subcard-wrap">
                  <div 
                    className={`mobile-drawer-subcard ${mobileSubCategoryOpen === 'web' ? 'active' : ''}`}
                    onClick={() => toggleSubCategory('web')}
                  >
                    <div className="subcard-icon-box">
                      <FontAwesomeIcon icon={faCode} />
                    </div>
                    <div className="subcard-text-box">
                      <h6>Web & AI Development</h6>
                      <p>AI websites, web apps & full-stack solutions</p>
                    </div>
                    <FontAwesomeIcon 
                      icon={faChevronRight} 
                      className={`subcard-arrow ${mobileSubCategoryOpen === 'web' ? 'rotated' : ''}`} 
                    />
                  </div>
                  <div className={`mobile-subcard-links ${mobileSubCategoryOpen === 'web' ? 'expanded' : ''}`}>
                    <Link href="/ai-website-design-development" onClick={closeMobile}>AI Website Design & Development</Link>
                    <Link href="/ai-web-application-development" onClick={closeMobile}>AI Web Application Development</Link>
                    <Link href="/full-stack-web-development" onClick={closeMobile}>Full-Stack Web Development</Link>
                    <Link href="/ai-software-development" onClick={closeMobile}>AI Software Development</Link>
                    <Link href="/ecommerce-development-optimization" onClick={closeMobile}>E-commerce Development</Link>
                  </div>
                </div>

                {/* SUB-CATEGORY 2: SEO & GROWTH */}
                <div className="mobile-drawer-subcard-wrap">
                  <div 
                    className={`mobile-drawer-subcard ${mobileSubCategoryOpen === 'seo' ? 'active' : ''}`}
                    onClick={() => toggleSubCategory('seo')}
                  >
                    <div className="subcard-icon-box">
                      <FontAwesomeIcon icon={faChartLine} />
                    </div>
                    <div className="subcard-text-box">
                      <h6>SEO & Growth</h6>
                      <p>Rank higher, drive traffic & grow your business</p>
                    </div>
                    <FontAwesomeIcon 
                      icon={faChevronRight} 
                      className={`subcard-arrow ${mobileSubCategoryOpen === 'seo' ? 'rotated' : ''}`} 
                    />
                  </div>
                  <div className={`mobile-subcard-links ${mobileSubCategoryOpen === 'seo' ? 'expanded' : ''}`}>
                    <Link href="/seo-services" onClick={closeMobile}>SEO Services</Link>
                    <Link href="/seo-ai-search-optimization" onClick={closeMobile}>SEO & AI Search Optimization</Link>
                    <Link href="/seo-services" onClick={closeMobile}>Website Speed Optimization</Link>
                    <Link href="/seo-ai-search-optimization" onClick={closeMobile}>Technical SEO</Link>
                    <Link href="/seo-services" onClick={closeMobile}>Local SEO</Link>
                  </div>
                </div>

                {/* SUB-CATEGORY 3: MAINTENANCE & SUPPORT */}
                <div className="mobile-drawer-subcard-wrap">
                  <div 
                    className={`mobile-drawer-subcard ${mobileSubCategoryOpen === 'maintenance' ? 'active' : ''}`}
                    onClick={() => toggleSubCategory('maintenance')}
                  >
                    <div className="subcard-icon-box">
                      <FontAwesomeIcon icon={faShieldHalved} />
                    </div>
                    <div className="subcard-text-box">
                      <h6>Maintenance & Support</h6>
                      <p>Keep your website safe, fast & updated</p>
                    </div>
                    <FontAwesomeIcon 
                      icon={faChevronRight} 
                      className={`subcard-arrow ${mobileSubCategoryOpen === 'maintenance' ? 'rotated' : ''}`} 
                    />
                  </div>
                  <div className={`mobile-subcard-links ${mobileSubCategoryOpen === 'maintenance' ? 'expanded' : ''}`}>
                    <Link href="/website-maintenance-performance-security" onClick={closeMobile}>Website Maintenance</Link>
                    <Link href="/website-maintenance-performance-security" onClick={closeMobile}>Performance Optimization</Link>
                    <Link href="/website-maintenance-performance-security" onClick={closeMobile}>Security Monitoring</Link>
                    <Link href="/website-maintenance-performance-security" onClick={closeMobile}>Support & Updates</Link>
                  </div>
                </div>

                {/* SUB-CATEGORY 4: AUTOMATION SOLUTIONS */}
                <div className="mobile-drawer-subcard-wrap">
                  <div 
                    className={`mobile-drawer-subcard ${mobileSubCategoryOpen === 'automation' ? 'active' : ''}`}
                    onClick={() => toggleSubCategory('automation')}
                  >
                    <div className="subcard-icon-box">
                      <FontAwesomeIcon icon={faRobot} />
                    </div>
                    <div className="subcard-text-box">
                      <h6>Automation Solutions</h6>
                      <p>Business automation & AI-powered workflows</p>
                    </div>
                    <FontAwesomeIcon 
                      icon={faChevronRight} 
                      className={`subcard-arrow ${mobileSubCategoryOpen === 'automation' ? 'rotated' : ''}`} 
                    />
                  </div>
                  <div className={`mobile-subcard-links ${mobileSubCategoryOpen === 'automation' ? 'expanded' : ''}`}>
                    <Link href="/ai-software-development" onClick={closeMobile}>Business Process Automation</Link>
                    <Link href="/ai-web-application-development" onClick={closeMobile}>AI Chatbots & Integrations</Link>
                    <Link href="/ai-software-development" onClick={closeMobile}>Workflow Automation</Link>
                    <Link href="/ai-software-development" onClick={closeMobile}>CRM Automation</Link>
                    <Link href="/ai-software-development" onClick={closeMobile}>AI & Automation Consulting</Link>
                  </div>
                </div>

              </div>

              {/* OTHER ROW ITEMS */}
              <Link href="/case-studies" className={`mobile-drawer-item-row ${isActive('/case-studies') ? 'is-active' : ''}`} onClick={closeMobile}>
                <div className="drawer-row-icon-box">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <span className="drawer-row-text">Our Work</span>
              </Link>
              
              <Link href="/about" className={`mobile-drawer-item-row ${isActive('/about') ? 'is-active' : ''}`} onClick={closeMobile}>
                <div className="drawer-row-icon-box">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <span className="drawer-row-text">About</span>
              </Link>
              
              <Link href="/blog" className={`mobile-drawer-item-row ${isActive('/blog') ? 'is-active' : ''}`} onClick={closeMobile}>
                <div className="drawer-row-icon-box">
                  <FontAwesomeIcon icon={faNewspaper} />
                </div>
                <span className="drawer-row-text">Blog</span>
              </Link>
              
              <Link href="/contact" className={`mobile-drawer-item-row ${isActive('/contact') ? 'is-active' : ''}`} onClick={closeMobile}>
                <div className="drawer-row-icon-box">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <span className="drawer-row-text">Contact</span>
              </Link>
              
              {/* CONTACT INFO CARD */}
              <div className="mobile-drawer-info-card">
                <a href="mailto:info@zonzoctech.com" className="info-card-row">
                  <FontAwesomeIcon icon={faEnvelope} className="info-card-icon" />
                  <span>info@zonzoctech.com</span>
                </a>
                <a href="https://wa.me/94740309534" target="_blank" rel="noopener noreferrer" className="info-card-row">
                  <FontAwesomeIcon icon={faWhatsapp} className="info-card-icon" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* HIGHLIGHTS CARD */}
              <div className="mobile-drawer-highlights-card">
                <div className="highlight-item">
                  <div className="highlight-icon-box">
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                  </div>
                  <div className="highlight-text-box">
                    <h6>AI-Powered Solutions</h6>
                    <p>Smart. Scalable. Strategic.</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon-box">
                    <FontAwesomeIcon icon={faGlobe} />
                  </div>
                  <div className="highlight-text-box">
                    <h6>UK & US Clients</h6>
                    <p>Serving businesses worldwide.</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon-box">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div className="highlight-text-box">
                    <h6>Fast Response</h6>
                    <p>We usually reply in 1–3 hours.</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon-box">
                    <FontAwesomeIcon icon={faShieldHalved} />
                  </div>
                  <div className="highlight-text-box">
                    <h6>Satisfaction Focused</h6>
                    <p>Quality work. Long-term results.</p>
                  </div>
                </div>
              </div>

              {/* CALENDAR CTA FOOTER BUTTON */}
              <div className="mobile-drawer-cta-wrapper">
                <button 
                  className="drawer-cta-btn"
                  onClick={() => { closeMobile(); setIsPopupOpen(true); }}
                >
                  <FontAwesomeIcon icon={faCalendarDays} className="drawer-cta-icon-left" />
                  <span>Get Free Consultation</span>
                  <FontAwesomeIcon icon={faChevronRight} className="drawer-cta-icon-right" />
                </button>
                <div className="drawer-secure-text">
                  <FontAwesomeIcon icon={faLock} />
                  <span>Your information is 100% secure.</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </nav>

      <ExpertPopup
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
};

export default Navbar;