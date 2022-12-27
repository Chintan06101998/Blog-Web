const express = require("express");
const morgan = require('morgan');

//TODO: Express app

const app = express();

app.listen(3000);

//TODO: create middleware by using USE method

/*
//TODO: it is custom middle ware .. in next, we use morgan for static middleware

app.use((req,res, next)=>{  // next is used to tell browser that what ypu have to do after execution of this code
    console.log('New request made: ');
    console.log('host: ',req.hostname);
    console.log('path: ',req.path);
    console.log('method: ',req.method);
    next(); //  // next is used to tell browser that what ypu have to do after execution of this code
});

*/

app.use(morgan('dev'));


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

/*
app.use((req,res, next)=>{  // next is used to tell browser that what ypu have to do after execution of this code
    console.log('in the next middleware: ');

    next(); //  // next is used to tell browser that what ypu have to do after execution of this code
}); */


app.get('/about',(req,res)=>{
    //res.send('<h1>WEE</h2>');
    res.render('about',{title:'about'});
});

app.get('/about-us',(req,res)=>{
    //res.send('<h1>WEE</h2>');
    res.redirect('/about');
});

app.get('/create',(req,res)=>{   //TODO: it is only used for get request and give spefific file
    res.render('create',{title:'Create a new blog'});
})

app.use((req,res)=>{   // TODO: USE method run for any request doesnot matter it is post or get method
    res.status(404).render('404',{title:'404'});
})