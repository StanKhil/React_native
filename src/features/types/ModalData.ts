import type { ProjButtonTypes } from "../ui/ProjeButton";

type ModalButtonData = {
    title: string,
    action: () => void,
    type: ProjButtonTypes
};

type ModalData = {
    title?: string,
    message: string,
    buttons?: Array<ModalButtonData>
}

export type { ModalData, ModalButtonData };