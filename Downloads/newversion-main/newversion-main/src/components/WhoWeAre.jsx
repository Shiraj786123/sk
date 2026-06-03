'use client';
import React, { useEffect } from 'react';
import '../styles/whoweare.css';

const WhoWeAreSection = () => {

  // Drag scroll
  useEffect(() => {
    const sliders = document.querySelectorAll('.tech-scroll-row');

    sliders.forEach((slider) => {
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });

      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });

      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
      });
    });
  }, []);

  const rows = [
    [
      {
        title: 'Programming Languages',
        cols: 6,
        items: [
          { name: 'Java',       icon: '/images/java.svg' },
          { name: 'JavaScript', icon: '/images/javascript.svg' },
          { name: 'TypeScript', icon: '/images/typescript.svg' },
          { name: 'Python',     icon: '/images/python.svg' },
          { name: 'C#',         icon: '/images/cpp.svg' },
          { name: 'PHP',        icon: '/images/php.svg' },
        ]
      },
      {
        title: 'Frameworks & Development',
        cols: 6,
        items: [
          { name: 'React',       icon: '/images/react.svg' },
          { name: 'Next.js',     icon: '/images/next.svg' },
          { name: 'Angular',     icon: '/images/angular.svg' },
          { name: 'Node.js',     icon: '/images/node.svg' },
          { name: 'Spring Boot', icon: '/images/springboot.svg' },
          { name: 'Vue.js',      icon: '/images/vue.svg' },
        ]
      },
      {
        title: 'CMS & E-Commerce',
        cols: 5,
        items: [
          { name: 'WordPress',   icon: '/images/wordpress.svg' },
          { name: 'Shopify',     icon: '/images/shopify.svg' },
          { name: 'WooCommerce', icon: '/images/woocommerce.svg' },
          { name: 'Webflow',     icon: '/images/webflow.svg' },
          { name: 'Magento',     icon: '/images/magento.svg' },
        ]
      },
      {
        title: 'Cloud & Infrastructure',
        cols: 4,
        items: [
          { name: 'AWS',         icon: '/images/aws.svg' },
          { name: 'Docker',      icon: '/images/docker.svg' },
          { name: 'Google Cloud',icon: '/images/googlecloud.svg' },
          { name: 'Kubernetes',  icon: '/images/kubernetes.svg' },
        ]
      },
      {
        title: 'AI & Automation',
        cols: 4,
        items: [
          { name: 'OpenAI',      icon: '/images/chatgpt.svg' },
          { name: 'Chatbots',    icon: '/images/chatbots.svg' },
          { name: 'TensorFlow',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
          { name: 'LangChain',   icon: '/images/chatgpt.svg' },
        ]
      },
    ]
  ];

  return (
    <section className="whoweare-section">
      <div className="whoweare-container">

        {/* Header */}
        <div className="whoweare-header">
          <h2 className="whoweare-title">
            Who We Are & Why Choose <span className="highlight">Zonzoctech</span>
          </h2>
          <p className="whoweare-description">
            At Zonzoctech, we're more than just a digital agency—we're your growth partner.
            With over a decade of experience, we specialize in building modern websites,
            boosting visibility through smart SEO, and integrating cutting-edge AI technologies
            to future-proof your business.
          </p>
          <h3 className='technologystack'>OUR TECHNOLOGY STACK</h3>
        </div>

        {/* SINGLE ROW */}
        <div className="tech-rows-container">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="tech-scroll-row">
              <div className="tech-cards-track tech-cards-track-1">
                {row.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="tech-category-card">
                    <h3 className="category-title">{category.title}</h3>

                    <div
                      className="tech-items-wrapper"
                      style={{ gridTemplateColumns: `repeat(${category.cols}, 1fr)` }}
                    >
                      {category.items.map((tech, index) => (
                        <div key={index} className="tech-item">
                          <div className="tech-icon-circle">
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="tech-svg-icon"
                            />
                          </div>
                          <p className="tech-label">{tech.name}</p>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhoWeAreSection;
