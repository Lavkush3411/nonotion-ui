import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "../api";
import { deleteSidebarData } from "../utils/update-sidebardata";
import { QUERY_KEYS } from "../_common/query-keys";
import { PageResponse } from "../types/page-type";

function useDeletePage() {
  const { deleteData } = api();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return await deleteData("/page/" + id);
    },
    onSuccess: (res, id) => {
      console.log(res.data);
      queryClient.setQueryData(QUERY_KEYS.PageList, (oldData: PageResponse[]) =>
        deleteSidebarData(oldData, id)
      );
    },
  });
}

export default useDeletePage;
