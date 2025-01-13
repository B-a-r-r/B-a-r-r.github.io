import { createContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextType {
    currentTheme: string;
    setCurrentTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextType>({
    currentTheme: "light",
    setCurrentTheme: () => {},
});

const ThemeEngine = ({ children }: { children: ReactNode }) => {
    const [currentTheme, setCurrentTheme] = useState<string>("light");

    useEffect(() => {
        if (currentTheme === "dark") {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        }
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
        {children}
        </ThemeContext.Provider>
    )
}

export { ThemeEngine, ThemeContext };
