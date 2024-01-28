// const fsPromises = require('fs')
// const fs = fsPromises.promises


// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


import { promises as fs } from "fs";

async function readFile() {
    console.log('in readFile.....');
    const fileData = await fs.readFile('./a.txt', {encoding:'utf-8'});
    return fileData;
}

async function writeFile() {
    console.log('writingfile.......');
    await fs.writeFile('./a.txt', 'Tinsuki');
}

async function callingFunctions() {
    const data = await readFile();
    console.log(data); 
    await writeFile();
    const data2 = await readFile();
    console.log(data2);
}

callingFunctions()