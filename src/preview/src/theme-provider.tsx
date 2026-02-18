import React, { useEffect, useState, createContext, useContext } from "react";

interface ThemeData {
  version: string;
  radius: string;
  fonts: { sans: string; mono: string; imports: string[] };
  light: Record<string, string>;
  dark: Record<string, string>;
}

interface ThemeContextValue {
  theme: ThemeData | null;
  isDark: boolean;
  toggleDark: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: null,
  isDark: false,
  toggleDark: () => {},
});

export const useTheme = () => useContext(ThemeContext);

declare const __INITIAL_THEME__: ThemeData | undefined;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeData | null>(
    typeof __INITIAL_THEME__ !== "undefined" ? __INITIAL_THEME__ : null,
  );
  const [isDark, setIsDark] = useState(false);

  // Listen for live theme updates from CLI via Vite WebSocket
  useEffect(() => {
    if (import.meta.hot) {
      import.meta.hot.on("temper:theme-update", (data: ThemeData) => {
        setTheme(data);
      });
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (!theme) return;

    const root = document.documentElement;
    const tokens = isDark ? theme.dark : theme.light;

    // Set CSS custom properties
    root.style.setProperty("--radius", theme.radius);
    root.style.setProperty("--font-sans", theme.fonts.sans);
    root.style.setProperty("--font-mono", theme.fonts.mono);

    for (const [key, value] of Object.entries(tokens)) {
      root.style.setProperty(`--${key}`, value);
    }

    // Load Google Fonts
    const existingLinks = document.querySelectorAll(
      'link[data-temper-font]',
    );
    existingLinks.forEach((el) => el.remove());

    for (const url of theme.fonts.imports) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      link.setAttribute("data-temper-font", "true");
      document.head.appendChild(link);
    }
  }, [theme, isDark]);

  const toggleDark = () => setIsDark((d) => !d);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
