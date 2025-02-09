import { PageResponse } from "../types/page-type";

export function updateSidebarData(
  pages: PageResponse[],
  newData: PageResponse,
  setNull: boolean
): PageResponse[] {
  return pages.map((page) => {
    if (page.id === newData.id) {
      if (setNull) {
        return { ...page, children: [] };
      }
      return newData;
    }
    if (page.children) {
      return {
        ...page,
        children: updateSidebarData(page.children, newData, setNull),
      };
    }
    return page;
  });
}

export function updateContent(
  pages: PageResponse[],
  newData: PageResponse
): PageResponse[] {
  return pages.map((page) => {
    if (page.id === newData.id) {
      return { ...page, content: newData.content };
    }
    if (page.children) {
      return {
        ...page,
        children: updateContent(page.children, newData),
      };
    }
    return page;
  });
}
