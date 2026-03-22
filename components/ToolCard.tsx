import React from 'react';
import './ToolCard.css';

const ToolCard = ({ icon, title, description }) => {
    return (
        <div className="tool-card">
            <div className="tool-icon">
                <img src={icon} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ToolCard;
