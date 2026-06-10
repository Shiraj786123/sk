'use client';
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/whoweare.css';

const WhoWeAreSection = () => {
  const allTech = [
    // Row 1 items
    { name: 'JavaScript', icon: '/images/javascript.svg' },
    { name: 'TypeScript', icon: '/images/typescript.svg' },
    { name: 'Python', icon: '/images/python.svg' },
    { name: 'C#', icon: '/images/cpp.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Docker', icon: '/images/docker.svg' },
    { name: 'Java', icon: '/images/java.svg' },
    { name: 'PHP', icon: '/images/php.svg' },
    { name: 'Next.js', icon: '/images/next.svg' },
    { name: 'Angular', icon: '/images/angular.svg' },
    { name: 'Node.js', icon: '/images/node.svg' },

    // Row 2 items
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Symfony', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' },
    { name: 'Spring Boot', icon: '/images/springboot.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Vue.js', icon: '/images/vue.svg' },
    { name: 'React.js', icon: '/images/react.svg' },
    { name: 'Strapi', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/strapi.svg' },
    { name: 'WordPress', icon: '/images/wordpress.svg' },
    { name: 'Webflow', icon: '/images/webflow.svg' },
    { name: 'WooCommerce', icon: '/images/woocommerce.svg' },

    // Row 3 items
    { name: 'MySQL', icon: '/images/mysql.svg' },
    { name: 'PostgreSQL', icon: '/images/postgresql.svg' },
    { name: 'MongoDB', icon: '/images/mongodb.svg' },
    { name: 'Redis', icon: '/images/redis.svg' },
    { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
    { name: 'Shopify', icon: '/images/shopify.svg' },
    { name: 'AWS', icon: '/images/aws.svg' },
    { name: 'Google Cloud', icon: '/images/googlecloud.svg' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'DigitalOcean', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg' },
    { name: 'Cloudflare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg' }
  ];

  // Distribute technologies across 3 rows
  const row1 = allTech.slice(0, 11);
  const row2 = allTech.slice(11, 21);
  const row3 = allTech.slice(21);

  // Duplicate items for a seamless, continuous infinite loop
  const row1Items = [...row1, ...row1];
  const row2Items = [...row2, ...row2];
  const row3Items = [...row3, ...row3];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

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
            boosting visibility through smart SEO, and integrating cutting-edge AI technologies.
          </p>
          <h3 className="technologystack">OUR TECHNOLOGY STACK</h3>
        </div>
      </div>

      {/* 3-Row Infinite Marquee Wrapper */}
      <motion.div 
        className="marquee-wrapper"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* Row 1 - Moves Left */}
        <div className="marquee-track marquee-track-left">
          {row1Items.map((tech, index) => (
            <div key={`row1-${index}`} className="tech-pill">
              <img src={tech.icon} alt={tech.name} className="tech-pill-icon" />
              <span className="tech-pill-label">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2 - Moves Right */}
        <div className="marquee-track marquee-track-right">
          {row2Items.map((tech, index) => (
            <div key={`row2-${index}`} className="tech-pill">
              <img src={tech.icon} alt={tech.name} className="tech-pill-icon" />
              <span className="tech-pill-label">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Row 3 - Moves Left */}
        <div className="marquee-track marquee-track-left">
          {row3Items.map((tech, index) => (
            <div key={`row3-${index}`} className="tech-pill">
              <img src={tech.icon} alt={tech.name} className="tech-pill-icon" />
              <span className="tech-pill-label">{tech.name}</span>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default WhoWeAreSection;