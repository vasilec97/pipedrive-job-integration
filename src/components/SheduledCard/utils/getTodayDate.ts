export const getTodayDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1)
  const day = String(today.getDate())

  return `${year}-${month.length > 1 ? month : `0${month}`}-${day.length > 1 ? day : `0${day}`}`
}