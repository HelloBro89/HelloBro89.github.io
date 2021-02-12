let express = require('express');
let router = express.Router();
const jsonParser = express.json();

/* GET users listing. */
router.delete("/", function (req, res) {

    global.Task.destroy({
        where: {}
    }).then(() => {
        res.send("Данные удалены...");
    });
});

module.exports = router;