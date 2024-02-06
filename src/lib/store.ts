import { create } from "zustand";

const savedToken = sessionStorage.getItem("token");
const username = sessionStorage.getItem("username");

interface Store {
  token: boolean;
  isDeleting: boolean;
  isUpdating: boolean;
  isLoading: boolean;
  isCreating: boolean;
  username: string;
  haveNotifs: boolean;
  signIn: () => void;
  signOut: () => void;
  setIsDeleting: (value: boolean) => void;
  setIsUpdating: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  setIsCreating: (value: boolean) => void;
  setUsername: (value: string) => void;
  setHaveNotifs: (value: boolean) => void;
}

const useStore = create<Store>((set) => ({
  token: savedToken ? JSON.parse(savedToken) : false,
  isDeleting: false,
  isUpdating: false,
  isLoading: false,
  isCreating: false,
  username: username ? JSON.parse(username) : "",
  haveNotifs: false,
  signIn: () => {
    set({ token: true });
    localStorage.setItem("token", JSON.stringify(true));
  },
  signOut: () => {
    set({ token: false });
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
  },
  setIsDeleting: (value: boolean) => set({ isDeleting: value }),
  setIsUpdating: (value: boolean) => set({ isUpdating: value }),
  setIsLoading: (value: boolean) => set({ isLoading: value }),
  setIsCreating: (value: boolean) => set({ isCreating: value }),
  setUsername: (value: string) => {
    set({ username: value });
    localStorage.setItem("username", JSON.stringify(value));
  },
  setHaveNotifs: (value: boolean) => set({ haveNotifs: value }),
}));

export default useStore;
