import Link from 'next/link';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import '@/src/styles/CaseStudyPage.css';

export const metadata = {
  title: 'Basildon ACR Case Study | ZonzocTech',
  description: 'How ZonzocTech took Basildon ACR from poor SEO and weak design to page 1 Google rankings — full website redesign, WooCommerce, and ongoing SEO management.',
  alternates: { canonical: 'https://zonzoctech.com/case-studies/basildon-acr' },
};

export default function BasildonACRCaseStudy() {
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
      <span className="cs__breadcrumb_active">BASILDON ACR</span>
    </nav>

    <h1 className="cs__hero_title">
      How We Took Basildon ACR from Poor SEO to Page 1 Rankings — and Built Their Entire Digital Presence from Scratch
    </h1>
    <p className="cs__hero_sub">
      Full website redesign + ongoing SEO management for a UK air conditioning specialist — from struggling online to dominating local search.
    </p>
    <div className="cs__tags">
      <span className="cs__tag">WordPress</span>
      <span className="cs__tag">WooCommerce</span>
      <span className="cs__tag">Local SEO</span>
      <span className="cs__tag">Ongoing Management</span>
    </div>
    <div className="cs__hero_links">
      <a href="https://basildonacr.co.uk" target="_blank" rel="noopener noreferrer" className="cs__live_btn">
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
              <a href="/images/projects/basildon-acr-1.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/basildon-acr-1.png" alt="Basildon ACR homepage redesign" className="cs__gallery_img" />
              </a>
              <a href="/images/projects/basildon-acr-2.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/basildon-acr-2.png" alt="Basildon ACR product catalogue" className="cs__gallery_img" />
              </a>
              <a href="/images/projects/basildon-acr-3.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/basildon-acr-3.png" alt="Basildon ACR location pages" className="cs__gallery_img" />
              </a>
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="cs__section cs__section--alt">
          <div className="cs__container">
            <h2 className="cs__heading">The Challenge</h2>
            <p className="cs__subtext">
              When Basildon ACR came to us in 2024, they had a website that wasn't working. Poor SEO, weak design, no local visibility and competitors outranking them for every important search term in their market.
            </p>
            <div className="cs__challenge_grid">
              <div className="cs__challenge_box">
                <h3>Problems We Found</h3>
                <ul>
                  <li>Poor SEO across all key pages</li>
                  <li>Weak website design losing customers</li>
                  <li>Zero page 1 rankings for local terms</li>
                  <li>No trade account system</li>
                  <li>Losing enquiries to competitors daily</li>
                </ul>
              </div>
              <div className="cs__challenge_box">
                <h3>What Needed to Change</h3>
                <ul>
                  <li>Complete website redesign from the ground up</li>
                  <li>Full product catalogue with brand and category pages</li>
                  <li>Local SEO to rank across their service areas</li>
                  <li>Trade login and account system for B2B customers</li>
                  <li>A long-term SEO management plan to stay on top</li>
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
              A complete rebuild — website, catalogue, SEO, and ongoing management — all under one roof.
            </p>
            <div className="cs__built_grid">
              <div className="cs__built_item">
                <div className="cs__built_icon">🌐</div>
                <h4>Complete Website Redesign</h4>
                <p>Full WordPress + WooCommerce rebuild from scratch — mobile-first responsive design, SSL, security, and hosting setup included.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">🗂️</div>
                <h4>Multi-Category Product Catalogue</h4>
                <p>Structured product catalogue covering Wall Mount, Floor Mount, Ceiling Cassette, Multi Split, Ducted, and VRF systems — easy to browse and buy.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">🏷️</div>
                <h4>10+ Brand Pages</h4>
                <p>Dedicated brand pages for Daikin, Mitsubishi, Samsung, Toshiba, Fujitsu and more — each optimised to rank for brand-specific search terms.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">🔐</div>
                <h4>Trade Login &amp; Account System</h4>
                <p>Trade portal with account creation, login, and trade-specific pricing — giving B2B customers a dedicated experience.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">📍</div>
                <h4>Location Pages</h4>
                <p>Dedicated location pages built for London, Peterborough, and Kent — each targeting local search terms to capture customers across their service areas.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">🔍</div>
                <h4>Full SEO Overhaul</h4>
                <p>Complete on-page SEO for all pages, local keyword targeting, Google Business Profile optimisation, and technical SEO fixes throughout the site.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">📋</div>
                <h4>Enquiry &amp; Quote Forms</h4>
                <p>Custom enquiry and quote request forms across key product and service pages — capturing leads 24/7 and routing them directly to the team.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">🔄</div>
                <h4>Ongoing Monthly Management</h4>
                <p>Product updates and additions, security and plugin updates, SEO monitoring and improvements, and performance optimisation — every month, without fail.</p>
              </div>
            </div>
          </div>
        </section>

        {/* EXTRA GALLERY */}
        <section className="cs__section cs__section--alt">
          <div className="cs__container">
            <div className="cs__gallery">
              <a href="/images/projects/basildon-acr-4.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/basildon-acr-4.png" alt="Basildon ACR brand pages" className="cs__gallery_img" />
              </a>
              <a href="/images/projects/basildon-acr-5.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/basildon-acr-5.png" alt="Basildon ACR trade portal" className="cs__gallery_img" />
              </a>
              <a href="/images/projects/basildon-acr-6.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/basildon-acr-6.png" alt="Basildon ACR mobile view" className="cs__gallery_img" />
              </a>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="cs__section cs__section--dark">
          <div className="cs__container">
            <h2 className="cs__heading cs__heading--white">The Results</h2>
            <p className="cs__subtext cs__subtext--white">
              From struggling online to dominating local search — with an ongoing partnership that keeps growing.
            </p>
            <div className="cs__results_grid">
              <div className="cs__result_card">
                <div className="cs__result_number">Page 1</div>
                <div className="cs__result_label">Google rankings for all major keywords</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">10+</div>
                <div className="cs__result_label">Brand category pages ranking in search</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">3</div>
                <div className="cs__result_label">Location pages live and indexed (London, Peterborough, Kent)</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">2024</div>
                <div className="cs__result_label">Ongoing retainer client — still managing today</div>
              </div>
            </div>
            <div className="cs__results_checklist">
              <div className="cs__check_item">✅ All major keywords now on Page 1 Google</div>
              <div className="cs__check_item">✅ Complete website built from zero</div>
              <div className="cs__check_item">✅ Trade portal live and operational</div>
              <div className="cs__check_item">✅ 10+ brand category pages ranking</div>
              <div className="cs__check_item">✅ Multiple location pages indexed</div>
              <div className="cs__check_item">✅ Ongoing client since 2024</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cs__cta_section">
          <div className="cs__container">
            <h2 className="cs__cta_heading">Need a website built from scratch with SEO that actually works?</h2>
            <p className="cs__cta_text">
              We did it for Basildon ACR — we can do it for you.
            </p>
            <Link href="/contact" className="cs__cta_btn">Start Your Project →</Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
