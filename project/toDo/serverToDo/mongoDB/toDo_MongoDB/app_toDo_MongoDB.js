const express = require("express");
const app = express();
const jsonParser = express.json();

const MongoClient = require("mongodb").MongoClient;
const mongoObj = new MongoClient("mongodb://localhost:27017/", { useUnifiedTopology: true });

const createError = require('http-errors');

app.use(express.static(__dirname));

mongoObj.connect(function (err, client) {

    if (err) return console.log(err);

    app.locals.collection = client.db("taskDB").collection("tasks");
    app.listen(3000, function () {

        console.log("Сервер ожидает подключения...");
    });
});

// app.get("/script_toDo_MongoDB.js", jsonParser, function (req, res) {

//     res.sendFile(__dirname + "/script_toDo_MongoDB.js");
//     // console.log(__dirname)
//     // res.redirect("HTML_toDo_MongoDB.html");
// })

app.get("/", jsonParser, function (req, res) {

    res.sendFile(__dirname + "/HTML_toDo_MongoDB.html");
    // console.log(__dirname)
    // res.redirect("HTML_toDo_MongoDB.html");
})

app.get("/tasks", jsonParser, function (request, response) {

    const collection = app.locals.collection;

    collection.find().toArray(function (err, tasks) {

        if (err) return console.log(err);
        console.log('Читаем базу данных...')

        response.json(tasks);
    })
})

app.post("/taskData", jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);

    const collection = app.locals.collection;
    collection.insertOne(req.body, function (err, result) {

        if (err) return console.log(err);
    });
});

app.delete("/clear", jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);

    const collection = app.locals.collection;

    collection.find().toArray(function (err, tasks) {

        if (err) return console.log(err);

        if (tasks.length > 0) {

            collection.drop(function (err, result) {
                console.log("База данных удалена...")
            });
        } else {
            console.log("В базе данных ничего не было...")
        }
    })
});

process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});