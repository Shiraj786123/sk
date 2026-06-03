'use client';
import React from "react";
import "../styles/soMuchMore.css";
import { FaLink, FaKey, FaBrain, FaPaperPlane, FaQuestionCircle, FaChartBar, FaUsers, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaChartBar />,
    title: "Uses real, current data",
    desc: "Article content is backed by real time google results, fresh insights from reddit, quora, academic papers, news portals and more. Stuff that Google rewards."
  },
  {
    icon: <FaLink />,
    title: "Free backlinks",
    desc: "We automatically exchange backlinks with other niche-relevant customers in our network to boost your domain authority and rankings."
  },
  {
    icon: <FaKey />,
    title: "Customized tone and voice",
    desc: "We analyze your existing content and write the article in the same tone and voice. No more generic content."
  },
  {
    icon: <FaBrain />,
    title: "JSON-LD Schema",
    desc: "Each article is enriched with JSON-LD Schema, ensuring your content is properly marked up for search engines and LLMs."
  },
  {
    icon: <FaPaperPlane />,
    title: "Publish with 1 click",
    desc: "Directly from our platform, you can publish your article to WordPress, Webflow, Wix, Shopify, API and other integrations."
  },
  {
    icon: <FaQuestionCircle />,
    title: "People Also Ask data",
    desc: "Our articles incorporate People Also Ask data, ensuring you address the most common questions users have, thereby satisfying their search intent."
  },
  {
    icon: <FaChartBar />,
    title: "Search Console integration",
    desc: "By integrating Google Search Console, we can get a detailed insight of how your page performs which helps us tailor the content."
  },
  {
    icon: <FaUsers />,
    title: "Multi-user access",
    desc: "Invite multiple editors to your organization and collaborate seamlessly to generate impactful content together."
  },
  {
    icon: <FaHeadset />,
    title: "Support",
    desc: "Get expert assistance 24/7, ensuring smooth operation of all platform features."
  },
];

const SoMuchMoreSection = () => {
  return (
    <section className="so-much-more-section">
      <div className="container">
        <h2 className="smm-section-title">And So <span className="highlight">Much More...</span></h2>
        <div className="smm-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="smm-feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="smm-feature-title">{feature.title}</h3>
              <p className="smm-feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoMuchMoreSection;
