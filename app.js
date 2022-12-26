const express = require("express");

//TODO: Express app

const app = express();

// TODO: register views Engine
app.set('views engine','ejs');
//app.set('viewss', 'myviewsa') //myviews means path that contain your views


//TODO: listen for request
app.listen(3000);

//TODO: send response as a HTML
app.get('/',(req,res)=>{
    //res.send('<h1>WEE</h2>');
    res.sendFile('./views/index.html',{root: __dirname});  // by default express look for computers path so we need to mentioned directory of path
});

app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root: __dirname}); 
   // res.send('<h1>About Page</h2>');
});

//TODO: redirect
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

//TODO: 404 page  : use fun for every single request doesnot matter what URL it is

app.use((req,res)=>{      // note that place it in last because it fire for every request
    res.statusCode(404).sendFile('./views/PageError.html',{root: __dirname})
})