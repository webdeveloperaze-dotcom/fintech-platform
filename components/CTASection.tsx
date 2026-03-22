import React from 'react';
import './CTASection.css'; // Assuming you will create a CSS file for styles

const CTASection = () => {
    return (
        <div className="cta-section">
            <h2 className="cta-heading">Transform Your Finances Today!</h2>
            <p className="cta-text">
                Join us and take control of your financial future with our innovative solutions.
            </p>
            <div className="cta-buttons">
                <button className="cta-button gradient-button">Get Started</button>
                <button className="cta-button gradient-button">Learn More</button>
            </div>
        </div>
    );
};

export default CTASection;