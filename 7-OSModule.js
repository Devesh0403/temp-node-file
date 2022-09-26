const os=require("os")
const user=os.userInfo()
console.log(user)
//

console.log(`The device has been running for ${os.uptime()} seconds`)

//

const current={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(current);