import { create } from "zustand";


interface Resgistermodalstore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}



const UseRegisterModal = create<Resgistermodalstore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default UseRegisterModal;