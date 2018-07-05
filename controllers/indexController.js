const Controller = require('./controller');
class indexController extends Controller{
    constructor(req, res,next){
        super (req, res, next);
        this.user = req.session.user; //Para coger la sesion flash de login controller
    }
    index(){
        this.res.render('index',{
            user: this.user
        });
    }

}

module.exports = indexController;