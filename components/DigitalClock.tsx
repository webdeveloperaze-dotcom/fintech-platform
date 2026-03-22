import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DigitalClock: React.FC = () => {
    const [time, setTime] = useState(new Date());
    const timezones = [
        'UTC',
        'America/New_York',
        'Europe/London',
        'Asia/Tokyo',
        'Australia/Sydney',
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '20px', backdropFilter: 'blur(10px)', padding: '20px' }}>
            {timezones.map((timezone) => {
                const localTime = new Date(time.toLocaleString('en-US', { timeZone: timezone }));
                return (
                    <motion.div key={timezone} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ fontSize: '24px', color: '#333', margin: '10px 0' }}>
                        {`${timezone}: ${localTime.toISOString().slice(0, 19).replace('T', ' ')}`}
                    </motion.div>
                );
            })}
        </div>
    );
};

export default DigitalClock;