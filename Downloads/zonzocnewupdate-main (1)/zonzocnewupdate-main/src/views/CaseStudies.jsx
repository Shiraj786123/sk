'use client';
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/CaseStudies.css";
import Breadcrumb from "../components/Breadcrumb";

const CaseStudies = () => {
  const projects = [
    {
      title: "Basildon ACR",
      image: "/images/projects/basildon-acr-1.png",
      services: ["WordPress", "WooCommerce", "Local SEO"],
      link: "/case-studies/basildon-acr",
    },
    {
      title: "ASJ Hardscapes",
      image: "/images/projects/asj-hardscapes-1.png",
      services: ["Local SEO", "On-Page Optimisation"],
      link: "/case-studies/asj-hardscapes",
    },
    {
      title: "Frau Rauchfrei",
      image: "/images/projects/frau-rauchfrei-1.png",
      services: ["WordPress", "Security", "Maintenance"],
      link: "/case-studies/frau-rauchfrei",
    },
    {
      title: "Vitamina Project",
      image: "/images/projects/vitamina-project-1.png",
      services: ["SEO", "Technical Fixes"],
      link: "/case-studies/vitamina-project",
    },
    {
      title: "Koning Bamboe",
      image: "/images/projects/koning-bamboe-1.png",
      services: ["Lightspeed CMS", "SEO"],
      link: "/case-studies/koning-bamboe",
    },
    {
      title: "Best Life NL",
      image: "/images/projects/best-life-nl-1.png",
      services: ["SEO", "Content Strategy"],
      link: "/case-studies/best-life-nl",
    },
  ];

  return (
    <>
      <div className="cs__wrapper">
        <Navbar />

        {/* Integrated Premium Hero Section */}
        <section className="cs__hero_merged">
          <div className="cs__hero_container">
            {/* Breadcrumb path */}
            <Breadcrumb />

            {/* Pill Badge */}
            <span className="cs__hero_badge_wrapper">
              <span className="cs__hero_badge_dot"></span>
              <span className="cs__hero_badge_text">
                ZonzocTech Case Studies
              </span>
            </span>

            {/* Main Split Heading */}
            <h1 className="cs__hero_title">
              Real Projects. <span className="cs__hero_title_highlight">Real Results.</span>
            </h1>
            
            <p className="cs__hero_description">
              Case studies from our work with businesses across the UK, USA and Europe.
            </p>
            
            {/* Interactive Brand Actions */}
            <div className="cs__hero_buttons">
              <a href="/contact" className="cs__btn_filled">
                Get Free Consultation
              </a>
              <a href="/portfolio" className="cs__btn_outlined">
                View Portfolio <span className="cs__btn_arrow">→</span>
              </a>
            </div>
            
            {/* Bottom Trust Subtext */}
            <p className="cs__hero_trust_text">
              Trusted by 120+ businesses across the UK, USA & Europe
            </p>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="cs__studies_section">
          <div className="cs__container">
            <div className="cs__projects_grid">
              {projects.map((project, i) => (
                <a key={i} href={project.link} className="cs__project_card">
                  <div className="cs__project_image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="cs__project_info">
                    <h3 className="cs__project_title">{project.title}</h3>
                    <div className="cs__project_tags">
                      {project.services.map((service, j) => (
                        <span key={j} className="cs__project_tag">{service}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudies;