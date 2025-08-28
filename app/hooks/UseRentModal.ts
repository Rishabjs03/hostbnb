import { create } from "zustand";


interface Rentmodalstore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}



const UseRentModal = create<Rentmodalstore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default UseRentModal;