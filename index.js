const http = require('http');
const express = require('express');
const hostname = '127.0.0.1';
const port = 3333;

const app = express();

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})

const rootController = (req, res) => {
    const snippet = `<h1> Hello World! </h1>`
    res
        .status(200)
        .send(snippet)
        .end()
};

const catController = (req, res) => {
    const snippet = `<h1> MEOW! </h1>`;
    res
        .status(200)
        .send(snippet)
        .end();
}

const dogsController = (req, res) => {
    const snippet = `<h1> Woof!! </h1>`;
    res
        .status(200)
        .send(snippet)
        .end();
}

const catanddogsController = (req, res) => {
    const snippet = `<h1> Dogs and Cat Living Together Mass Hysteria!! </h1>`;
    res
        .status(200)
        .send(snippet)
        .end();
}

const greetController = (req, res) => {
    console.log("Hello ", req.params.name);
    let snippet = `<h1> Hello There! </h1>`;
    if (req.params != undefined) {
        snippet = `Hello, ${req.params.name}`
    }
    
    res
        .status(200)
        .send(snippet)
        .end();
}


app.get('/', rootController);
app.get('/cats', catController);
app.get('/dogs', dogsController);
app.get('/cats_and_dogs', catanddogsController);
app.get('/greet/:name?', greetController);
