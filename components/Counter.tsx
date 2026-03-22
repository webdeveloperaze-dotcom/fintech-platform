import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Counter = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2; // seconds
    const stepTime = duration / endValue;
    let currentValue = 0;
    const increment = () => {
      if (currentValue < endValue) {
        currentValue += 1;
        setCount(currentValue);
        setTimeout(increment, stepTime * 1000);
      }
    };
    increment();
  }, [endValue]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>{count}</h1>
    </motion.div>
  );
};

export default Counter;