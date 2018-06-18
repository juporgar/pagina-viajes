const Controller = require('./controller');
const UserModel = require('../models/users');

class registroController extends Controller
{
   constructor(req, res, next)
   {
       super(req,res,next);
   }

   registro()
   {
       let usuario = this.req.body.usua;
       let email = this.req.body.email;
       let password = this.req.body.passw;
       let userModel = new UserModel();
       
        userModel.registroUser(usuario,email,password,(info)=>{
       
            if(usuario.length === 1){
                this.req.flash('info','El usuario existe');
                this.index();
            }else{
                this.res.redirect('/login')
            }
        });

    }

    index(){
        this.res.render('registro',{
            title:'Registro',
            layaout:'layout'
        })
    }

}
module.exports = registroController;