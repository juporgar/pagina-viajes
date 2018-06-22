var express = require('express');
var router = express.Router();
const LoginController = require('../controllers/loginController')
const UserModel = require('../models/users');
const RegistroController = require('../controllers/registroController');
const IndexController = require('../controllers/indexController');
const Email = require("../configuration/emailConf");
const Path = require("path");
const HbsEmail = require("nodemailer-express-handlebars");



/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', {
//     title: 'Express'
//   });
// });
router.get('/',(req, res, next)=>{
  let indexController = new IndexController(req,res,next);
  indexController.index();
});
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

router.get("/email",(req,res,next)=>{
  Email.transporter.use("compile", HbsEmail({
      viewEngine: "hbs",
      extName: ".hbs",
      viewPath: Path.join(__dirname,"../views/emails")
  }))
  
  let message = {
      to: 'julian.porgar@gmail.com',
      subject: 'Email de prueba',
      template: "email",
      context:{
          text: "Enviamos una prueba por handlebars"
      },

      // attachments:[{

      //     filename: "yo.jpeg",
      //     path: __dirname + "/../public/images/yo.jpeg",
      //     cid: "imagen"
      // }]
  };
  
  Email.transporter.sendMail(message, (error, info)=>{
  if(error) {
      res.status(500).send(error, message);
      return
  }
  Email.transporter.close();
      res.status(200).send('Respuesta "%s"' + info.response);
  });

})

module.exports = router;