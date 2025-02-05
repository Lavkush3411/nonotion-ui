export const API_ROUTES = {
  GET: {
    PAGE_LIST: "/page/pages",
    PAGE_BY_ID: (id: string) => `/page/${id}`,
  },
  POST: {
    PAGE_CREATE: "/page",
  },
  PUT: {
    PAGE_UPDATE: "/page",
  },
  DELETE: {
    PAGE_DELETE: "/page",
  },
};
