import create from "zustand";
import { persist } from "zustand/middleware";

//
interface useGlobalStoreprops {
  user: boolean;
  doLogin: () => void;
  doLogout: () => void;
}

//
export const useGlobalStore = create(
  persist<useGlobalStoreprops>(
    (set, get) => ({
      user: false,
      doLogin: () => set((state) => ({ ...state, user: true })),
      doLogout: () => set((state) => ({ ...state, user: false })),
    }),
    {
      name: "global-storage",
      getStorage: () => localStorage,
    }
  )
);
