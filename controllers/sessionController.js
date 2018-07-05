const Controller = require('./controller');

class sessionController extends Controller{
    constructor(req,res,next){
        super(req,res,next);
    }
    closeSession(){
        this.req.session.destroy(); // Para destruir las cookies y cerrar la sesion del usuario que estaba activado
        this.res.render('/')
    }
}
module.exports = sessionController;