import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api";
import { API_ROUTES } from "../_common/api-route";
import { QUERY_KEYS } from "../_common/query-keys";
import { PageResponse } from "../types/page-type";
import { updateSidebarData } from "../utils/update-sidebardata";
import { usePageStore } from "../store/usePageStore";

interface PageCreateInterface {
  title: string;
  content?: string;
  parentId?: string;
}

function useCreatePage() {
  const { postData, getData } = api();
  const queryClient = useQueryClient();
  const { setCurrentPageData } = usePageStore();

  return useMutation({
    mutationFn: async (data: PageCreateInterface) => {
      return await postData(API_ROUTES.POST.PAGE_CREATE, data);
    },
    onSuccess: async (res, data) => {
      setCurrentPageData(res.data);
      if (data.parentId) {
        const { data: additionalData } = await queryClient.fetchQuery({
          queryKey: QUERY_KEYS.PageById(data.parentId),
          queryFn: async () => {
            return getData(API_ROUTES.GET.PAGE_BY_ID(data.parentId || ""));
          },
        });
        queryClient.setQueryData(
          QUERY_KEYS.PageList,
          (oldData: PageResponse[]) =>
            updateSidebarData(oldData, additionalData, false)
        );
      } else {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.PageList });
      }
    },
  });
}

export default useCreatePage;
