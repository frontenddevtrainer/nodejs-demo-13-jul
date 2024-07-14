import time, { createNewFile, version } from "./utils/fs.js"
import log from "./utils/message.js"

createNewFile("./demo.txt", "Hello World", function(){
    log("File created")
})


log(version, time)