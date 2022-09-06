/** 
 * TODO:
 * Buatlah program unuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');
const { resolve } = require('path');

const inputStream = fs.createReadStream(resolve(__dirname, 'input.txt'), {
    HighWaterMark: 15,
});

const writtenOutput = fs.createWriteStream(resolve(__dirname, 'output.txt'));

inputStream.on('readable', () => {
    try {
        console.log('writing the output file from streamed input');
        writtenOutput.write(`${inputStream.read()}\n`);
    } catch(error) {
        // catch the error when the chunk cannot be read
        console.log('error. Sucks but check your code again.');
    }
})

inputStream.on('end', () => {
    writtenOutput.end();
    console.log('read input stream done.')
});
