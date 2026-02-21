import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Button component that changes the theme
const ThemeButton = () => {

    // Access the setTheme function from ThemeContext
    // We don't need the current theme value here, only the updater
    const { setTheme } = useContext(ThemeContext);

    // This function updates the theme when button is clicked
    const handleThemeChange = () => {
        setTheme('black'); // change theme to black
    };

    return (
        <div>
            {/* When clicked, theme will change */}
            <button onClick={handleThemeChange}>
                Change To Dark Theme
            </button>
        </div>
    );
};

export default ThemeButton;






