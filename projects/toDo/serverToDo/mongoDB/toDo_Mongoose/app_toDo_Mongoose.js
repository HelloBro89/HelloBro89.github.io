const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;
const app = express();
const jsonParser = express.json();

const taskScheme = new Schema({ task: { type: String, required: true, minlength: 1 }, versionKey: false });

const Task = mongoose.model("Task", taskScheme);

app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://localhost:27017/tasksdb", { useUnifiedTopology: true }, function (err) {
    if (err) return console.log(err);
    app.listen(3000, function () {

        console.log("Сервер ожидает подключения...");
    });
});

app.get("/", jsonParser, function (req, res) {
    res.sendFile(__dirname + "/public/html_mongoose.html");
});

app.post('/taskData', jsonParser, function (req, res) {

    const task = new Task(req.body);

    task.save(function (err) {

        if (err) return console.log(err);
        res.send('Все хорошо...');
    });
});

app.get("/tasks", jsonParser, function (req, res) {

    Task.find({}, function (err, tasks) {

        if (err) return console.log(err);

        res.json(tasks);
    });
});

app.delete("/clear", jsonParser, function (req, res) {

    Task.deleteMany({}, function (err, result) {

        if (err) return console.log(err);
        res.send('Уалено...');
    });
});