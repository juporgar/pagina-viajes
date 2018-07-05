const Controller = require('./controller');
const UserModel = require('../models/users');
const IdentService = require('../services/identService');
const RegisterService = require('../services/secureService');
const EmailService = require('../services/emailService');

class registroController extends Controller
{
   constructor(req, res, next)
   {
       super(req,res,next);
   }

//Comprobación a la hora de registrar un usuario
register(registerData)
{
    console.log('registerData', registerData);
    
    //registrar un usuario si todo es correcto
    let userModel = new UserModel();
    userModel.getUserByEmailOrUsername(registerData.usua, registerData.email)
        .then((data)=>{
            if(data.length===0) //si el valor que tiene data es 0 (es decir, vacio), hazme esto que es para registrar el usuario
            {
                console.log('no user found');
                
                let identService = new IdentService();
                registerData.hash = identService.getUUIDD(3,4);
                let registerService = new RegisterService();
                registerData.passw = registerService.encryptPass(registerData.passw); //poner la contraseña encryptada
                userModel.insertUser(registerData);
                let emailService = new EmailService();
                emailService.sendRegisterEmail(registerData);
            } else {
                console.log('user found');
                this.req.flash.error="El usuario o el email ya esta en uso";
            }
        })
        .catch((error)=>{ //En caso de error, mostrar cual es el error
            console.log(error);
        })
    this.res.redirect('/registro'); //redirigirte a registro
}

    index(){
        this.res.render('registro',{
            title:'Registro',
            layout:'layout-simp'
        })
    }
}

module.exports = registroController;