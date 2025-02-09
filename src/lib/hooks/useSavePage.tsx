import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api";
import { PageResponse } from "../types/page-type";
import { QUERY_KEYS } from "../_common/query-keys";
import { updateContent } from "../utils/update-sidebardata";
import { Block } from "@blocknote/core";

function useSavePage() {
  const { patchData } = api();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { id: string; content: Block[] }) => {
      return await patchData(`/page/${data.id}`, {
        content: JSON.stringify(data.content),
      });
    },
    onSuccess: async (res) => {
      queryClient.setQueryData(QUERY_KEYS.PageList, (oldData: PageResponse[]) =>
        updateContent(oldData, res.data)
      );
    },
  });
}

export default useSavePage;
