

const wait = (timeInMs: number) => new Promise((res) => {
   setTimeout(res, timeInMs)
})

export default wait