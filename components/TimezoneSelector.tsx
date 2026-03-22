import React, { useState } from 'react';

const TimezoneSelector = () => {
    const [timezones, setTimezones] = useState([]);
    const [timezoneInput, setTimezoneInput] = useState('');

    const addTimezone = () => {
        if (timezoneInput && !timezones.includes(timezoneInput)) {
            setTimezones([...timezones, timezoneInput]);
            setTimezoneInput('');
        }
    };

    const removeTimezone = (timezone) => {
        setTimezones(timezones.filter(tz => tz !== timezone));
    };

    return (
        <div>
            <h2>Timezone Selector</h2>
            <input
                type="text"
                value={timezoneInput}
                onChange={(e) => setTimezoneInput(e.target.value)}
                placeholder="Enter timezone"
            />
            <button onClick={addTimezone}>Add</button>
            <ul>
                {timezones.map((timezone, index) => (
                    <li key={index}>
                        {timezone} <button onClick={() => removeTimezone(timezone)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TimezoneSelector;