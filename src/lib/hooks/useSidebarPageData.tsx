import { useQuery } from "@tanstack/react-query";
import { PageResponse } from "@/lib/types/page-type";
import { api } from "@/lib/api";
import { QUERY_KEYS } from "../_common/query-keys";
import { API_ROUTES } from "../_common/api-route";

export default function useSidebarPageData() {
  const { getData } = api();

  return useQuery<PageResponse[], Error>({
    queryKey: QUERY_KEYS.PageList,
    queryFn: async () => {
      const res = await getData(API_ROUTES.GET.PAGE_LIST);
      console.log(res.data);
      return Array.isArray(res.data) ? res.data : []; // Ensure data is an array
    },
    initialData: [], // Prevents `never` type
  });
}
