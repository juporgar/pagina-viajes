var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/quienessomos', function (req, res, next) { /* para hacer un llamamiento a quienessomos.hbs*/
  res.render('quienessomos', {
    title: 'Quienes Somos'
  });
});
module.exports = router;