import create from "zustand";
import { persist } from "zustand/middleware";

//
interface UseAuthStoreProps {
  user: boolean;
  doLogin: () => void;
  doLogout: () => void;
}

//
export const useAuthStore = create(
  persist<UseAuthStoreProps>(
    (set, get) => ({
      user: false,
      doLogin: () => set((state) => ({ ...state, user: true })),
      doLogout: () => set((state) => ({ ...state, user: false })),
    }),
    {
      name: "z-auth",
      getStorage: () => localStorage,
    }
  )
);
