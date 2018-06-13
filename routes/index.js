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

router.get('/login', function (req, res, next) { /* para hacer un llamamiento a login.hbs*/
  res.render('login', {
    title: 'Login'
  });
});

router.get('/registro', function (req, res, next) { /* para hacer un llamamiento a login.hbs*/
  res.render('registro', {
    title: 'Registro'
  });
});


module.exports = router;