import { create } from "zustand";

interface HeaderStore {
  isScrolled: boolean;
  isMenuOpen: boolean;
  toggleMenu: (value: boolean) => void;
  setIsScrolled: (value: boolean) => void;
}

const useHeaderStore = create<HeaderStore>((set) => ({
  isScrolled: false,
  isMenuOpen: false,
  toggleMenu: (value) => set({ isMenuOpen: value }),
  setIsScrolled: (value) => set({ isScrolled: value }),
}));

export default useHeaderStore;
