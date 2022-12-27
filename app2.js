const express = require("express");
const morgan = require('morgan');
const mongoose = require("mongoose");
const blog = require('./models/blog');
const Blog = require("./models/blog");
const { result } = require("lodash");


//TODO: Express app

const app = express();

//TODO: To connect with MongoDB
const urlDB = "mongodb+srv://chintupatel61098:JQG8YvpUYM3WUZWL@nodedemo.y4to5j5.mongodb.net/nodedemo?retryWrites=true&w=majority";
mongoose.connect(urlDB)
.then((res)=>{
    app.listen(3000); 
}).catch((error)=>{
    console.log(error);
})



// app.listen(3000); we put this line in above coonection because we want to listen request after connecting with database

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

//TODO: middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));


// TODO: mongoose and mongo sandBox routes
app.get('/add-blog',(req,res)=>{

    const blog = new Blog({
        title: 'new Blogs 2',
        snippet:'About my blog',
        body: 'More about my blogs'
    });

    blog.save()   // to save blog in collection we use instance of blog
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
})

// TODO: another for databse

app.get('/all-blogs',(req,res)=>{
    Blog.find()   // when we have to find the all blogs we directly use method on Blog collection
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
});

// TODO: for single Blog


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