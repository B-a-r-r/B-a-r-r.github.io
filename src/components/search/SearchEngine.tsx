import { createContext, useState, ReactNode } from "react";

interface SearchContextType {
  toMatch: string[];
  setToMatch: React.Dispatch<React.SetStateAction<string[]>>;
}

const SearchContext = createContext<SearchContextType>({
  toMatch: ["All"],
  setToMatch: () => {},
});

const SearchEngine = ({ children }: { children: ReactNode }) => {
  const [toMatch, setToMatch] = useState<Array<string>>([]);

  return (
    <SearchContext.Provider value={{ toMatch, setToMatch }}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchEngine }
