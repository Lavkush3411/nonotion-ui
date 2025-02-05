import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import { API_ROUTES } from "../_common/api-route";
import { QUERY_KEYS } from "../_common/query-keys";

function usePageById(id: string) {
  const { getData } = api();
  return useQuery({
    queryKey: QUERY_KEYS.PageById(id),
    queryFn: async () => {
      return getData(API_ROUTES.GET.PAGE_BY_ID(id));
    },
  });
}

export default usePageById;
