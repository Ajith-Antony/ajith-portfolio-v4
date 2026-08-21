import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';
export type AestheticMode = 'swiss' | 'editorial' | 'cyber';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  aesthetic: AestheticMode;
  setAesthetic: (aesthetic: AestheticMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [aesthetic, setAesthetic] = useState<AestheticMode>('swiss');

  useEffect(() => {
    const root = document.documentElement;
    
    // Manage Light/Dark classes
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // Manage Aesthetic classes
    root.classList.remove('aesthetic-swiss', 'aesthetic-editorial', 'aesthetic-cyber');
    root.classList.add(`aesthetic-${aesthetic}`);
  }, [theme, aesthetic]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, aesthetic, setAesthetic }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
