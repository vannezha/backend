const fs = require("fs")
const path = require("path")

const readableStream = fs.createReadStream(path.resolve("input.txt"), {highWaterMark:15})

const writableStream = fs.createWriteStream(path.resolve("output.txt"))

readableStream.on("readable", ()=>{
    try{
        writableStream.write(`${readableStream.read()}\n`)
    }
    catch(e){
        console.log(e.message)
        return;
    }
})