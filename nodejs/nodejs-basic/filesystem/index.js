// using promises
import { readFile } from 'node:fs/promises';
import path from 'node:path';

try {
    const filePath = path.resolve("notes.txt")
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }



//   using callback
// const fs = require('fs');
// const fileReadCallback = (error, data) => {
//     if(error) {
//         console.log('Gagal membaca berkas');
//         return;
//     }
//     console.log(data);
// };
 
// fs.readFile('notes.txt', 'UTF-8', fileReadCallback);


// synchronus
// const fs = require('fs');
 
// const data = fs.readFileSync('notes.txt', 'UTF-8');
// console.log(data);
