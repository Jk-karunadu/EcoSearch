
// components/GreenAI.js
import React from 'react';

const GreenAI = () => {
  return (
    <section className="green-ai">
      <div className="container">
        <h1 className="green-ai-title">
          World's first <span className="green-text">Green</span> AI
        </h1>
        <div className="waitlist-form">
          <input 
            type="email" 
            placeholder="name@email.com" 
            className="email-input" 
          />
          <button className="waitlist-button">Join the waitlist</button>
        </div>
      </div>
    </section>
  );
};

export default GreenAI;