// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ``` 

import {promises as fsPromises} from 'fs';

async function readFile(Path) {
    const data = await fsPromises.readFile(Path, {encoding: 'utf-8'});
    return data;
}

async function fileCleaner() {
    const data = await readFile('./phrases.txt');
    const cleanedData = data.replace(/\s+/g,' ')
    await fsPromises.writeFile('./phrases.txt', cleanedData);
}

fileCleaner()
