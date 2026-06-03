'use client';
import React from "react";
import { useRouter } from "next/navigation";
import "../styles/successsection.css";

const SuccessSection = () => {
  const router = useRouter();
  const projects = [
    {
      slug: "basildon-acr",
      name: "Basildon ACR",
      desc: "Full website redesign and local SEO for a UK air conditioning & refrigeration specialist — from zero online presence to page 1 rankings.",
      extra: ["Website Design", "Local SEO", "Lead Generation"],
      img: "/images/projects/basildon-acr-1.png",
    },
    {
      slug: "asj-hardscapes",
      name: "ASJ Hardscapes",
      desc: "Professional website and local SEO for a UK hardscaping company — turning word-of-mouth reliance into 5× more online enquiries.",
      extra: ["Website Design", "Local SEO", "Portfolio Gallery"],
      img: "/images/projects/asj-hardscapes-1.png",
    },
    {
      slug: "frau-rauchfrei",
      name: "Frau Rauchfrei",
      desc: "End-to-end website security, performance optimisation, and ongoing maintenance for a German health platform — 99.9% uptime, zero incidents.",
      extra: ["Web Security", "Maintenance", "Performance"],
      img: "/images/projects/frau-rauchfrei-1.png",
    },
    {
      slug: "vitamina-project",
      name: "Vitamina Project",
      desc: "Complete multi-vendor e-commerce ecosystem — admin portal, vendor portal, iOS and Android apps — built to handle a marketplace at scale.",
      extra: ["E-Commerce", "Mobile Apps", "Angular", "Node.js"],
      img: "/images/projects/vitamina-project-1.png",
    },
    {
      slug: "koning-bamboe",
      name: "Koning Bamboe",
      desc: "Full website rebuild for a Dutch bamboo brand — 60% more organic traffic, 40% faster load times, and a clean new product catalogue.",
      extra: ["Website Development", "SEO", "Performance"],
      img: "/images/projects/koning-bamboe-1.png",
    },
    {
      slug: "best-life-nl",
      name: "Best Life NL",
      desc: "Brand-first website and SEO content strategy for a Dutch lifestyle brand — doubling session duration and growing a loyal subscriber base.",
      extra: ["Website Design", "Content Strategy", "SEO"],
      img: "/images/projects/best-life-nl-1.png",
    },
  ];

  return (
    // ADDED: id="our-work" to connect with the Navbar and Hero "See Our Work" buttons
    <section id="our-work" className="success-section">
      <div className="success-header">
        <span className="success-tag">See </span>
        <span className="tag2"> Our Success in Action</span>

        <h2 className="success-title">
          <span className="highlight">Real Results</span>, That Drive Business Growth
        </h2>

        <p className="success-subtitle">
          See how we've helped businesses increase traffic, generate leads and
          <br />
          boost conversions through SEO, high-performing websites, and smart automation.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="project-card"
            onClick={() => router.push(`/case-studies/${project.slug}`)}
          >
            <img
              src={project.img}
              alt={project.name}
              className="project-img"
            />
            <div className="project-info">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-extra">
                {project.extra.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessSection;