import Link from 'next/link';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import '@/src/styles/CaseStudyPage.css';

export const metadata = {
  title: 'ASJ Hardscapes Case Study | ZonzocTech',
  description: 'How ZonzocTech helped ASJ Hardscapes go from no online presence to a fully operational lead generation website with local SEO and 5× more enquiries.',
  alternates: { canonical: 'https://zonzoctech.com/case-studies/asj-hardscapes' },
};

export default function ASJHardscapesCaseStudy() {
  return (
    <>
      <Navbar />
      <div className="cs__wrapper">

        {/* HERO */}
   
<section className="cs__hero">
  <div className="cs__hero_inner">
    {/* Breadcrumb section */}
    <nav className="cs__breadcrumb">
      <Link href="/">HOME</Link>
      <span className="cs__breadcrumb_separator">&gt;</span>
      <Link href="/case-studies">CASE STUDIES</Link>
      <span className="cs__breadcrumb_separator">&gt;</span>
      <span className="cs__breadcrumb_active">ASJ HARDSCAPES</span>
    </nav>

    <h1 className="cs__hero_title">ASJ Hardscapes</h1>
    <p className="cs__hero_sub">
      Professional website and local SEO strategy for a UK landscaping and hardscaping specialist — turning word-of-mouth reliance into a steady online lead pipeline.
    </p>
    <div className="cs__tags">
      <span className="cs__tag">Website Design</span>
      <span className="cs__tag">Local SEO</span>
      <span className="cs__tag">Lead Generation</span>
      <span className="cs__tag">Portfolio Gallery</span>
    </div>
    <div className="cs__hero_links">
      <a href="https://asjhardscapes.co.uk" target="_blank" rel="noopener noreferrer" className="cs__live_btn">
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
              <a href="/images/projects/asj-hardscapes-1.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/asj-hardscapes-1.png" alt="ASJ Hardscapes homepage" className="cs__gallery_img" />
              </a>
              <a href="/images/projects/asj-hardscapes-2.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/asj-hardscapes-2.png" alt="ASJ Hardscapes portfolio" className="cs__gallery_img" />
              </a>
              <a href="/images/projects/asj-hardscapes-3.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/asj-hardscapes-3.png" alt="ASJ Hardscapes contact" className="cs__gallery_img" />
              </a>
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="cs__section cs__section--alt">
          <div className="cs__container">
            <h2 className="cs__heading">The Challenge</h2>
            <p className="cs__subtext">
              ASJ Hardscapes relied entirely on referrals with no website, no Google presence, and no way for potential customers to see their work or request a quote online.
            </p>
            <div className="cs__challenge_grid">
              <div className="cs__challenge_box">
                <h3>Problems We Found</h3>
                <ul>
                  <li>No website — completely absent from online search</li>
                  <li>No portfolio to showcase completed projects</li>
                  <li>Competitors ranking locally with basic sites</li>
                  <li>No quote request process — all enquiries via phone only</li>
                  <li>Seasonally inconsistent workload due to lack of visibility</li>
                </ul>
              </div>
              <div className="cs__challenge_box">
                <h3>Our Goals</h3>
                <ul>
                  <li>Build a professional website that instils trust at first glance</li>
                  <li>Showcase their portfolio of completed hardscaping work</li>
                  <li>Rank for local landscaping searches in their service area</li>
                  <li>Implement a quote request system to capture leads 24/7</li>
                  <li>Create a foundation for consistent seasonal bookings</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILT */}
        <section className="cs__section">
          <div className="cs__container">
            <h2 className="cs__heading">What We Built</h2>
            <p className="cs__subtext">
              A clean, professional website built to rank locally and convert visitors into booked jobs.
            </p>
            <div className="cs__built_grid">
              <div className="cs__built_item">
                <div className="cs__built_icon">🏡</div>
                <h4>Professional Website</h4>
                <p>A clean, trustworthy design showcasing services including driveways, patios, block paving, and garden landscaping — with clear pricing guides.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">🖼️</div>
                <h4>Project Portfolio Gallery</h4>
                <p>Before-and-after gallery sections for each service type, giving potential customers visual proof of the quality of work.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">📍</div>
                <h4>Local SEO</h4>
                <p>Google Business Profile setup, local keyword targeting, and service-area pages to rank for searches across their operating region.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">📋</div>
                <h4>Quote Request Forms</h4>
                <p>Multi-step quote request form with service selection, job size, and availability — routed directly to the client's inbox and phone.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">⭐</div>
                <h4>Reviews Integration</h4>
                <p>Google Reviews embedded on-site to build credibility instantly, alongside a testimonial section from past clients.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">📱</div>
                <h4>Mobile Optimised</h4>
                <p>Fully responsive across all devices with click-to-call and WhatsApp contact buttons — easy to reach them from any device.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="cs__section cs__section--dark">
          <div className="cs__container">
            <h2 className="cs__heading cs__heading--white">The Results</h2>
            <p className="cs__subtext cs__subtext--white">
              ASJ Hardscapes went from invisible to fully booked — with a pipeline of qualified enquiries coming in every week.
            </p>
            <div className="cs__results_grid">
              <div className="cs__result_card">
                <div className="cs__result_number">5×</div>
                <div className="cs__result_label">More online leads vs referrals alone</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">Top 3</div>
                <div className="cs__result_label">Google Maps position for local searches</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">24/7</div>
                <div className="cs__result_label">Lead capture via online quote forms</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">60 days</div>
                <div className="cs__result_label">To first page 1 organic ranking</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cs__cta_section">
          <div className="cs__container">
            <h2 className="cs__cta_heading">Want Customers to Find You Online?</h2>
            <p className="cs__cta_text">
              We build websites for trades and local service businesses that rank, convert, and keep you consistently booked.
            </p>
            <Link href="/contact" className="cs__cta_btn">Get Your Free Quote →</Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
