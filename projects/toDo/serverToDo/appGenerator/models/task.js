const Sequelize = require('sequelize');

let Task = {};

module.exports.init = function (sequelize) {
    Task.value = sequelize.define('task', {
        task: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
}

module.exports.Task = Task;

