

export const getDataFromLocalStore = (key: string) => {
   const data = localStorage.getItem(key)
   return data && JSON.parse(data)
}

export const updateDataToLocalStore = <T>(key: string, data: T) => {
   const dataInJson = JSON.stringify(data)
   localStorage.setItem(key, dataInJson)
   return data
}