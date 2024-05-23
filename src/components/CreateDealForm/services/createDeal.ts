import { $fetch } from "@/shared/api/fetch"
import { DEALS } from "@/shared/const/pipedriveEndpoints"

export const createDeal = async (jobNumber: string) => {
  const title = `Job #${jobNumber}`
  const body = JSON.stringify({
    title,
  })

  const response = await $fetch(DEALS, {
    method: 'POST',
    body
  })
  
  return response.json() as Promise<{ data: { id: number } }>
}