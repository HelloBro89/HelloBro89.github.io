let express = require('express');
// let homeControllers = require('../controllers/homeControllers');
let router = express.Router();

// router.get('/', homeControllers.getMainPaige);


router.get('/', function (req, res, next) {
    res.render('mainPaige', { title: 'ToDo' });
});

module.exports = router;
