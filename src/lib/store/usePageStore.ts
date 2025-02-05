import { create } from "zustand";
export const usePageStore = create((set) => ({
  currentPageId: null,
  data: [],
  setData: (data: unknown) => set({ data }),
  setCurrentPageId: (currentPageId: string) => set({ currentPageId }),
}));
