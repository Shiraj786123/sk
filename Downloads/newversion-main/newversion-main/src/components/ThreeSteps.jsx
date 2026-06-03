'use client';
import React from "react";
import "../styles/threeSteps.css";

const ThreeSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Connect Your Website",
      desc: "Add your domain and let our system scan technical SEO, keywords and rankings instantly.",
      icon: "fa-solid fa-link"
    },
    {
      id: 2,
      title: "Generate AI-Optimized Content",
      desc: "Get SEO-ready articles based on real-time search data and competitor analysis.",
      icon: "fa-solid fa-robot"
    },
    {
      id: 3,
      title: "Publish & Grow",
      desc: "Publish directly to your CMS and watch your organic traffic grow automatically.",
      icon: "fa-solid fa-arrow-trend-up"
    }
  ];

  return (
    <section className="steps-section">
      <h2 className="steps-title">How It Works — 3 Simple Steps</h2>
      <p className="steps-subtitle">
        Start ranking faster with automation{" "}
        <span className="time">that works 24/7.</span>
      </p>

      <div className="threesteps-grid">
        {steps.map(step => (
          <div className="threestep-card" key={step.id}>
            <div className="threestep-icon">
              <i className={step.icon}></i>
            </div>
            <h3 className="step-heading">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
            <span className="threestep-number">{step.id}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreeSteps;
