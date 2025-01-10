import { createContext, Dispatch, SetStateAction, useState, ReactNode } from "react";
import { SortOption } from "../../data/dataTypes";

const SearchContext = createContext(
  {} as { 
    sortData: Array<SortOption>, 
    setSortData: Dispatch<SetStateAction<SortOption[]>> 
  }
);

const SearchEngine = ({ children }: { children: ReactNode }) => {
  const [sortData, setSortData] = useState<Array<SortOption>>([]);

  return (
    <SearchContext.Provider value={{ sortData, setSortData }}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchEngine }
