const fs = require('fs');

// Continue send the data in chunk

// utf 8 used to get data in string like it is format
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf-8'});   // first para: where to data read

const writeStream = fs.createWriteStream('./docs.blog4.txt');  // where data write


readStream.on('data',(chunk)=>{//Chunk means bunch of somedata of total Data   // data means buffer of data. chunk of data  // every time buffer comes and read this method

    console.log('---------------------------------------------------new chunks--------------------------------------------------->>>>>>>>>>>>>');
    console.log(chunk);
    writeStream.write('\n NEW CHUNK \n');
    writeStream.write(chunk);
});    // event listening 