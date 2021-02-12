let express = require('express');
let router = express.Router();
const jsonParser = express.json();


router.post("/", jsonParser, function (req, res) {

    global.Task.create(req.body).then(() => {
        res.send('Задача добавлена...')
    });
});

module.exports = router;