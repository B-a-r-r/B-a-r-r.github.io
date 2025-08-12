import { createContext, useState, ReactNode, useEffect, useContext } from "react";
import { getLocalTentativeCooldown } from "../../utils";
import { contactForm } from "../../assets/constants";
import { LangContext } from "../language";

interface SubmitContextType {
    tentativesCount: number;
    setTentiativesCount: React.Dispatch<React.SetStateAction<number>>;
    canSubmit: boolean;
}

const SubmitContext = createContext<SubmitContextType>({
    tentativesCount: 0,
    setTentiativesCount: () => {},
    canSubmit: true,
});

const SubmitEngine = ({ children }: { children: ReactNode }) => {
    const { currentLang } = useContext(LangContext)
    const [tentativesCount, setTentiativesCount] = useState<number>(0)
    const [canSubmit, setCanSubmit] = useState<boolean>(true);

    useEffect(() => {
        setCanSubmit(false);

        if (localStorage.getItem("reachedLimit") !== null
            && parseInt(getLocalTentativeCooldown()) <= Date.now()
        ) {
            localStorage.removeItem("reachedLimit");
            setTentiativesCount(0);
            setCanSubmit(true);
        }
        else if (tentativesCount > contactForm.tentativeLimit) {
            alert(contactForm.alert.find(alert => alert.context === "cooldown")!.content[currentLang]);

            if (localStorage.getItem("reachedLimit") === null) {
                localStorage.setItem("reachedLimit", (Date.now() + contactForm.tentativeCooldown).toString());
            }
        }
        else if (tentativesCount > 0) {
            setTimeout(() => {
                setCanSubmit(true);
            }, contactForm.submitCooldown);
        }
        else {
            setCanSubmit(true);
        }
    }, [tentativesCount]);

    return (
        <SubmitContext.Provider value={{ tentativesCount, setTentiativesCount, canSubmit }}>
            {children}
        </SubmitContext.Provider>
    )
}

export { SubmitEngine, SubmitContext };