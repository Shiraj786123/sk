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
  faChevronDown
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

  const pathname = usePathname();
  const isHomePage = pathname === "/";

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
  }, [pathname]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span>
              <FontAwesomeIcon
                icon={faEarthAmericas}
                fixedWidth
                style={{ marginRight: "6px" }}
              />
              Serving Businesses in
              <span className="sky-blue"> UK & USA </span>
              | 150+ Projects Delivered
            </span>
          </div>

          <div className="topbar-right">
            <a
              href="mailto:info@zonzoctech.com"
              className="topbar-link"
              title="Email Us"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>

            <a
              href="https://wa.me/94740309534"
              target="_blank"
              rel="noopener noreferrer"
              className="topbar-link wa-btn"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="wa-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR CONTAINER */}
      <nav className="navbar">
        <div className="navbar-inner">
          
          {/* BRAND LOGO: Only links if NOT on homepage */}
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
            {/* REMOVED HOME BUTTON FROM HERE TO CLEAN UP THE ROW VIEW */}

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
                    <h4 className="mega-heading">Web & AI Development</h4>
                    <Link href="/ai-website-design-development">AI Website Design & Development</Link>
                    <Link href="/ai-web-application-development">AI Web Application Development</Link>
                    <Link href="/full-stack-web-development">Full-Stack Web Development</Link>
                    <Link href="/ai-software-development">AI Software Development</Link>
                    <Link href="/ecommerce-development-optimization">E-commerce Development</Link>
                  </div>

                  <div className="mega-col">
                    <h4 className="mega-heading">SEO & Growth</h4>
                    <Link href="/seo-services">SEO Services</Link>
                    <Link href="/seo-ai-search-optimization">SEO & AI Search Optimization</Link>
                    <Link href="/seo-services">Website Speed Optimization</Link>
                    <Link href="/seo-ai-search-optimization">Technical SEO</Link>
                  </div>

                  <div className="mega-col">
                    <h4 className="mega-heading">Support & Maintenance</h4>
                    <Link href="/website-maintenance-performance-security">Website Maintenance</Link>
                    <Link href="/website-maintenance-performance-security">Performance Optimization</Link>
                    <Link href="/website-maintenance-performance-security">Security Monitoring</Link>
                    <Link href="/website-maintenance-performance-security">Ongoing Support</Link>
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
              
              {/* HOME LINK ADDED INSIDE THE MOBILE DRAWER MENU */}
              {isHomePage ? (
                <div className="mobile-drawer-item-row link-redirect" style={{ cursor: 'default', opacity: 0.7 }}>
                  <FontAwesomeIcon icon={faHome} style={{ marginRight: "10px" }} />
                  Home
                </div>
              ) : (
                <Link href="/" className="mobile-drawer-item-row link-redirect" onClick={closeMobile}>
                  <FontAwesomeIcon icon={faHome} style={{ marginRight: "10px" }} />
                  Home
                </Link>
              )}
              
              <div 
                className="mobile-drawer-item-row" 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Services</span>
                <FontAwesomeIcon 
                  icon={faChevronDown} 
                  className={`mobile-arrow-icon ${mobileServicesOpen ? "rotated" : ""}`} 
                />
              </div>

              {/* ACCORDION CONTAINER DROPS DOWN NATURAL FLOW */}
              <div className={`mobile-accordion-body ${mobileServicesOpen ? "expanded" : ""}`}>
                <div className="mobile-accordion-section">
                  <h5>Web & AI Development</h5>
                  <Link href="/ai-website-design-development" onClick={closeMobile}>AI Website Design & Development</Link>
                  <Link href="/ai-web-application-development" onClick={closeMobile}>AI Web Application Development</Link>
                  <Link href="/full-stack-web-development" onClick={closeMobile}>Full-Stack Web Development</Link>
                  <Link href="/ai-software-development" onClick={closeMobile}>AI Software Development</Link>
                  <Link href="/ecommerce-development-optimization" onClick={closeMobile}>E-commerce Development</Link>
                </div>

                <div className="mobile-accordion-section">
                  <h5>SEO & Growth</h5>
                  <Link href="/seo-services" onClick={closeMobile}>SEO Services</Link>
                  <Link href="/seo-ai-search-optimization" onClick={closeMobile}>SEO & AI Search Optimization</Link>
                  <Link href="/seo-services" onClick={closeMobile}>Website Speed Optimization</Link>
                  <Link href="/seo-ai-search-optimization" onClick={closeMobile}>Technical SEO</Link>
                </div>

                <div className="mobile-accordion-section">
                  <h5>Support & Maintenance</h5>
                  <Link href="/website-maintenance-performance-security" onClick={closeMobile}>Website Maintenance</Link>
                  <Link href="/website-maintenance-performance-security" onClick={closeMobile}>Performance Optimization</Link>
                  <Link href="/website-maintenance-performance-security" onClick={closeMobile}>Security Monitoring</Link>
                  <Link href="/website-maintenance-performance-security" onClick={closeMobile}>Ongoing Support</Link>
                </div>
              </div>

              {/* PRIMARY LINKS LIST */}
              <Link href="/case-studies" className="mobile-drawer-item-row link-redirect" onClick={closeMobile}>Our Work</Link>
              <Link href="/about" className="mobile-drawer-item-row link-redirect" onClick={closeMobile}>About</Link>
              <Link href="/blog" className="mobile-drawer-item-row link-redirect" onClick={closeMobile}>Blog</Link>
              <Link href="/contact" className="mobile-drawer-item-row link-redirect" onClick={closeMobile}>Contact</Link>
              
              <a href="mailto:info@zonzoctech.com" className="mobile-drawer-footer-email">
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} />
                info@zonzoctech.com
              </a>
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