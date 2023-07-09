
export const getFullDate = (date: string | number) => {
   return new Date(date).toLocaleDateString(undefined, {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
   })

}

export const getDayMonthYear = (date: string | number) => {
   return new Date(date).toLocaleDateString(undefined, {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
   })
}

export const getTime = (date: string | number) => {
   return new Date(date).toLocaleTimeString(undefined, {

   })
}