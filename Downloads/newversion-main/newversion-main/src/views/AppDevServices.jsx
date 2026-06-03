'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import '../styles/services.css';
import { Bot } from 'lucide-react';

export default function AppDevServices() {
  return (
    <div className="services-main-page">
      <Navbar />
      
      <main className="sections-container" style={{ paddingTop: '8rem' }}>
        <div className="services-breadcrumb-holder">
          <Breadcrumb />
        </div>
        
        <section className="scroll-target-section app-theme">
          <div className="section-head">
            <span className="section-badge-tag">Service Detail</span>
            <h2>AI Web Application Development</h2>
            <div className="accent-glow-line"></div>
          </div>
          
          <div className="inner-dark-card">
            <div className="card-illustration-row">
              <Bot size={40} className="glow-icon" />
            </div>
            <h3>Intelligent Portal &amp; Agent Automations</h3>
            <p>
              Transform standard workflows into self-learning engines. We safely wrap Large Language Models (LLMs) with secure API gateways, allowing internal systems to read data securely, automate tracking pipelines, and forecast usage trends safely.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}