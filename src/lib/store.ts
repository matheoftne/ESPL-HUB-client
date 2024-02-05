import { create } from "zustand";

const savedToken = sessionStorage.getItem("token");
const firstName = sessionStorage.getItem("firstName");

interface Store {
    token: boolean;
    isDeleting: boolean;
    isUpdating: boolean;
    isLoading: boolean;
    isCreating: boolean;
    firstName: string;
    haveNotifs: boolean;
    signIn: () => void;
    signOut: () => void;
    setIsDeleting: (value: boolean) => void;
    setIsUpdating: (value: boolean) => void;
    setIsLoading: (value: boolean) => void;
    setIsCreating: (value: boolean) => void;
    setFirstName: (value: string) => void;
    setHaveNotifs: (value: boolean) => void;
};

const useStore = create<Store>((set) => ({
    token: savedToken ? JSON.parse(savedToken) : false,
    isDeleting: false,
    isUpdating: false,
    isLoading: false,
    isCreating: false,
    firstName: firstName ? JSON.parse(firstName) : '',
    haveNotifs: false,
    signIn: () => {
        set({ token: true });
        localStorage.setItem('token', JSON.stringify(true));
    },
    signOut: () => {
        set({ token: false });
        localStorage.removeItem('token');
        localStorage.removeItem('firstName');
    },
    setIsDeleting: (value: boolean) => set({ isDeleting: value }),
    setIsUpdating: (value: boolean) => set({ isUpdating: value }),
    setIsLoading: (value: boolean) => set({ isLoading: value }),
    setIsCreating: (value: boolean) => set({ isCreating: value }),
    setFirstName: (value: string) => {
        set({ firstName: value});
        localStorage.setItem('firstName', JSON.stringify(value));
    },
    setHaveNotifs: (value: boolean) => set({ haveNotifs: value }),
}));

export default useStore;
