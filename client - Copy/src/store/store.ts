import create from "zustand";

//
interface useGlobalStoreprops {
  user: boolean;
}

export const useGlobalStore = create<useGlobalStoreprops>((set) => ({
  user: false,
  login: () => set((state) => ({ ...state, user: true })),
  logout: () => set((state) => ({ ...state, user: false })),
}));
