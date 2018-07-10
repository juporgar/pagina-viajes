const Controller = require('./controller');
// const TravelModel = require('../models/travelModel');

class anadirController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
    }

     index() {
             this.res.render('anadir', {
                 title: 'anadir',
                 layout: 'layout-simp'
             })
     }
    
}

module.exports = anadirController;