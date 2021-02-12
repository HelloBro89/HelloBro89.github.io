let express = require('express');
let taskControllers = require('../controllers/taskControllers');
let router = express.Router();

let jsonParser = express.json();

router.get("/", taskControllers.getToDoPaige);
router.get("/getTasks", jsonParser, taskControllers.getTasks);
router.post("/add", jsonParser, taskControllers.add);
router.delete("/clear", taskControllers.getClear);


router.get('/', function (req, res) {
    res.render('toDoPaige', { title: 'ToDo' });
});

router.get("/getTasks", jsonParser, function (req, res) {
    global.Task.findAll().then((data) => {
        res.json(data);
    });
});

// router.post("/add", jsonParser, function (req, res) {

//     global.Task.create(req.body).then(() => {
//         res.send('Задача добавлена...')
//     });
// });

// router.delete("/clear", function (req, res) {

//     global.Task.destroy({
//         where: {}
//     }).then(() => {
//         res.send("Данные удалены...");
//     });
// });
module.exports = router;
