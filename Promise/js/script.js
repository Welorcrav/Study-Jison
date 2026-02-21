// const friend = {
//   status: "success",
// }

// const request = new Promise((resolve, reject) => {
//   if (friend.status === "success") {
//     friend.time = "12:00"
//     resolve(friend)
//   } else {
//     reject()
//   }
// })

// request
//   .then(data => {
//     data.place = "Cyber Arena"
//     return data
//   })
//   .then(data => {
//     data.food = "Palov"
//     return data
//   })
//   .then(data => {
//     console.log(data)
//   })
//   .catch(() => {
//     console.log("Atmaska qildi")
//   })
//   .finally(() => {
//     console.log("Telefon qilib qo'ydi")
//   })

const logger = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}


Promise.all([logger(1000), logger(2000)]).then(() => {
  console.log("All promise was resolved")
})

Promise.race([logger(1000), logger(2000)]).then(() => {
  console.log("All promise was resolved")
})




