const fs = require('fs');

console.log("starting   ")

fs.writeFile("abc.txt", "hello duniya to file using fs.write" , ()=>{
    console.log("end")
})

