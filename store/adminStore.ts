import { create } from "zustand";
import { persist } from "zustand/middleware";
import Cookies from "js-cookie";


export type AdminStore = {
  token: string;
  user: {},
  setUser : (user ) => void;
  setToken: (token: string | undefined) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  AppLogout: () => void;
};

export const useAdminStore = create<AdminStore>()(
  persist(
    (set, get) => ({
      token: "",
      user:{},
      setToken: (token) => {
        set({ token });
      },
      isLogin: false,
      setIsLogin: (isLogin: boolean) => {
        set({ isLogin });
      },
      setUser: (user) => {
        set({ user });
      },
      AppLogout: () => {
        set({
          token: "",
          isLogin: false,
        });
      },
    }),
    { name: "admin-storage" }
  )
);