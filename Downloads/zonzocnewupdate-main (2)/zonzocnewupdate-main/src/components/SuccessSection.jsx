'use client';
import React, { useRef, useState } from "react";
import Link from "next/link";
import "../styles/successsection.css";

const CARD_WIDTH = 285;
const CARD_GAP = 20;
const SLIDE_STEP = CARD_WIDTH + CARD_GAP;

const ProjectIcons = {
  hvac: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" />
    </svg>
  ),
  landscaping: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18M5 21V9l7-4 7 4v12M9 21v-6h6v6" />
    </svg>
  ),
  security: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  ecommerce: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  growth: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  lifestyle: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

const SuccessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [manualOffset, setManualOffset] = useState(0);
  const resumeTimerRef = useRef(null);
  const marqueeWrapperRef = useRef(null);

  const projects = [
    {
      slug: "basildon-acr",
      name: "Basildon ACR",
      shortName: "Basildon ACR",
      icon: "hvac",
      desc: "Full website redesign and local SEO for a UK air conditioning & refrigeration specialist — from zero online presence to page 1 rankings.",
      extra: ["Website Design", "Local SEO", "Lead Generation"],
      img: "/images/projects/basildon-acr-1.png",
    },
    {
      slug: "asj-hardscapes",
      name: "ASJ Hardscapes",
      shortName: "ASJ Hardscapes",
      icon: "landscaping",
      desc: "Professional website and local SEO for a UK hardscaping company — turning word-of-mouth reliance into 5× more online enquiries.",
      extra: ["Website Design", "Local SEO", "Portfolio Gallery"],
      img: "/images/projects/asj-hardscapes-1.png",
    },
    {
      slug: "frau-rauchfrei",
      name: "Frau Rauchfrei",
      shortName: "Frau Rauchfrei",
      icon: "security",
      desc: "End-to-end website security, performance optimisation, and ongoing maintenance for a German health platform — 99.9% uptime, zero incidents.",
      extra: ["Web Security", "Maintenance", "Performance"],
      img: "/images/projects/frau-rauchfrei-1.png",
    },
    {
      slug: "vitamina-project",
      name: "Vitamina Project",
      shortName: "Vitamina",
      icon: "ecommerce",
      desc: "Complete multi-vendor e-commerce ecosystem — admin portal, vendor portal, iOS and Android apps — built to handle a marketplace at scale.",
      extra: ["E-Commerce", "Mobile Apps", "Angular", "Node.js"],
      img: "/images/projects/vitamina-project-1.png",
    },
    {
      slug: "koning-bamboe",
      name: "Koning Bamboe",
      shortName: "Koning Bamboe",
      icon: "growth",
      desc: "Full website rebuild for a Dutch bamboo brand — 60% more organic traffic, 40% faster load times, and a clean new product catalogue.",
      extra: ["Website Development", "SEO", "Performance"],
      img: "/images/projects/koning-bamboe-1.png",
    },
    {
      slug: "best-life-nl",
      name: "Best Life NL",
      shortName: "Best Life NL",
      icon: "lifestyle",
      desc: "Brand-first website and SEO content strategy for a Dutch lifestyle brand — doubling session duration and growing a loyal subscriber base.",
      extra: ["Website Design", "Content Strategy", "SEO"],
      img: "/images/projects/best-life-nl-1.png",
    },
  ];

  const marqueeProjects = [...projects, ...projects];
  const activeSlug = projects[activeIndex].slug;

  const getCenterOffset = (index) => {
    const wrapper = marqueeWrapperRef.current;
    if (!wrapper) return -(index * SLIDE_STEP);

    const card = wrapper.querySelector('.project-card');
    const cardWidth = card?.offsetWidth ?? CARD_WIDTH;
    const slideStep = cardWidth + CARD_GAP;
    const containerWidth = wrapper.offsetWidth;
    const setWidth = projects.length * cardWidth + (projects.length - 1) * CARD_GAP;
    const centerAdjust = (containerWidth - cardWidth) / 2;

    let offset = -(index * slideStep) + centerAdjust;
    const minOffset = setWidth > containerWidth ? -(setWidth - containerWidth) : 0;
    const maxOffset = centerAdjust;

    return Math.max(minOffset, Math.min(maxOffset, offset));
  };

  const resumeAutoScroll = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    setIsPaused(false);
  };

  const handleTabFocus = (index) => {
    setActiveIndex(index);
    setIsPaused(true);
    setManualOffset(getCenterOffset(index));

    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const handleShowcaseMouseLeave = () => {
    resumeAutoScroll();
  };

  const handleTabClick = (index) => {
    handleTabFocus(index);
  };

  const renderCard = (project, index) => (
    <div
      key={`${project.slug}-${index}`}
      className={`project-card${project.slug === activeSlug ? ' project-card--active' : ''}`}
    >
      <img src={project.img} alt={project.name} className="project-img" />
      <div className="project-info">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-extra">
          {project.extra.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
        <Link href={`/case-studies/${project.slug}`} className="project-result-btn">
          view our project
        </Link>
      </div>
    </div>
  );

  return (
    <section id="our-work" className="success-section">
      <div className="success-header">
        <p className="success-eyebrow">See Our Success in Action</p>

        <h2 className="success-title">
          <span className="highlight">Real Results</span>, <span className="success-title-black">That Drive Business Growth</span>
        </h2>

        <p className="success-subtitle">
          See how we've helped businesses increase traffic, generate leads and
          <br />
          boost conversions through SEO, high-performing websites, and smart automation.
        </p>
      </div>

      <div className="projects-showcase" onMouseLeave={handleShowcaseMouseLeave}>
        <div
          className="project-filter-tabs"
          role="tablist"
          aria-label="Project case studies"
        >
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              id={`project-tab-${project.slug}`}
              className="project-filter-tab"
              onMouseEnter={() => handleTabFocus(index)}
              onFocus={() => handleTabFocus(index)}
              onClick={() => handleTabClick(index)}
            >
              <span className="project-filter-icon">{ProjectIcons[project.icon]}</span>
              <span className="project-filter-label">{project.shortName}</span>
            </button>
          ))}
        </div>

        <div
          className="projects-marquee-wrapper"
          ref={marqueeWrapperRef}
          onMouseEnter={() => setIsPaused(true)}
        >
          <div
            className={`projects-marquee-track${isPaused ? ' projects-marquee-track--paused' : ''}`}
            style={isPaused ? { '--manual-offset': `${manualOffset}px` } : undefined}
          >
            {marqueeProjects.map((project, index) => renderCard(project, index))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
