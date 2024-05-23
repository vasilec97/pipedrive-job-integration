import { getTimeItems } from "@/components/SheduledCard/utils/getTimeItems"

export const getFieldValue = (name: string, value: string) => {
  if (name !== 'Job start time' && name !== 'Job end time') return value

  const timeItem = getTimeItems().find(item => item.value == value)

  return timeItem ? timeItem.name : value
}