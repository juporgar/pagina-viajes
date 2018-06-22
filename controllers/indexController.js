const Controller = require('./controller');
class indexController extends Controller{
    constructor(req, res,next){
        super (req, res, next);
    }
    index(){
        this.res.render('index');
    }

}

module.exports = indexController;