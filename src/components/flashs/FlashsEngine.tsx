import { createContext, useState, ReactNode, useEffect } from "react";
import FlashMessage from "./FlashMessage";

interface FlashContextType {
    currentFlash: string | null;
    setCurrentFlash: React.Dispatch<React.SetStateAction<string>>;
}

const FlashContext = createContext<FlashContextType>({
    currentFlash: "",
    setCurrentFlash: () => {},
});

const FlashsEngine = ({ children }: { children: ReactNode }) => {
    const [currentFlash, setCurrentFlash] = useState<string>("");

    useEffect(() => {
    }, [currentFlash]);

    return (
        <FlashContext.Provider value={{ currentFlash, setCurrentFlash }}>
            <FlashMessage context={currentFlash} />
            {children}
        </FlashContext.Provider>
    )
}

export { FlashsEngine, FlashContext };