import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <div className="features-container" id="about">
      <h2>What We Offer</h2>
      <div className="features-grid">
        <div className="feature">
          <h3>Workshops</h3>
          <p>Learn new skills with our expert-led workshops.</p>
        </div>
        <div className="feature">
          <h3>Competitions</h3>
          <p>Showcase your skills and compete with peers.</p>
        </div>
        <div className="feature">
          <h3>Updates</h3>
          <p>Stay informed with the latest club news and events.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
