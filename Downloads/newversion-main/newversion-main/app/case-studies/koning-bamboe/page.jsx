import Link from 'next/link';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import '@/src/styles/CaseStudyPage.css';

export const metadata = {
  title: 'Koning Bamboe Case Study | ZonzocTech',
  description: 'How ZonzocTech rebuilt koningbamboe.nl with advanced features, improved performance, and a better user experience for a Dutch bamboo products brand.',
  alternates: { canonical: 'https://zonzoctech.com/case-studies/koning-bamboe' },
};

export default function KoningBamboeCaseStudy() {
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
      <span className="cs__breadcrumb_active">KONING BAMBOE</span>
    </nav>

    <h1 className="cs__hero_title">Koning Bamboe</h1>
    <p className="cs__hero_sub">
      Complete website rebuild for a Dutch bamboo products brand — faster, smarter, and built to scale, with a 60% boost in organic traffic within 3 months.
    </p>
    <div className="cs__tags">
      <span className="cs__tag">Website Development</span>
      <span className="cs__tag">E-Commerce</span>
      <span className="cs__tag">SEO</span>
      <span className="cs__tag">Performance</span>
    </div>
    <div className="cs__hero_links">
      <a href="https://koningbamboe.nl" target="_blank" rel="noopener noreferrer" className="cs__live_btn">
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
              <a href="/images/projects/koning-bamboe-1.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/koning-bamboe-1.png" alt="Koning Bamboe homepage" className="cs__gallery_img" />
              </a>
              <a href="/images/projects/koning-bamboe-2.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/koning-bamboe-2.png" alt="Koning Bamboe product pages" className="cs__gallery_img" />
              </a>
              <a href="/images/projects/koning-bamboe-3.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/koning-bamboe-3.png" alt="Koning Bamboe mobile experience" className="cs__gallery_img" />
              </a>
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="cs__section cs__section--alt">
          <div className="cs__container">
            <h2 className="cs__heading">The Challenge</h2>
            <p className="cs__subtext">
              Koning Bamboe had a loyal customer base but a website that couldn't keep up — slow load times, poor mobile experience, and a product catalogue that was difficult to manage or browse.
            </p>
            <div className="cs__challenge_grid">
              <div className="cs__challenge_box">
                <h3>Problems We Found</h3>
                <ul>
                  <li>Slow page load times driving high bounce rates</li>
                  <li>Poor mobile layout and unresponsive product pages</li>
                  <li>Outdated CMS making product updates time-consuming</li>
                  <li>Weak on-page SEO with no structured data</li>
                  <li>No analytics or conversion tracking in place</li>
                </ul>
              </div>
              <div className="cs__challenge_box">
                <h3>Our Goals</h3>
                <ul>
                  <li>Rebuild site with modern stack for speed and scalability</li>
                  <li>Create an intuitive, mobile-first product browsing experience</li>
                  <li>Implement SEO best practices across all product pages</li>
                  <li>Set up analytics to track what's actually working</li>
                  <li>Make content management easy for the client team</li>
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
              A fast, modern platform that gives Koning Bamboe full control over their products and content — with search engines and customers both in mind.
            </p>
            <div className="cs__built_grid">
              <div className="cs__built_item">
                <div className="cs__built_icon">🚀</div>
                <h4>Next.js Rebuild</h4>
                <p>Rebuilt the entire site in Next.js for server-side rendering, blazing fast page loads, and a seamless user experience across all devices.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">🛒</div>
                <h4>Product Catalogue System</h4>
                <p>Structured product pages with filtering, categories, and detailed specifications — easy to browse for customers, easy to manage for the team.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">🔍</div>
                <h4>On-Page SEO</h4>
                <p>Meta tags, schema markup, internal linking strategy, and keyword-optimised copy across every product and category page.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">📱</div>
                <h4>Mobile-First Design</h4>
                <p>Fully responsive layouts tested across all device sizes, with touch-friendly navigation and fast image loading on mobile connections.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">📊</div>
                <h4>Analytics Integration</h4>
                <p>Google Analytics 4 and Search Console setup, with goal tracking for product views, form submissions, and contact page visits.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">🧩</div>
                <h4>CMS Integration</h4>
                <p>Easy-to-use content management so the client can update products, add new items, and manage stock without developer involvement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="cs__section cs__section--dark">
          <div className="cs__container">
            <h2 className="cs__heading cs__heading--white">The Results</h2>
            <p className="cs__subtext cs__subtext--white">
              Three months after launch, the numbers spoke for themselves.
            </p>
            <div className="cs__results_grid">
              <div className="cs__result_card">
                <div className="cs__result_number">60%</div>
                <div className="cs__result_label">Increase in organic search traffic</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">40%</div>
                <div className="cs__result_label">Faster average page load time</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">2×</div>
                <div className="cs__result_label">More product page sessions from mobile</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">98</div>
                <div className="cs__result_label">Google Lighthouse performance score</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cs__cta_section">
          <div className="cs__container">
            <h2 className="cs__cta_heading">Need a Website That Actually Performs?</h2>
            <p className="cs__cta_text">
              We rebuild websites that are fast, SEO-ready, and easy to manage — so you can focus on growing your business, not fixing your site.
            </p>
            <Link href="/contact" className="cs__cta_btn">Start Your Project →</Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
