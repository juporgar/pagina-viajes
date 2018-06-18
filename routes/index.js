var express = require('express');
var router = express.Router();
const LoginController = require('../controllers/loginController')
const UserModel = require('../models/users');
const RegistroController = require('../controllers/registroController')

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', {
//     title: 'Express'
//   });
// });

router.get('/login', (req, res, next) => {
  let loginController = new LoginController(req, res, next);
  loginController.index();
});


router.post('/login', (req, res, next) => {
  let loginController = new LoginController(req, res, next);
  loginController.login();
})


router.get('/login', function (req, res, next) { /* para hacer un llamamiento a login.hbs*/
  res.render('login', {
    title: 'Login'
  });
});

// router.get('/registro', function (req, res, next) { /* para hacer un llamamiento a login.hbs*/
//   res.render('registro', {
//     title: 'Registro'
//   });
// });

router.get('/registro', (req, res, next) => {
  let registroController = new RegistroController(req, res, next);
  registroController.index();
});


router.post('/registro', (req, res, next) => {
  let registroController = new RegistroController(req, res, next);
  registroController.registro();
})


module.exports = router;