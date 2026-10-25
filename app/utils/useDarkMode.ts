'use client'
import { useEffect, useState } from "react";

// Tracks the "dark" class on <html> so every component stays in sync with the theme toggle.
export function useDarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        const update = () => setDarkMode(root.classList.contains("dark"));
        update();
        const observer = new MutationObserver(update);
        observer.observe(root, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    const toggle = () => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    return { darkMode, toggle };
}
