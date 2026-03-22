import React from 'react';
import './ToolsSection.css'; // Ensure you create this CSS file for styles

const ToolsSection = () => {
    const tools = [
        { name: 'Lot ölçü kalkulyatoru' },
        { name: 'Risk kalkulyatoru' },
        { name: 'Pip kalkulyatoru' },
        { name: 'Margin kalkulyatoru' }
    ];

    return (
        <div className="tools-section">
            <h2>Forex Tools</h2>
            <div className="grid-container">
                {tools.map((tool, index) => (
                    <div key={index} className="tool-card animate__animated animate__fadeIn">
                        <h3>{tool.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToolsSection;