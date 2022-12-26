const fs = require('fs');
//console.log(fs);

// reading files

fs.readFile('./docs/blog1.txt',(err,data)=>{    // first argumenet path second one is funcation
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})

// writing filrs

fs.writeFile('./docs/blog1.txt',"Hello world",()=>{   // this file is exist and replace the content
    console.log("Files was waiting");
})

fs.writeFile('./docs/blog1.txt',"Hello New Files",()=>{   // this file is not exist so create a new files 
    console.log("Files created ");
})


// create directories

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('folder created')
        }
        })
}else{
    fs.rmdir('./assets',(err)=>{
        console.log(err)
    })
}

// delete 
if(fs.existsSync('./docs/blog1.txt')){
    fs.unlink('./docs/blog1.txt',(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Deleted")
        }
    })
}else{

}