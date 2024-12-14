"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  id: string;
  name: string;
  email: string;
}
interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}
export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user: User | null) => set({ user }),
          }),
          {
            name: "user-store",
            storage: createJSONStorage(()=> localStorage),
          }
    )
);
