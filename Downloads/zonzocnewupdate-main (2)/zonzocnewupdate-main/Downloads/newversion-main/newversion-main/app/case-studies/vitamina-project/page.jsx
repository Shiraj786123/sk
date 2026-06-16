import Link from 'next/link';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import '@/src/styles/CaseStudyPage.css';

export const metadata = {
  title: 'Vitamina Project Case Study | ZonzocTech',
  description: 'How ZonzocTech built a scalable multi-portal e-commerce system for Vitamina — including admin portal, vendor portal, and native mobile apps for iOS and Android.',
  alternates: { canonical: 'https://zonzoctech.com/case-studies/vitamina-project' },
};

export default function VitaminaProjectCaseStudy() {
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
      <span className="cs__breadcrumb_active">VITAMINA PROJECT</span>
    </nav>

    <h1 className="cs__hero_title">Vitamina Project</h1>
    <p className="cs__hero_sub">
      End-to-end e-commerce ecosystem — admin portal, vendor portal, iOS app, and Android app — built to handle a multi-vendor marketplace at scale.
    </p>
    <div className="cs__tags">
      <span className="cs__tag">E-Commerce Development</span>
      <span className="cs__tag">Mobile Apps</span>
      <span className="cs__tag">Multi-Vendor System</span>
      <span className="cs__tag">Angular &amp; Node.js</span>
    </div>
    <div className="cs__hero_links">
      <Link href="/contact" className="cs__live_btn">Discuss a Similar Project</Link>
      <Link href="/contact" className="cs__outline_btn">Start Your Project</Link>
    </div>
  </div>
</section>
        {/* GALLERY */}
        <section className="cs__section">
          <div className="cs__container">
            <div className="cs__gallery">
              <a href="/images/projects/vitamina-project-1.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/vitamina-project-1.png" alt="Vitamina admin portal" className="cs__gallery_img" />
              </a>
              <a href="/images/projects/vitamina-project-2.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/vitamina-project-2.png" alt="Vitamina vendor portal" className="cs__gallery_img" />
              </a>
              <a href="/images/projects/vitamina-project-3.png" target="_blank" rel="noopener noreferrer">
                <img src="/images/projects/vitamina-project-3.png" alt="Vitamina mobile app" className="cs__gallery_img" />
              </a>
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="cs__section cs__section--alt">
          <div className="cs__container">
            <h2 className="cs__heading">The Challenge</h2>
            <p className="cs__subtext">
              Vitamina needed a complex multi-vendor e-commerce platform built from scratch — with separate portals for admin and vendors, plus native mobile apps for end customers on both iOS and Android.
            </p>
            <div className="cs__challenge_grid">
              <div className="cs__challenge_box">
                <h3>Problems We Solved</h3>
                <ul>
                  <li>No platform capable of handling multiple vendor catalogues</li>
                  <li>No mobile presence — customers were desktop-only</li>
                  <li>Complex permission system needed for admin vs vendor roles</li>
                  <li>Real-time inventory and order management required</li>
                  <li>Secure payment processing across multiple vendors</li>
                </ul>
              </div>
              <div className="cs__challenge_box">
                <h3>Our Goals</h3>
                <ul>
                  <li>Build admin and vendor portals with separate role access</li>
                  <li>Develop native iOS and Android user-facing apps</li>
                  <li>Implement real-time order and inventory management</li>
                  <li>Integrate secure payment gateways with vendor payouts</li>
                  <li>Deliver a scalable system ready to grow with the business</li>
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
              A complete multi-portal ecosystem spanning web and mobile — built on Angular, Node.js, MongoDB, and Firebase.
            </p>
            <div className="cs__built_grid">
              <div className="cs__built_item">
                <div className="cs__built_icon">🏢</div>
                <h4>Admin Portal</h4>
                <p>Full-featured administration dashboard with vendor management, order oversight, analytics, product approval workflows, and financial reporting.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">🏪</div>
                <h4>Vendor Portal</h4>
                <p>Dedicated vendor interface for product listing, inventory management, order fulfilment, and earnings tracking — with real-time notifications.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">📱</div>
                <h4>iOS Customer App</h4>
                <p>Native Swift iOS app with product browsing, cart, checkout, order tracking, and push notifications — optimised for iPhone and iPad.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">🤖</div>
                <h4>Android Customer App</h4>
                <p>Native Android app (Android Studio/Java) mirroring all iOS features — consistent experience across both platforms.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">🔄</div>
                <h4>Real-Time Sync</h4>
                <p>Firebase-powered real-time data sync across all portals and apps — inventory, orders, and notifications update instantly system-wide.</p>
              </div>
              <div className="cs__built_item">
                <div className="cs__built_icon">💳</div>
                <h4>Payment Integration</h4>
                <p>Secure payment gateway integration with automated vendor payout splitting, refund management, and full transaction audit trails.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="cs__section cs__section--dark">
          <div className="cs__container">
            <h2 className="cs__heading cs__heading--white">The Results</h2>
            <p className="cs__subtext cs__subtext--white">
              A fully operational multi-vendor marketplace running across web and mobile — ready to scale.
            </p>
            <div className="cs__results_grid">
              <div className="cs__result_card">
                <div className="cs__result_number">4</div>
                <div className="cs__result_label">Platforms built: admin, vendor, iOS, Android</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">80%</div>
                <div className="cs__result_label">Increase in online sales after launch</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">3×</div>
                <div className="cs__result_label">Higher mobile conversion rate vs old site</div>
              </div>
              <div className="cs__result_card">
                <div className="cs__result_number">Real-time</div>
                <div className="cs__result_label">Order and inventory sync across all platforms</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cs__cta_section">
          <div className="cs__container">
            <h2 className="cs__cta_heading">Building a Complex Platform?</h2>
            <p className="cs__cta_text">
              Whether it's a multi-vendor marketplace, a mobile app, or a custom web system — we design and build scalable digital products from the ground up.
            </p>
            <Link href="/contact" className="cs__cta_btn">Discuss Your Project →</Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
