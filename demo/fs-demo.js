import fs from "fs";
import chalk, { Chalk } from "chalk";
import path, { dirname } from "path"

// CWD - nodejs-demo/library.json
function getLibraryData(){

    // const __dirname = dirname(__filename);
    // const file = path.join(__dirname, "/demo/library.json");


    const filename = "./demo/library.json";
    fs.readFile(filename, "utf-8" , (err, data)=>{
        if(err) {
            console.log(chalk.bgRed(chalk.white("Error reading file.")))
            console.log(err.message)
        }

        const library = JSON.parse(data);

        library.isPublished = false;

        fs.writeFile(filename, JSON.stringify(library), "utf-8", ()=>{
            console.log("New file written");
        })

    })
}

getLibraryData()