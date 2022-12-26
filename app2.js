const express = require("express");

//TODO: Express app

const app = express();

app.listen(3000);

// TODO: register View Engine
app.set('view engine','ejs');
//app.set('views', 'myviewa') //myview means path that contain your view

app.get('/',(req,res)=>{
    //res.send('<h1>WEE</h2>');
    res.render('index');
});

app.get('/about',(req,res)=>{
    //res.send('<h1>WEE</h2>');
    res.render('about');
});

app.get('/about-us',(req,res)=>{
    //res.send('<h1>WEE</h2>');
    res.redirect('/about');
});

app.get('blogs/create',()=>{
    res.render();
})

app.use((req,res)=>{
    res.status(404).render('404');
})