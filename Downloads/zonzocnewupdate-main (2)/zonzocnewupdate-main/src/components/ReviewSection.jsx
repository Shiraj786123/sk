'use client';
import React from 'react';
import '../styles/Review.css';

const ReviewsSection = () => {
  const reviews = [
    { id: 1, text: "Working with ZonzocTech transformed our store. Traffic doubled and conversions improved significantly within 3 months of our launch.", name: "Sarah Thompson", username: "E-commerce Owner, UK", photo: "https://i.pravatar.cc/150?u=sarah" },
    { id: 2, text: "The mobile app they built for us is fast and intuitive. It is perfectly aligned with our brand identity and user needs.", name: "David Martinez", username: "SaaS Founder, USA", photo: "https://i.pravatar.cc/150?u=david_male" },
    { id: 3, text: "Excellent communication throughout the project. Fast delivery, no surprises, and the results clearly speak for themselves.", name: "Emily Carter", username: "Marketing Director, UK", photo: "https://i.pravatar.cc/150?u=emily" },
    { id: 4, text: "Their team provided innovative AI solutions that streamlined our workflows. Truly a game-changer for our firm's operations.", name: "Michael Chen", username: "Operations Manager, SG", photo: "https://i.pravatar.cc/150?u=michael_male" }
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-top-row">
          <div className="rating-box">
            <h1 className="rating-number">4.9</h1>
            <div className="rating-stars">⭐⭐⭐⭐⭐</div>
            <div className="reviews-count">50+ Reviews</div>
          </div>
          <div className="reviews-heading-box">
            <h2 className="reviews-heading">What Our Clients Say</h2>
            <p className="reviews-sub">Don't take our word for it. Here's what businesses we've worked with have to say.</p>
          </div>
        </div>

        <div className="review-cards-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="quote">"</div>
              <div className="card-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">{review.text}</p>
              <div className="reviewer-info">
                <img src={review.photo} alt={review.name} className="reviewer-photo" />
                <div className="reviewer-details">
                  <p className="name">{review.name}</p>
                  <p className="username">{review.username}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;