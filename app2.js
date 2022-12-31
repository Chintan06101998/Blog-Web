const express = require("express");
const morgan = require('morgan');
const mongoose = require("mongoose");
const blog = require('./models/blog');
const Blog = require("./models/blog");
const { result } = require("lodash");
const { render } = require("ejs");


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
app.use(express.static('public'));  // public is folder in current directory
app.use(express.urlencoded({extended:true})); //  /blog ma data aave pachhi aene eva format me convert kare jethi aapde aene store kari sakiae database ma
app.use(morgan('dev'));



// TODO: mongoose and mongo sandBox routes

/*
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
})  */

// TODO: another for databse

/*
app.get('/all-blogs',(req,res)=>{
    Blog.find()   // when we have to find the all blogs we directly use method on Blog collection
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
}); */

// TODO: for single Blog

/*
app.get('/single-blogs',(req,res)=>{
    Blog.findById('63ab12c05b7c7a7444e93a93')   // when we have to find the all blogs we directly use method on Blog collection
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
}); */




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
    res.redirect('/blogs');
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


//TODO: Blog routes
app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt:-1})   // Blog is model
    .then((result)=>{
        res.render('index',{title:'All Blogs',blogs:result})
    })
    .catch((err)=>{
        console.log(err)
    })
})

//TODO: POST request of form

app.post('/blogs',(req,res)=>{   //  /blogs par request mokli ti form ae
    const blog = Blog(req.body);  // we use middleware above  TODO: req.body ma data aave form mathi but ae undefine hy  so middle aware use kariae and aene Blog model no use karine databse ma store karvano try kariae chhiae
    blog.save()
    .then((result)=>{
        res.redirect('blogs'); // aftercsubmitting redirect to home page whivh has a /blogs url
    }).catch((err)=>{
        console.log(err);
    })

})

//TODO: for ID

app.get('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    Blog.findById(id)
    .then(result=>{
        res.render('details',{blog: result, title:'blog details'}); // details is page
    })
    .catch((err)=>{
        console.log(err);
    })
});

// TODO: to delete blog

app.delete('/blogs/:id',(req,res)=>{  // :id is routh parameter // Route parameter is variable of route this can be change.. ID is variable
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect:'/blogs'})
    }).catch((err)=>{
        console.log(err);
    })
})

app.use((req,res)=>{   // TODO: USE method run for any request doesnot matter it is post or get method
    res.status(404).render('404',{title:'404'});
})