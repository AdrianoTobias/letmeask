import { useState } from 'react';
import { useEffect } from 'react';
import { ReactNode } from 'react';
import { createContext } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme : Theme;
    toggleTheme: () => void;
}

type ThemeContextProviderProps = {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider(props: ThemeContextProviderProps) {
    const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
        const storagedTheme = localStorage.getItem('theme');
        
        return (storagedTheme ?? 'light') as Theme;
    });

    useEffect(() => {
        const body = document.body;
        body.classList.remove('light', 'dark');
        body.classList.add(currentTheme);
        
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    function toggleTheme() {
        const isDark = currentTheme === 'dark';
        setCurrentTheme(isDark ? 'light' : 'dark');
    }

    return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        {props.children}
    </ThemeContext.Provider>
    )
}