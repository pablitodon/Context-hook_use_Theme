
import React, { createContext, useContext, useState } from "react";

interface IContextTheme {
    isDark: boolean,
    toggleTheme: () => void,
}

export const ThemeContext = createContext<IContextTheme | undefined>(undefined)


export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('Ошибка контекста: ThemeContext должен использоваться внутри ThemeProvider');
    }
    return context;
};



interface ThemeProviderProps {
    children: React.ReactNode
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = () => {
        setIsDark(prevState => !prevState)
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}   