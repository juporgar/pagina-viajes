const Controller = require('./controller');
const UserModel = require('../models/users');
const SecureService = require('../services/secureService');
class loginController extends Controller
{
   constructor(req, res, next)
   {
       super(req,res,next);
   }

   login()
   {
       let Usuario = this.req.body.uname;
       let password = this.req.body.psw;
       let userModel = new UserModel();
       let secureService = new SecureService();
        userModel.findUser(Usuario,(info)=>{
            if (info.length === 0){
                this.req.flash('info','El usuario no existe');
                this.index();    
            }else{ 
                if(info[0].active === 0){
                    this.req.flash.error = "La cuenta no esta activa";
                    this.res.redirect('/login');}

                if(secureService.comparePass(password,info[0].password)){
                    this.req.session.user = Usuario; //Para guardar el usuario en una sesion flash
                    this.res.render('index',{
                        layaout: 'layout',
                        user:Usuario
                    });

                }else{
                    this.req.flash('info','El password es incorrecto')
                    this.index();    
                }
            }
        });
    }

   index()
   {
        let info = this.req.flash('info')
        if(info == "") 
        {
            console.log("No Existe Info");
            this.res.render('login', {title:'Login', layout: "layout-simp"});
        }else{
            this.res.render('login', {title:'Login', layout: "layout-simp", info: info});
            info="";
        }
    }

    regeneratePass() //coger la información que se manda con el boton
    {
        let userModel = new UserModel();
        console.log('email usuario ->' + this.req.body.email);
        userModel.findUserByEmail(this.req.body.email)
        .then((data)=>{
            console.log(data);
        })
        .catch(error=>console.log(error));
    }
}
module.exports = loginController;