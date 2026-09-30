import { create } from "zustand";
import { Language } from "@/data/translations";
import { Project } from "@/data/portfolioData";

interface PortfolioStore {
  language: Language;
  setLanguage: (lang: Language) => void;

  commandMenuOpen: boolean;
  setCommandMenuOpen: (open: boolean) => void;
  toggleCommandMenu: () => void;

  selectedCategory: string;
  setSelectedCategory: (category: string) => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;

  activeProjectModal: Project | null;
  setActiveProjectModal: (project: Project | null) => void;

  priceCalculatorOpen: boolean;
  setPriceCalculatorOpen: (open: boolean) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  language: "en",
  setLanguage: (lang) => set({ language: lang }),

  commandMenuOpen: false,
  setCommandMenuOpen: (open) => set({ commandMenuOpen: open }),
  toggleCommandMenu: () => set((state) => ({ commandMenuOpen: !state.commandMenuOpen })),

  selectedCategory: "All",
  setSelectedCategory: (category) => set({ selectedCategory: category }),

  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  activeProjectModal: null,
  setActiveProjectModal: (project) => set({ activeProjectModal: project }),

  priceCalculatorOpen: false,
  setPriceCalculatorOpen: (open) => set({ priceCalculatorOpen: open }),
}));
