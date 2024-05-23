import { $fetch } from "@/shared/api/fetch"
import { DEAL_FIELDS } from "@/shared/const/pipedriveEndpoints"

export const getDealFields = async () => {
  const res = await $fetch(DEAL_FIELDS, {
    method: 'GET'
  })
  
  return res.json() as Promise<{data: Array<{ id: number, key: string, name: string }>}>
}