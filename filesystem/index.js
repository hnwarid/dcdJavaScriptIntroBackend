//path.resolve(__dirname, 'notes.txt');

// TODO tampilkan teks notes.txt pada console

// versi synchronous 
const fs = require('fs');
const textData = fs.readFileSync('notes.txt', 'UTF-8');
console.log(textData);


// versi asynchronous 
//line 4 
const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas');
        return;
    }

    console.log(data);
};

fs.readFile('notes.txt', 'UTF-8', fileReadCallback);


//versi dengan path resolve 
//line 4
const { resolve } = require('path');
//line 13-20
fs.readFile(resolve('C:/nodejs-intro/filesystem', 'notes.txt'), 'UTF-8', fileReadCallback);


