const http = require('http');
const fs = require('fs');
const _ = require('lodash');

//creating server
const server = http.createServer((req, res) => {  // request by create server and by call back nethod-- sent response
    // console.log(req.url,req.method);

    //TODO: Lodash use

    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('one time');
    });

    greet(); // 2 var call kariae to b ek j var run
    greet();
    //  first  set header content type
    res.setHeader('Content-Type', 'text/html');


    let path = './views/';
    // TODO: For redirect to multiple Routes
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/chin':  //TODO: about-me path b ABOUT ma redirect that   using NODEMoN
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += 'PageError.html';
            res.statusCode = 404;
            break;
    }



    // TODO: first response
    //res.write("<h1>Hello Chintan<h2>");
    //res.write("<head><link rel='stylesheet' href='#'></>")


    // TODO: second response
    //  fs.readFile('./views/index.html',(err, data)=>{
    //     if(err){
    //         console.log(err);
    //     }else{
    //        // res.write(data)
    //        res.end(data);  // if we have only one data then we can pass into end() method
    //     }

    //  })


    // TODO: third response HTML file 

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // res.write(data)
            res.end(data);  // if we have only one data then we can pass into end() method
        }

    })
});

server.listen(3000, "localhost", () => {  // internet communication made on port number ofor different programs
    console.log("Listeing request");
})