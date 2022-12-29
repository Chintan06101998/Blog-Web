const fs = require('fs');  //  TODO: Firstly we neeed to import core module : FileSystem FS
//console.log(fs);

// reading files

fs.readFile('./docs/blog1.txt',(err,data)=>{    // TODO: first argumenet path of FIle, second one is funcation
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})

// TODO:  writing filrs

// this file is exist and replace the content
fs.writeFile('./docs/blog1.txt',"Hello world",()=>{ //TODO: First para for files, Second para for content, Third callback funcation
                                                    
    console.log("Files was waiting");
})

fs.writeFile('./docs/blog1.txt',"Hello New Files",()=>{   // this file is not exist so create a new files 
    console.log("Files created ");
})


// create directories

if(!fs.existsSync('./assets')){  // logic for existance of file
    fs.mkdir('./assets',(err)=>{ //TODO: Make Directory that is why mkdir
        if(err){
            console.log(err)
        }
        else{
            console.log('folder created')
        }
        })
}else{
    fs.rmdir('./assets',(err)=>{ //TODO: Remove Directory if it is exist
        console.log(err)
    })
}

// delete 
if(fs.existsSync('./docs/blog1.txt')){
    fs.unlink('./docs/blog1.txt',(err)=>{  // unlink method is used to delete, Second para is call back funcation 
        if(err){
            console.log(err)
        }else{
            console.log("Deleted")
        }
    })
}else{

}