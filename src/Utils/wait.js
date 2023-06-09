

const wait = (timeInMs) => new Promise((res, rej) => {
   setTimeout(res, timeInMs)
})

export default wait