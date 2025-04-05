
// components/Features.js
import React from 'react';
import { LeafIcon, XIcon, CirclesIcon } from './Icons';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          <div className="feature-item">
            <LeafIcon />
            <h2 className="feature-title">
              <span className="underline">Optimized Search</span>
            </h2>
            <p className="feature-description">
              We provide quality search results, reducing energy consumption by 300%
            </p>
          </div>
          
          <div className="feature-item">
            <XIcon />
            <h2 className="feature-title">
              <span className="underline">Privacy First</span>
            </h2>
            <p className="feature-description">
              We don't collect or store any data. We are privacy focused ai search engine.
            </p>
          </div>
          
          <div className="feature-item">
            <CirclesIcon />
            <h2 className="feature-title">
              <span className="underline">Minimal Design</span>
            </h2>
            <p className="feature-description">
              Our Design System is minimal to reduce the carbon footprints with user interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;