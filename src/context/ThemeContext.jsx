import { createContext, useState } from "react";

// Create a context object.
// This will allow us to share theme data across the component tree
// without manually passing props at every level.
export const ThemeContext = createContext();


// ThemeProvider component
// This component wraps around other components and provides them
// access to the theme state.
const ThemeProvider = ({ children }) => {

    // Create a state variable to store the current theme.
    // Default value is 'light'.
    const [theme, setTheme] = useState('light');

    return (
        // The Provider makes the theme and setTheme function
        // available to all components inside it.
        <ThemeContext.Provider value={{ theme, setTheme }}>
            
            {/* 
              children represents whatever components are wrapped
              inside <ThemeProvider> in App.js or elsewhere.
              Those components can now access theme using useContext.
            */}
            {children}

        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

