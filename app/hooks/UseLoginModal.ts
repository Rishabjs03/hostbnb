import { create } from "zustand";


interface Loginmodalstore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}



const UseLoginModal = create<Loginmodalstore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default UseLoginModal;