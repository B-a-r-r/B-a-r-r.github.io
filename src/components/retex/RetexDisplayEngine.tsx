import { createContext, useState, ReactNode } from "react";

interface RetexContextType {
  displayedRetexTitle: string | undefined;
  setDisplayedRetex: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const RetexContext = createContext<RetexContextType>({
  displayedRetexTitle: undefined,
  setDisplayedRetex: () => {},
});

const RetexDisplayEngine = ({ children }: { children: ReactNode }) => {
  const [displayedRetexTitle, setDisplayedRetex] = useState<string | undefined>(undefined);

  return (
    <RetexContext.Provider value={{ displayedRetexTitle, setDisplayedRetex }}>
      {children}
    </RetexContext.Provider>
  )
}

export { RetexContext, RetexDisplayEngine }
