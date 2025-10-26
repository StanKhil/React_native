import { createContext } from "react";
import type { ModalData } from "../types/ModalData";
import type { ToastData } from "../types/ToastData";

type AppContextType = {
    showModal: (modalData: ModalData|null) => void,
    enqueueToast: (toastData : ToastData) => void,
};

const AppContext = createContext<AppContextType>({
    showModal: (_:ModalData|null) => { throw "showModal not implemented"; },
    enqueueToast: (_:ToastData) => { throw "enqueueToast not implemented"; },
});

export default AppContext;