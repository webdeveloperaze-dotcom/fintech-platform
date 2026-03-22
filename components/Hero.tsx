import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div style={{ background: 'linear-gradient(...your gradient colors)', position: 'relative' }}>
      <img src="path/to/trading-graphics.png" alt="Trading Graphics" style={{ position: 'absolute', zIndex: -1 }} />
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Peşəkarlar üçün qabaqcıl Forex alətləri</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Dəqiq, sürətli və real-time hesablamalar ilə ticarətinizi optimallaşdırın</motion.p>
      <div>
        <button className="cta-primary">Primary CTA</button>
        <button className="cta-secondary">Secondary CTA</button>
      </div>
    </div>
  );
};

export default Hero;
