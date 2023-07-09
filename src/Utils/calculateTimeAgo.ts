

const calculateTimeAgo = (time: number) => {
   const currentTime = Date.now()
   const elapsedTimeInMs = currentTime - time

   const elapsedTimeInSeconds = Math.floor(elapsedTimeInMs / 1000)
   if (elapsedTimeInSeconds <= 60) return `${elapsedTimeInSeconds}s ago`

   const elapsedTimeInMinutes = Math.floor(elapsedTimeInSeconds / 60)
   if (elapsedTimeInMinutes <= 60) return `${elapsedTimeInMinutes}min ago`

   const elapsedTimeInHours = Math.floor(elapsedTimeInMinutes / 60)
   if (elapsedTimeInHours <= 24) return `${elapsedTimeInHours}h ago`

   const elapsedTimeInDays = Math.floor(elapsedTimeInHours / 24)
   if (elapsedTimeInDays < 8) return `${elapsedTimeInDays}days ago`

   const elapsedTimeInWeeks = Math.floor(elapsedTimeInDays / 7)
   return `${elapsedTimeInWeeks}weeks ago`
}

export default calculateTimeAgo