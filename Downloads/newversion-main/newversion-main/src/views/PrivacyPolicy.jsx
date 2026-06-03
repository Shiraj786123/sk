'use client';
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const lastUpdated = "December 20, 2025";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.zonzoctech.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://www.zonzoctech.com/privacy-policy"
      }
    ]
  };

  const sections = [
    {
      number: "1",
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          items: [
            "Name and identity profiles",
            "Direct corporate email address",
            "Contact phone number",
            "Target business website URL",
            "Operational business size and framework structures",
            "Metadata details submitted via contact, scheduling, or automation audit forms",
          ],
        },
        {
          subtitle: "Technical & Usage Data",
          items: [
            "Internet Protocol (IP) address",
            "Browser type, specifications, and versioning",
            "Specific pages visited within our infrastructure",
            "Time duration logs spent on operational pages",
            "Referring URLs and clickstream navigation paths",
          ],
          note: "This telemetry data is processed exclusively to maintain stability, refine performance metrics, and optimize core website architectures.",
        },
      ],
    },
    {
      number: "2",
      title: "How We Use Your Information",
      description: "We process and utilize your telemetry and data records to:",
      items: [
        "Respond efficiently to service inquiries and contact requests",
        "Generate automated performance optimization audits and customized service proposals",
        "Optimize web interfaces, layout structures, and core user experience loops",
        "Execute and deliver requested technical services, code, and configurations",
        "Distribute operational updates, change logs, or required legal alerts",
        "Analyze macro site traffic structures and customer usage trajectories",
      ],
      important: "ZonzocTech maintains strict compliance parameters. We do not sell, rent, or trade your personal data records to third-party entities.",
    },
    {
      number: "3",
      title: "Cookies & Tracking Technologies",
      description: "ZonzocTech deploys persistent cookies and related diagnostic tokens to:",
      items: [
        "Understand website usage patterns and functional interaction maps",
        "Optimize custom engine performance variables and structural platform layouts",
        "Collect, compile, and index analytics dataset models",
      ],
      note: "Users retain full governance over cookie deployment maps via native browser preferences. Restricting or disabling cookies may cause degradation in interactive layout workflows.",
    },
    {
      number: "4",
      title: "Third-Party Services",
      description: "We connect workflows with authorized, secure enterprise tools including:",
      items: [
        "Google Analytics platform engines",
        "Google Search Console diagnostics",
        "Automated, encrypted email processing tools",
        "Premium server hosting architectures and security firewall layers",
      ],
      note: "These integration nodes handle data elements strictly in alignment with their respective enterprise privacy guidelines and policies.",
    },
    {
      number: "5",
      title: "Data Security Protocols",
      text: "We implement advanced technical and structural measures designed to insulate your data records against unauthorized access networks, data loss, alteration, or internal system breaches.",
      important:
        "However, no digital data pipeline or storage infrastructure can guarantee absolute security. ZonzocTech maintains high security baselines but cannot guarantee impenetrable protection parameters.",
    },
    {
      number: "6",
      title: "Data Retention Guidelines",
      text: "Personal data assets are retained exclusively for the duration necessary to satisfy the specific structural intents outlined within this policy statement, except where extended operational retention is strictly dictated by global legal mandates.",
    },
    {
      number: "7",
      title: "Your Jurisdictional Rights",
      description: "Based on local data sovereignty guidelines, your account entity may retain rights to:",
      items: [
        "Request comprehensive access profiles of your logged personal datasets",
        "Demand explicit structural correction, updating, or absolute deletion of your records",
        "Withdraw active consent permissions for current operational processing lines",
        "Object or file an administrative block against specific data pipeline processing",
      ],
      note: "To execute any available administrative data rights, please route your query through the official governance mailbox detailed below.",
    },
    {
      number: "8",
      title: "Children's Information",
      text: "ZonzocTech's professional workflows are not targeted toward minors under the age of 13. We do not knowingly maintain information from children. If verification emerges that such data has breached our arrays, notify us to trigger prompt removal workflows.",
    },
    {
      number: "9",
      title: "Amendments to Privacy Frameworks",
      text: "We reserve structural rights to update this Privacy Policy continuously. Any changes will be published immediately to this index with a corresponding structural version update notice.",
    },
    {
      number: "10",
      title: "Contact Governance Desk",
      text: "For all procedural questions regarding our data architecture, system mechanics, or active privacy frameworks, contact our desk:",
      contact: true,
    },
  ];

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <div className="pp__wrapper">
        <Navbar />

        {/* Premium Dark Hero Header */}
        <section className="pp__header_premium">
          <div className="pp__container_premium">
            
            <nav className="pp__breadcrumb_nav" aria-label="Breadcrumb">
              <a href="/" className="pp__breadcrumb_link">Home</a>
              <span className="pp__breadcrumb_separator">›</span>
              <span className="pp__breadcrumb_current">Privacy Policy</span>
            </nav>

            <div className="pp__meta_badge">
              <span className="pp__badge_dot"></span>
              <span className="pp__badge_text">Data Protection</span>
            </div>

            <h1 className="pp__title">Privacy Policy</h1>
            <p className="pp__updated">Document Version: {lastUpdated}</p>
            
            <div className="pp__intro_grid">
              <div className="pp__intro_text_wrapper">
                <p className="pp__intro">
                  ZonzocTech respects your operational confidentiality. This Data Protection Framework maps out how our engineering platforms gather, process, and secure user information when navigating <span className="pp__domain_highlight">zonzoctech.com</span> or interacting with our automated systems.
                </p>
              </div>

              <div className="pp__notice_card">
                <div className="pp__notice_icon_container">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <div className="pp__notice_content">
                  <span className="pp__notice_label">Compliance Commitment</span>
                  <p>
                    Our data architectures are actively built and monitored to enforce ironclad encryption, complete user autonomy, and modern security parameters.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Clean White Content Container Stack */}
        <section className="pp__content_premium">
          <div className="pp__container_content">
            <div className="pp__sections_stack">
              {sections.map((section, index) => (
                <div key={index} className="pp__section_card">
                  <div className="pp__section_header">
                    <span className="pp__section_number">{section.number}</span>
                    <h2 className="pp__section_title">{section.title}</h2>
                  </div>

                  <div className="pp__section_body">
                    {section.text && <p className="pp__body_text">{section.text}</p>}

                    {section.description && (
                      <p className="pp__body_description">{section.description}</p>
                    )}

                    {section.items && (
                      <ul className="pp__premium_list">
                        {section.items.map((item, idx) => (
                          <li key={idx}>
                            <span className="pp__list_bullet"></span>
                            <span className="pp__list_content">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.content &&
                      section.content.map((subsection, idx) => (
                        <div key={idx} className="pp__subsection_block">
                          <h3 className="pp__subsection_title">
                            {subsection.subtitle}
                          </h3>
                          <ul className="pp__premium_list">
                            {subsection.items.map((item, i) => (
                              <li key={i}>
                                <span className="pp__list_bullet pp__bullet_accent"></span>
                                <span className="pp__list_content">{item}</span>
                              </li>
                            ))}
                          </ul>
                          {subsection.note && (
                            <p className="pp__body_note">{subsection.note}</p>
                          )}
                        </div>
                      ))}

                    {section.important && (
                      <div className="pp__inline_important_card">
                        <div className="pp__inline_icon_wrap">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                            <line x1="12" y1="9" x2="12" y2="13"/>
                            <line x1="12" y1="17" x2="12.01" y2="17"/>
                          </svg>
                        </div>
                        <p>{section.important}</p>
                      </div>
                    )}

                    {section.note && <p className="pp__body_note">{section.note}</p>}

                    {section.contact && (
                      <div className="pp__premium_contact_grid">
                        <div className="pp__premium_contact_item">
                          <div className="pp__contact_svg_icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect width="20" height="16" x="2" y="4" rx="2"/>
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>
                          </div>
                          <div className="pp__contact_meta">
                            <span className="pp__contact_label">Governance Office</span>
                            <a href="mailto:info@zonzoctech.com" className="pp__contact_anchor">
                              info@zonzoctech.com
                            </a>
                          </div>
                        </div>
                        
                        <div className="pp__premium_contact_item">
                          <div className="pp__contact_svg_icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"/>
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                              <path d="M2 12h20"/>
                            </svg>
                          </div>
                          <div className="pp__contact_meta">
                            <span className="pp__contact_label">Active Platform</span>
                            <a href="https://zonzoctech.com" className="pp__contact_anchor">
                              zonzoctech.com
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Accent Highlight Agreement Box */}
            <div className="pp__premium_agreement_box">
              <div className="pp__agreement_content">
                <h3>Absolute Sovereignty Over Your Dataset</h3>
                <p>
                  At ZonzocTech, we continuously update our internal architectures to reflect modern legal data mandates. If you require a complete export of your user entries, structural records modifications, or absolute file purging across our systems, communicate your target parameters instantly to our technical operations center.
                </p>
              </div>
              <div className="pp__agreement_action">
                <a href="/contact" className="pp__premium_agreement_btn">
                  Open Governance Ticket
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;