import { createContext, useState, ReactNode, useEffect, useRef, useContext } from "react";
import { LangContext } from "../language";

interface SearchContextType {
  toMatch: string[];
  setToMatch: React.Dispatch<React.SetStateAction<string[]>>;
}

const SearchContext = createContext<SearchContextType>({
  toMatch: ["ALL"],
  setToMatch: () => {},
});

const SearchEngine = ({ children }: { children: ReactNode }) => {
  const [toMatch, setToMatch] = useState<Array<string>>(["ALL"]);
  const youCanWork = useRef(true);
  const { currentLang } = useContext(LangContext);

  useEffect(() => {
    setToMatch(["ALL"]);
  }, [currentLang]);

  useEffect(() => {
    if (youCanWork.current) {
      if (toMatch.length > 1) {
        setToMatch(
          toMatch.filter((value, index) => toMatch.indexOf(value) === index)
          .filter((value) => (value !== "ALL"))
        );
      } else if (toMatch.length === 0 || toMatch[0] === "") {
        setToMatch(["ALL"]);
      }
    }
    youCanWork.current = !youCanWork.current;
    console.log("SearchEngine: toMatch updated to", toMatch);
  }, [toMatch]);

  return (
    <SearchContext.Provider value={{ toMatch, setToMatch }}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchEngine }
