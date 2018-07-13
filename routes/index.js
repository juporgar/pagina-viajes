var express = require('express');
var router = express.Router();
const LoginController = require('../controllers/loginController')
const UserModel = require('../models/users');
const RegistroController = require('../controllers/registroController');
const IndexController = require('../controllers/indexController');
const Email = require("../configuration/emailConf");
const Path = require("path");
const HbsEmail = require("nodemailer-express-handlebars");
const ActivateUserController = require('../controllers/activateUserController');
const AdminController = require('../controllers/adminController');
const AnadirController = require('../controllers/anadirController')
const ModificarController = require('../controllers/modificarController')


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

// router.get('/login', function (req, res, next) { /* para hacer un llamamiento a login.hbs*/
//   res.render('login', {
//     title: 'Login'
//   });
// });

router.get('/registro', (req, res, next) => {
  let registroController = new RegistroController(req, res, next);
  registroController.index();
});

router.post('/registro', (req, res, next) => {
  let registroController = new RegistroController(req, res, next);
  registroController.register(req.body);
});

router.get("/email",(req,res,next)=>{
  Email.transporter.use("compile", HbsEmail({
      viewEngine: "hbs",
      extName: ".hbs",
      viewPath: Path.join(__dirname,"../views/emails")
  }))
});
  
  router.post('/email', (req, res, next) => {
    console.log("Enviar email");
    let loginController= new LoginController(req, res, next);
    loginController.regeneratePass(req.body);
    //let email = new Email(req, res, next);
    //email.sendemail();
  })

    //la vista de admin

  router.get('/admin', (req, res, next) => {
    let adminController = new AdminController(req, res, next);
    adminController.index();
  });

  //La vista de añadir de admin
  
  router.post('/anadir', (req, res, next) => {
    let anadirController = new AnadirController(req, res, next);
    anadirController.index();
  });

  //La vista de modificar de admin
  
  router.post('/modificar', (req, res, next) => {
    let modificarController = new ModificarController(req, res, next);
    modificarController.index();
  });



  //Para activar la cuenta

  router.get('/activate/:hash',(req, res, next)=>{
    let activateUserController = new ActivateUserController(req, res, next);
    activateUserController.index();
  });
  

module.exports = router;