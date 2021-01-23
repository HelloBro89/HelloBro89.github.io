const Sequelize = require("sequelize");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const jsonParser = express.json();


const urlencodedParser = bodyParser.urlencoded({ extended: false });

const sequelize = new Sequelize("toDoDB", "root", "korolik", {
    dialect: "mysql",
    port: 3307,
    host: "localhost",
    define: {
        timestamps: false
    }
});

const Task = sequelize.define('task', {
    // id: {
    //     type: Sequelize.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     allowNull: false
    // },
    task: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

sequelize.sync().then(() => {
    app.listen(3000, function () {
        console.log("Сервер ожидает подключения ...")
    });
}).catch(err => console.log(err));

app.use(express.static(__dirname + "/public"));

app.post("/taskData", jsonParser, function (req, res) {

    Task.create(req.body).then(() => {
        res.send('Задача добавлена...')
    })
    console.log(req.body);
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/html_sequelizeMySQL.html");
});

app.get("/tasks", jsonParser, function (req, res) {

    Task.findAll().then((data) => {
        res.json(data);
    });
});

app.delete("/clear", function (req, res) {

    Task.destroy({
        where: {}
    }).then(() => {
        res.send("Данные удалены...")
    });
});