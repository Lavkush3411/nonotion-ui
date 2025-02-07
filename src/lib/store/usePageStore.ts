import { create } from "zustand";
import { PageResponse } from "../types/page-type";

interface PageStore {
  currentPageId: string | null;
  currentPageData: PageResponse | null;
  setCurrentPageId: (currentPageId: string) => void;
  setCurrentPageData: (currentPageData: PageResponse) => void;
}
export const usePageStore = create<PageStore>((set) => ({
  currentPageId: null,
  currentPageData: null,
  setCurrentPageId: (currentPageId: string) => set({ currentPageId }),
  setCurrentPageData: (currentPageData) => set({ currentPageData }),
}));
