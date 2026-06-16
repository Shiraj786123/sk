'use client';
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/TermsConditions.css";

const TermsConditions = () => {
  const lastUpdated = "December 20, 2025";

  // Dynamic SEO Structured Schema for Breadcrumbs
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
        "name": "Terms & Conditions",
        "item": "https://www.zonzoctech.com/terms-conditions"
      }
    ]
  };

  const sections = [
    {
      number: "1",
      title: "Definitions",
      items: [
        '"Company," "we," "us," "our" refers to ZonzocTech',
        '"Client," "you" refers to any user, visitor, or customer',
        '"Services" refers to all AI, web development, SEO, automation, consulting, and related services provided by ZonzocTech',
      ],
    },
    {
      number: "2",
      title: "Use of Website",
      text: "You agree to use this website only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use of the website.",
      subtitle: "You must not:",
      restrictions: [
        "Attempt to gain unauthorized access",
        "Introduce malicious code or viruses",
        "Copy or misuse website content without permission",
      ],
    },
    {
      number: "3",
      title: "Services & Engagement",
      description: "All services provided by ZonzocTech are subject to:",
      items: [
        "Project scope and agreement",
        "Timelines and deliverables agreed upon in writing",
        "Client cooperation and timely communication",
      ],
      note: "Any estimates, audits, or consultations are provided based on information available at the time.",
    },
    {
      number: "4",
      title: "No Guaranteed Results",
      text: "While we apply industry best practices, we do not guarantee specific rankings, traffic levels, sales, or business outcomes, especially for SEO, AI search optimization, or digital marketing services.",
      important:
        "Results depend on multiple external factors beyond our control.",
    },
    {
      number: "5",
      title: "Payments & Billing",
      items: [
        "Fees and payment terms will be clearly outlined in proposals or contracts",
        "Payments must be made according to agreed schedules",
        "Late payments may result in paused or terminated services",
      ],
      important:
        "All fees are non-refundable unless otherwise stated in writing.",
    },
    {
      number: "6",
      title: "Intellectual Property",
      description: "Unless otherwise agreed in writing:",
      items: [
        "ZonzocTech retains ownership of proprietary tools, frameworks, and methodologies",
        "Upon full payment, clients receive rights to deliverables created specifically for them",
        "Clients may not resell, redistribute, or reuse our work without permission",
      ],
    },
    {
      number: "7",
      title: "Client Responsibilities",
      description: "Clients agree to:",
      items: [
        "Provide accurate information",
        "Supply required content and access on time",
        "Review and approve deliverables promptly",
      ],
      note: "Delays caused by the client may affect timelines and costs.",
    },
    {
      number: "8",
      title: "Third-Party Tools & Platforms",
      text: "We may integrate or recommend third-party platforms such as hosting providers, AI tools, analytics platforms, or APIs. ZonzocTech is not responsible for changes, outages, or policies of third-party services.",
    },
    {
      number: "9",
      title: "Limitation of Liability",
      description:
        "To the fullest extent permitted by law, ZonzocTech shall not be liable for:",
      items: [
        "Indirect or consequential damages",
        "Loss of profits, data, or business",
        "Website downtime caused by external factors",
      ],
      important:
        "Our liability is limited to the amount paid for the specific service in question.",
    },
    {
      number: "10",
      title: "Confidentiality",
      text: "Both parties agree to keep confidential information private unless disclosure is required by law or agreed in writing.",
    },
    {
      number: "11",
      title: "Termination",
      description: "We reserve the right to suspend or terminate services if:",
      items: [
        "These Terms are violated",
        "Payments are not made",
        "Unlawful or abusive behavior occurs",
      ],
      note: "Clients may terminate services according to the terms outlined in their service agreement.",
    },
    {
      number: "12",
      title: "Changes to Terms",
      text: "ZonzocTech may update these Terms & Conditions at any time. Continued use of the website or services constitutes acceptance of the updated terms.",
    },
    {
      number: "13",
      title: "Governing Law",
      text: "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of Sri Lanka, without regard to conflict of law principles.",
    },
    {
      number: "14",
      title: "Contact Information",
      text: "For any questions regarding these Terms & Conditions, please contact:",
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

      <div className="tc__wrapper">
        <Navbar />

        {/* Header Section */}
        <section className="tc__header_premium">
          <div className="tc__container_premium">
            
            {/* Breadcrumbs path navigation with color overrides for dark layouts */}
            <nav 
              className="tc__breadcrumb_nav" 
              aria-label="Breadcrumb"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '24px',
                fontFamily: 'sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              <a 
                href="/" 
                className="tc__breadcrumb_link"
                style={{
                  color: '#94a3b8', // Bright silver-gray for accessible contrast
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#38bdf8'}
                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
              >
                Home
              </a>
              <span className="tc__breadcrumb_separator" style={{ color: '#64748b' }}>›</span>
              <span 
                className="tc__breadcrumb_current"
                style={{ color: '#38bdf8' }} // High contrast cyan blue highlight to match image styles
              >
                Terms & Conditions
              </span>
            </nav>

            {/* Centered Micro badge under breadcrumbs */}
            <div className="tc__meta_badge">
              <span className="tc__badge_dot"></span>
              <span className="tc__badge_text">Legal Framework</span>
            </div>

            {/* Main Headings */}
            <h1 className="tc__title">Terms & Conditions</h1>
            <p className="tc__updated">Document Version: {lastUpdated}</p>
            
            <div className="tc__intro_grid">
              <div className="tc__intro_text_wrapper">
                <p className="tc__intro">
                  Welcome to ZonzocTech. By accessing or utilizing our platform at{" "}
                  <span className="tc__domain_highlight">zonzoctech.com</span> and engaging with our specialized services, you enter a legally binding agreement to comply with and be governed by the following operational terms. Please review these directives with due diligence.
                </p>
              </div>

              {/* Enhanced Professional Notice Box */}
              <div className="tc__notice_card">
                <div className="tc__notice_icon_container">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="tc__notice_svg"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <div className="tc__notice_content">
                  <span className="tc__notice_label">Important Notice</span>
                  <p>
                    If you do not accept or agree to be fully bound by these terms, you must immediately discontinue your use of our website, interfaces, and technical services.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Content Box Loop Section */}
        <section className="tc__content_premium">
          <div className="tc__container_content">
            <div className="tc__sections_stack">
              {sections.map((section, index) => (
                <div key={index} className="tc__section_card">
                  <div className="tc__section_header">
                    <span className="tc__section_number">{section.number}</span>
                    <h2 className="tc__section_title">{section.title}</h2>
                  </div>

                  <div className="tc__section_body">
                    {/* Text only */}
                    {section.text && <p className="tc__body_text">{section.text}</p>}

                    {/* Description */}
                    {section.description && (
                      <p className="tc__body_description">{section.description}</p>
                    )}

                    {/* Items list */}
                    {section.items && (
                      <ul className="tc__premium_list">
                        {section.items.map((item, idx) => (
                          <li key={idx}>
                            <span className="tc__list_bullet"></span>
                            <span className="tc__list_content">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Subtitle with restrictions */}
                    {section.subtitle && (
                      <div className="tc__restrictions_wrapper">
                        <p className="tc__subtitle_label">{section.subtitle}</p>
                        <ul className="tc__premium_list tc__variant_restrictions">
                          {section.restrictions.map((item, idx) => (
                            <li key={idx}>
                              <span className="tc__list_bullet tc__bullet_warning"></span>
                              <span className="tc__list_content">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Important note */}
                    {section.important && (
                      <div className="tc__inline_important_card">
                        <div className="tc__inline_icon_wrap">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                            <line x1="12" y1="9" x2="12" y2="13"/>
                            <line x1="12" y1="17" x2="12.01" y2="17"/>
                          </svg>
                        </div>
                        <p>{section.important}</p>
                      </div>
                    )}

                    {/* Regular note */}
                    {section.note && <p className="tc__body_note">{section.note}</p>}

                    {/* Contact info */}
                    {section.contact && (
                      <div className="tc__premium_contact_grid">
                        <div className="tc__premium_contact_item">
                          <div className="tc__contact_svg_icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect width="20" height="16" x="2" y="4" rx="2"/>
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>
                          </div>
                          <div className="tc__contact_meta">
                            <span className="tc__contact_label">Corporate Support</span>
                            <a href="mailto:info@zonzoctech.com" className="tc__contact_anchor">
                              info@zonzoctech.com
                            </a>
                          </div>
                        </div>
                        
                        <div className="tc__premium_contact_item">
                          <div className="tc__contact_svg_icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"/>
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                              <path d="M2 12h20"/>
                            </svg>
                          </div>
                          <div className="tc__contact_meta">
                            <span className="tc__contact_label">Official Domain</span>
                            <a href="https://zonzoctech.com" className="tc__contact_anchor">
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

            {/* Premium Bottom Agreement Callout Box */}
            <div className="tc__premium_agreement_box">
              <div className="tc__agreement_content">
                <h3>Your Acknowledgment & Agreement</h3>
                <p>
                  By continuous navigation of ZonzocTech's operational website or deployment of our scaling services, you explicitly affirm that you have read, understood, and accept binding governance under these complete Terms & Conditions. If any parameters require clarification, contact our architecture desk before taking action.
                </p>
              </div>
              <div className="tc__agreement_action">
                <a href="/contact" className="tc__premium_agreement_btn">
                  Contact Governance Desk
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

export default TermsConditions;