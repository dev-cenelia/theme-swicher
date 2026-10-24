import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = {
  darkMode: boolean;
  themeToggle: () => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      darkMode: false,
      themeToggle: () =>
        set((state) => ({
          darkMode: !state.darkMode,
        })),
    }),
    { name: "theme-storage" },
  ),
);
