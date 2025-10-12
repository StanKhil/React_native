import { createContext } from "react";
import type { ModalData } from "../types/ModalData";

type AppContextType = {
    showModal: (modalData: ModalData) => void;
}

const AppContext = createContext({
    showModal: (_:ModalData) => { throw "showModal not implemented"; },
});

export default AppContext;