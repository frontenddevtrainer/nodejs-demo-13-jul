import fs from "fs";


export const version = "0.0.1";

export function createNewFile(filename, content, callback){
    fs.writeFile(filename, content, { encoding: "utf-8" }, callback)
}

export default function showTime(){
    return Date.now();
}


