const mysql = require("mysql2");
const express = require("express");

const app = express();
const jsonParser = express.json();

const pool = mysql.createPool({
    connectionLimit: 5,
    port: 3307,
    host: "localhost",
    user: "root",
    database: "toDoDB",
    password: "korolik"
});

app.use(express.static(__dirname + "/public"));

app.post("/taskData", jsonParser, function (req, res,) {

    const tas = req.body.task;

    pool.query("insert into tasks(task) values(?)", [tas], function (err, data) {

        if (err) { console.log(err) }
        else {
            console.log("Задача добавлена...")
            res.send('Задача добавлена...')
        };
    });
});

app.get("/", jsonParser, function (req, res) {

    res.sendFile(__dirname + "/public/html_mySQL.html");
});

app.get("/tasks", jsonParser, function (req, res) {

    pool.query("SELECT * FROM tasks", function (err, results) {

        if (err) console.log(err);
        else {
            console.log("Данные отправлены...");
            res.json(results);
        };
    });
});

app.delete("/clear", jsonParser, function (req, res) {

    pool.query("DELETE FROM tasks", function (err, results) {
        if (err) console.log(err);
        else {
            console.log("Данные удалены...");
            res.send("Данные удалены...");
        };
    });
})
app.listen(3000);