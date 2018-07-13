const Controller = require('./controller');
// const TravelModel = require('../models/travelModel');

class modificarController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
    }

     index() {
             this.res.render('modificar', {
                 title: 'modificar',
                 layout: 'layout-simp'
             })
     }
    
}

module.exports = modificarController;