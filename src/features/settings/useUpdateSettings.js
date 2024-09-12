import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { updateSetting as updateSettingApi } from "../../services/apiSettings"

export default function useUpdateSettings() {
  const queryClient = useQueryClient()
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Cabin is successfully edited")
      queryClient.invalidateQueries({ queryKey: ["settings"] })
    },
    onError: (err) => {
      toast.error(err.massage)
    },
  })
  return { isUpdating, updateSetting }
}
