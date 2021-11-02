import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

export const ThemeContext = createContext();


/**
 * 
 * @param {string} preferred 'light' || 'dark' etc...
 * @returns object
 */
export const ThemeProvider = ({ children, preferred, ...props }) => {
    // Uncomment this if statement when building for production as Node 
    // doesn't know what thedocument object is.

    // if (typeof document === 'undefined') {
    //     return null;
    // }

    const [currentTheme, setCurrentTheme] = useState(preferred ? preferred : 'light');

    /**
     * 
     * @param {{light: any, dark: any}} variants 
     * @returns any
     */
    const theme = (variants) => {
        return variants[currentTheme];
    }

    const restoreTheme = () => {
        setCurrentTheme(
            localStorage.getItem('theme')
        );
    }

    const toggleTheme = () => {
        const newTheme = currentTheme === 'light'
            ? 'dark' 
            : 'light';

        document.documentElement.className = newTheme;
        setCurrentTheme(newTheme);
    }

    const observer = useMemo(() => {
        return new MutationObserver(([element]) => {
            if (element.target.classList) {
                const [style] = element.target.classList;
                if (style) {
                    setCurrentTheme(style);
                }
            }
        });
    }, []);

    useEffect(() => {
        observer.observe(document.documentElement, { attributes: true });

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setCurrentTheme('dark');
        }

        return () => {
            observer.disconnect();
        }
    }, [currentTheme, observer])
    
    return (
        <ThemeContext.Provider
            value={{
                theme,
                currentTheme,
                setCurrentTheme,
                toggleTheme,
                restoreTheme,
            }}
        >
            { children }
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);

export default useTheme;