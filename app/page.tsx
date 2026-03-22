import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolsSection from './components/ToolsSection';
import Features from './components/Features';
import Stats from './components/Stats';
import DigitalClock from './components/DigitalClock';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ToolsSection />
            <Features />
            <Stats />
            <DigitalClock />
            <CTASection />
            <Footer />
        </div>
    );
};

export default App;