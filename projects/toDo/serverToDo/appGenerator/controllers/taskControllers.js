let Task = require('../models/task').Task;
const Sequelize = require('sequelize');


exports.getToDoPaige = function (req, res) {
    res.render('toDoPaige');
};
exports.getTasks = function (req, res) {

    Task.value.findAll().then((data) => {
        res.json(data);
    });
};
exports.add = function (req, res) {
    Task.value.create(req.body).then(() => {
        res.send('Задача добавлена...')
    });
};
exports.getClear = function (req, res) {
    Task.value.destroy({
        where: {}
    }).then(() => {
        res.send("Данные удалены...");
    });
};