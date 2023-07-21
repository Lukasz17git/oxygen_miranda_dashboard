

const compareDataAndGetChangedFieldsMaintainingId = <T extends Record<string, any> & { _id?: string }>(originalObject: T, modifiedObject: T) => {

   const updates: Partial<T> = {}
   for (const [key, value] of Object.entries(originalObject)) {
      if (value !== modifiedObject[key]) {
         updates[key as keyof T] = modifiedObject[key]
      }
   }
   if (originalObject._id) updates._id = originalObject._id
   return updates
}

export default compareDataAndGetChangedFieldsMaintainingId