const http = require('http');
const express = require('express');
const hostname = '127.0.0.1';
const port = 3333;
const db = require('./db');

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

const monsterController = (req, res) => {
    let snippet = `<h1>BOOO!!!</h1>`;

    if (req.params.name === undefined && db !== undefined) {
        snippet += `<ul>`
    db.map(monster => {
        snippet += `<li><a href="/monster/${monster.slug}">${monster.name}</a></li>`;
    });
    snippet += `</ul>`
    }

    if (req.params.name !== undefined) {
         snippet = `<h1>BOOO!!!</h1>`;
        db.map(monster => {
            if (req.params.name === monster.slug) {
                snippet += `<p> I am ${monster.name} and I am a ${monster.species}. </p>`
            }
        });
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
app.get('/monster/:name?', monsterController);

// Erics switch solution

// if (req.params.name !== undefined) {
    //     switch (req.params.name) {
    //         case db[0].slug:
    //             snippet += `<h1>It is ${db[0].name} and I am a ${db[0].species}!</h1>`
    //             break;
    //         case db[1].slug:
    //             snippet += `<h1>It is ${db[1].name} and I am a ${db[1].species}!</h1>`
    //             break;
    //         case db[2].slug:
    //             snippet += `<h1>It is ${db[2].name} and I am a ${db[2].species}!</h1>`
    //             break;
    //         case db[3].slug:
    //             snippet += `<h1>It is ${db[3].name} and I am a ${db[3].species}!</h1>`
    //             break;
    //     }
    // }