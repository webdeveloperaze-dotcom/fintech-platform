import React from 'react';
import { useEffect, useState } from 'react';

const Stats = () => {
    const [usersCount, setUsersCount] = useState(0);
    const [calculationsCount, setCalculationsCount] = useState(0);
    const [accuracy, setAccuracy] = useState(0);

    useEffect(() => {
        // Simulate fetching data or animation
        const interval = setInterval(() => {
            setUsersCount(prev => prev + 1);
            setCalculationsCount(prev => prev + Math.floor(Math.random() * 10));
            setAccuracy(prev => Math.min(prev + Math.random() * 2, 100));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Animated Statistics</h1>
            <div>
                <h2>Users Count: {usersCount}</h2>
                <h2>Calculations Count: {calculationsCount}</h2>
                <h2>Accuracy: {Math.round(accuracy)}%</h2>
            </div>
        </div>
    );
};

export default Stats;