let express = require('express');
let router = express.Router();
const jsonParser = express.json();

/* GET users listing. */
router.get("/", jsonParser, function (req, res) {

  global.Task.findAll().then((data) => {
    res.json(data);
  });
});

module.exports = router;
