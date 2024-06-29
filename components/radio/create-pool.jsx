import React, { memo, useState , useCallback } from 'react';

function RadioButtons() {
    const [choice, setChoice] = useState('yes'); // Initialize state with an empty string or default value

    const handleRadioChange = useCallback((event) => {
        setChoice(event.target.value); // Update state with the value of the selected radio button
    });

    return (
        <div className="flex items-center space-x-4">
            <div>
                <label className="text-xs flex items-center space-x-1">
                    <input
                        type="radio"
                        name="choice"
                        value="yes"
                        checked={choice === 'yes'} // Check if 'yes' is selected
                        onChange={handleRadioChange}
                        className={`
                            appearance-none peer
                            col-start-1 row-start-1 shrink-0
                            w-4 h-4 border-4 border-white rounded-full
                            ${choice === 'yes' ? 'bg-aqua' : 'bg-white opacity-30'}
                        `}
                    />
                    <span>Yes</span>
                </label>
            </div>
            <div>
                <label className="text-xs flex items-center space-x-1">
                    <input
                        type="radio"
                        name="choice"
                        value="no"
                        checked={choice === 'no'} // Check if 'no' is selected
                        onChange={handleRadioChange}
                        className={`
                            appearance-none peer
                            col-start-1 row-start-1 shrink-0
                            w-4 h-4 border-4 border-white rounded-full
                            ${choice === 'no' ? 'bg-aqua' : 'bg-white opacity-30'}
                        `}
                    />
                    <span>No</span>
                </label>
            </div>
        </div>
    );
}

export default memo(RadioButtons);
