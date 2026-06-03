import Link from 'next/link';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import '@/src/styles/CaseStudyPage.css';

export const metadata = {
  title: 'Frau Rauchfrei Case Study | ZonzocTech',
  description: 'How ZonzocTech secured, optimised, and maintained frau-rauchfrei.de — delivering 99.9% uptime, zero security incidents, and a 50% speed improvement.',
  alternates: { canonical: 'https://zonzoctech.com/case-studies/frau-rauchfrei' },
};

export default function FrauRauchfreiCaseStudy() {
  return (
    <>
      <Navbar />
      <div className="cs__wrapper">

        {/* HERO */}
    

<section className="cs__hero">
  <div className="cs__hero_inner">
    {/* Centered Breadcrumb */}
    <nav className="cs__breadcrumb">
      <Link href="/">HOME</Link>
      <span className="cs__breadcrumb_separator">&gt;</span>
      <Link href="/case-studies">CASE STUDIES</Link>
      <span className="cs__breadcrumb_separator">&gt;</span>
      <span className="cs__breadcrumb_active">FRAU RAUCHFREI</span>
    </nav>

    <h1 className="cs__hero_title">Frau Rauchfrei</h1>
    <p className="cs__hero_sub">
      End-to-end website security, performance optimisation, and ongoing maintenance for a German health &amp; wellbeing platform — zero downtime, zero breaches.
    </p>
    <div className="cs__tags">
      <span className="cs__tag">Website Maintenance</span>
      <span className="cs__tag">Web Security</span>
      <span className="cs__tag">Performance Optimisation</span>
      <span className="cs__tag">Ongoing Support</span>
    </div>
    <div className="cs__hero_links">
      <a href="https://frau-rauchfrei.de" target="_blank" rel="noopener noreferrer" className="cs__live_btn">
        View Live Site ↗
      </a>
      <Link href="/contact" className="cs__outline_btn">Start Your Project</Link>
    </div>
  </div>
</section>
        {/* GALLERY */}
        <section className="cs__section">
          <div className="cs__container">
            <div className="cs__gallery">
              <a href="/images/projects/frau-rauchfrei-1.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/frau-rauchfrei-1.png" alt="Frau Rauchfrei homepage" className="cs__gallery_img" />
              </a>
              <a href="/images/projects/frau-rauchfrei-2.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/frau-rauchfrei-2.png" alt="Frau Rauchfrei content pages" className="cs__gallery_img" />
              </a>
              <a href="/images/projects/frau-rauchfrei-3.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/frau-rauchfrei-3.png" alt="Frau Rauchfrei mobile view" className="cs__gallery_img" />
              </a>
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="cs__section cs__section--alt">
          <div className="cs__container">
            <h2 className="cs__heading">The Challenge</h2>
            <p className="cs__subtext">
              Frau Rauchfrei's website was running on outdated plugins and an unpatched CMS — leaving it exposed to vulnerabilities, suffering slow load times, and at risk of losing search rankings and user trust.
            </p>
            <div className="cs__challenge_grid">
              <div className="cs__challenge_box">
                <h3>Problems We Found</h3>
                <ul>
                  <li>Outdated plugins and CMS core with known vulnerabilities</li>
                  <li>No SSL properly configured on all pages</li>
                  <li>Slow load times causing drop-off on key content pages</li>
                  <li>No backup system — one crash could lose everything</li>
                  <li>No monitoring or alerting for downtime or attacks</li>
                </ul>
              </div>
              <div className="cs__challenge_box">
                <h3>Our Goals</h3>
                <ul>
                  <li>Harden the site against known and emerging threats</li>
                  <li>Improve page speed scores across all key pages</li>
                  <li>Set up automated backups and disaster recovery</li>
                  <li>Establish a proactive monthly maintenance routine</li>
                  <li>Deliver 99.9% uptime with real-time alerting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DID */}
        <section className="cs__section">
          <div className="cs__container">
            <h2 className="cs__heading">What We Did</h2>
            <p className="cs__subtext">
              A full security audit followed by systematic hardening, speed work, and a long-term maintenance plan.
            </p>
            <div className="cs__built_grid">
              <div className="cs__built_item">
                <div className="cs__built_icon">🔒</div>
                <h4>Security Hardening</h4>
                <p>Full security audit, plugin patching, WAF setup, login protection, and removal of all malicious code or backdoors found during the audit.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">💾</div>
                <h4>Automated Backups</h4>
                <p>Daily automated off-site backups with one-click restore capability — so no incident can result in permanent data loss.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">⚡</div>
                <h4>Performance Optimisation</h4>
                <p>Image optimisation, caching layers, CDN integration, and code minification bringing page load times down by 50%.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">📡</div>
                <h4>Uptime Monitoring</h4>
                <p>24/7 uptime monitoring with instant SMS and email alerts — any downtime detected and resolved before users notice.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">🔄</div>
                <h4>Monthly Maintenance</h4>
                <p>Scheduled monthly updates covering core, plugins, themes, and database optimisation — keeping the site current and secure.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">📋</div>
                <h4>Monthly Reports</h4>
                <p>Clear monthly reports covering security scans, uptime stats, update logs, and performance metrics — full transparency, every month.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="cs__section cs__section--dark">
          <div className="cs__container">
            <h2 className="cs__heading cs__heading--white">The Results</h2>
            <p className="cs__subtext cs__subtext--white">
              A secure, fast, and reliably maintained website — with the peace of mind that comes from knowing someone is always watching.
            </p>
            <div className="cs__results_grid">
              <div className="cs__result_card">
                <div className="cs__result_number">99.9%</div>
                <div className="cs__result_label">Uptime maintained since handover</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">0</div>
                <div className="cs__result_label">Security incidents post-hardening</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">50%</div>
                <div className="cs__result_label">Faster average page load time</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">12mo+</div>
                <div className="cs__result_label">Ongoing maintenance partnership</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cs__cta_section">
          <div className="cs__container">
            <h2 className="cs__cta_heading">Is Your Website Properly Protected?</h2>
            <p className="cs__cta_text">
              Don't wait for a breach or crash. Our maintenance and security plans keep your site fast, secure, and always online.
            </p>
            <Link href="/contact" className="cs__cta_btn">Get a Free Security Audit →</Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
