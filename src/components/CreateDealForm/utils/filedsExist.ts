import { DEAL_FIELDS_MAP } from "@/components/CreateDealForm/const/dealFields"

export const fieldsExist = (fields: Array<{ name: string }>) => {
  const existedFiledsMap = fields.reduce((acc, { name }) => {
    acc[name] = true
    return acc
  }, {} as Record<string, boolean>)

  return DEAL_FIELDS_MAP().every(({ name }) => {
    return existedFiledsMap.hasOwnProperty(name)
  })
}