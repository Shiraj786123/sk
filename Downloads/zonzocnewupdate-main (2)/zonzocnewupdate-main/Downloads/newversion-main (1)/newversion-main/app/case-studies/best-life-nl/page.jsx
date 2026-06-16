import Link from 'next/link';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import '@/src/styles/CaseStudyPage.css';

export const metadata = {
  title: 'Best Life NL Case Study | ZonzocTech',
  description: 'How ZonzocTech designed and built best-life.nl — a lifestyle and wellness brand website with clear identity, SEO content structure, and a growing email audience.',
  alternates: { canonical: 'https://zonzoctech.com/case-studies/best-life-nl' },
};

export default function BestLifeNLCaseStudy() {
  return (
    <>
      <Navbar />
      <div className="cs__wrapper">

        {/* HERO */}
        import Link from 'next/link'; // Ensure Link is imported if not already in the file

// ... inside your component:

<section className="cs__hero">
  <div className="cs__hero_inner">
    {/* Centered Breadcrumb */}
    <nav className="cs__breadcrumb">
      <Link href="/">HOME</Link>
      <span className="cs__breadcrumb_separator">&gt;</span>
      <Link href="/case-studies">CASE STUDIES</Link>
      <span className="cs__breadcrumb_separator">&gt;</span>
      <span className="cs__breadcrumb_active">BEST LIFE NL</span>
    </nav>

    <h1 className="cs__hero_title">Best Life NL</h1>
    <p className="cs__hero_sub">
      Brand-focused website design and SEO content strategy for a Dutch lifestyle and wellness brand — doubling session duration and building a loyal returning audience.
    </p>
    <div className="cs__tags">
      <span className="cs__tag">Website Design</span>
      <span className="cs__tag">Content Strategy</span>
      <span className="cs__tag">SEO</span>
      <span className="cs__tag">Email Integration</span>
    </div>
    <div className="cs__hero_links">
      <a href="https://best-life.nl" target="_blank" rel="noopener noreferrer" className="cs__live_btn">
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
              <a href="/images/projects/best-life-nl-1.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/best-life-nl-1.png" alt="Best Life NL homepage" className="cs__gallery_img" />
              </a>
              <a href="/images/projects/best-life-nl-2.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/best-life-nl-2.png" alt="Best Life NL content section" className="cs__gallery_img" />
              </a>
              <a href="/images/projects/best-life-nl-3.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/best-life-nl-3.png" alt="Best Life NL blog and newsletter" className="cs__gallery_img" />
              </a>
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="cs__section cs__section--alt">
          <div className="cs__container">
            <h2 className="cs__heading">The Challenge</h2>
            <p className="cs__subtext">
              Best Life NL had strong ideas and great content but no cohesive online presence — scattered across social media with no central brand hub, no SEO strategy, and no way to capture and retain their audience.
            </p>
            <div className="cs__challenge_grid">
              <div className="cs__challenge_box">
                <h3>Problems We Found</h3>
                <ul>
                  <li>No website — brand lived only on social media</li>
                  <li>No central destination to capture and nurture leads</li>
                  <li>Inconsistent brand identity across channels</li>
                  <li>No email list or newsletter system in place</li>
                  <li>Zero SEO presence for lifestyle and wellness keywords</li>
                </ul>
              </div>
              <div className="cs__challenge_box">
                <h3>Our Goals</h3>
                <ul>
                  <li>Design a website that reflects the brand clearly and beautifully</li>
                  <li>Build an SEO content structure to attract organic readers</li>
                  <li>Integrate email newsletter sign-ups across key touchpoints</li>
                  <li>Create a blog that keeps visitors coming back regularly</li>
                  <li>Drive social traffic to a central owned platform</li>
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
              A brand-first website with the content architecture and integrations needed to grow an audience and keep them engaged.
            </p>
            <div className="cs__built_grid">
              <div className="cs__built_item">
                <div className="cs__built_icon">✨</div>
                <h4>Brand Identity Website</h4>
                <p>Clean, warm, and lifestyle-focused design that immediately communicates the Best Life NL brand — with purposeful typography, colour, and imagery direction.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">📝</div>
                <h4>Blog &amp; Content Hub</h4>
                <p>Structured editorial blog with categories, tags, related posts, and reading time indicators — designed to keep visitors exploring.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">📧</div>
                <h4>Newsletter Integration</h4>
                <p>Email sign-up forms integrated throughout the site with Mailchimp — including a lead magnet landing page to accelerate list growth.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">🔍</div>
                <h4>SEO Content Strategy</h4>
                <p>Keyword research, meta structure, internal linking, and an editorial calendar targeting high-intent Dutch lifestyle search terms.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">📱</div>
                <h4>Mobile-First Design</h4>
                <p>Fully responsive layout optimised for the social-first audience who arrive on mobile — fast, readable, and scroll-friendly.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">🔗</div>
                <h4>Social Integration</h4>
                <p>Instagram feed embed, social share buttons, and Open Graph tags ensuring every shared link displays beautifully across all platforms.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="cs__section cs__section--dark">
          <div className="cs__container">
            <h2 className="cs__heading cs__heading--white">The Results</h2>
            <p className="cs__subtext cs__subtext--white">
              A brand with a real online home — and a growing community of loyal readers and subscribers.
            </p>
            <div className="cs__results_grid">
              <div className="cs__result_card">
                <div className="cs__result_number">2×</div>
                <div className="cs__result_label">Average session duration vs industry benchmark</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">Growing</div>
                <div className="cs__result_label">Email subscriber list built from zero</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">Page 1</div>
                <div className="cs__result_label">Google rankings for target lifestyle keywords</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">40%</div>
                <div className="cs__result_label">Of traffic now returning visitors</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cs__cta_section">
          <div className="cs__container">
            <h2 className="cs__cta_heading">Ready to Turn Your Brand Into a Platform?</h2>
            <p className="cs__cta_text">
              We design websites that reflect your identity, attract your audience, and give you an owned channel that grows with you.
            </p>
            <Link href="/contact" className="cs__cta_btn">Start Your Project →</Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
