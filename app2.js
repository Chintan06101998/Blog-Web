const express = require("express");

//TODO: Express app

const app = express();

app.listen(3000);

// TODO: register View Engine
app.set('view engine','ejs');
//app.set('views', 'myviewa') //myview means path that contain your view

app.get('/',(req,res)=>{
    //res.send('<h1>WEE</h2>');
    const blogs = [
        {title: 'Neeharika work for TCS', snippet:'Explaination and understanding of java and sql is more important'},
        {title: 'Neeharika work for TCS', snippet:'Explaination and understanding of java and sql is more important'},
        {title: 'Neeharika work for TCS', snippet:'Explaination and understanding of java and sql is more important'}
    ]
    res.render('index',{title:'Home',blogs});
});

app.get('/about',(req,res)=>{
    //res.send('<h1>WEE</h2>');
    res.render('about',{title:'about'});
});

app.get('/about-us',(req,res)=>{
    //res.send('<h1>WEE</h2>');
    res.redirect('/about');
});

app.get('/create',(req,res)=>{
    res.render('create',{title:'Create a new blog'});
})

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})