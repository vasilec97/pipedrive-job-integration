import { $fetch } from "@/shared/api/fetch"
import { DEAL_FIELDS_MAP } from "../const/dealFields"
import { DEAL_FIELDS } from "@/shared/const/pipedriveEndpoints"

type CreateDealFieldsResponse = Promise<Array<{ data: { id: number, key: string, name: string }}>>

export const createDealFields = async () => {
  console.log('Create Custom Field Endpoint Has Been Called Again!')
  const dealFields = DEAL_FIELDS_MAP()
  const promises = dealFields.map(({ name, value }) => {
    let field_type = ''

    switch (value) {
      case 'phone':
        field_type = 'phone'
        break
      case 'address':
        field_type = 'address'
        break
      case 'jobDate':
        field_type = 'date'
        break
      default:
        field_type = 'varchar'
    }

    const body = JSON.stringify({
      name,
      field_type,
    })

    return $fetch(DEAL_FIELDS, {
      method: 'POST',
      body,
    })
  })

  const responseFields = await Promise.all(promises)
  return Promise.all<CreateDealFieldsResponse>(responseFields.map(res => res.json()))
}