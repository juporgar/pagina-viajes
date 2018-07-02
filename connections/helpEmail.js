var express = require('express');
var router = express.Router();
const LoginController = require('../controllers/loginController')
const UserModel = require('../models/users');
const RegistroController = require('../controllers/registroController');
const IndexController = require('../controllers/indexController');
const Email = require("../configuration/emailConf");
const Path = require("path");
const HbsEmail = require("nodemailer-express-handlebars");

let message = {
    to: 'julian.geekhubs@gmail.com',
    subject: 'Email de prueba',
    template: "email",
    context:{
        text: "Enviamos una prueba por handlebars"
    },
};
Email.transporter.sendMail(message, (error, info)=>{
if(error) {
    res.status(500).send(error, message);
    return
}
Email.transporter.close();
    res.status(200).send('Respuesta "%s"' + info.response);
});